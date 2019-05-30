const functions = require('firebase-functions');
const app = require('./__sapper__/build/server/server');

exports.ssr = functions.https.onRequest(app);
