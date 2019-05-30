import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';
import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import 'dotenv/config';

const { PORT, NODE_ENV, NOW } = process.env;
const dev = NODE_ENV === 'development';
const FileStore = sessionFileStore(session);

const app = express();

function logger(req, res, next) {
    console.log(`~> Received ${req.method} on ${req.url}`);
    next();
}

app.use(bodyParser.json());
app.use(session({
	key: 'sapper-test',
	secret: 'MySuperSecret',
	resave: false,
	saveUninitialized: false,
	cookie: { expires: 600000 },
	store: new FileStore({ path: NOW ? `/tmp/sessions` : `.sessions` })
}));

function protect(req, res, next) {
	const allowed = [ '/', '/signin', '/credentials' ];
	const isPrivate = !allowed.includes(req.path);
	const isFile = req.path.includes('.');
	const hasUser = req.session.user;

	if (isPrivate && !isFile && !hasUser) {
		res.redirect(302, '/credentials');
		return;
	}

	if (hasUser && req.path === '/credentials') {
		res.redirect(302, '/home')
		return;
	}

	next();
}

// route for user Login
app.post('/signin', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (username === 'admin@admin' && password === 'admin') {
		req.session.user = { name: 'Rodolfo do Nascimento Azevedo' };
		res.status(200).end();
		return;
	}

	res.status(403).end();
});

app.use(logger)
	.use(protect)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: req => ({ user: req.session && req.session.user })
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});


export default app;