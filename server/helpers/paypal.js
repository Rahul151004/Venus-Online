const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "***REMOVED***",
  client_secret: "***REMOVED***",
});

module.exports = paypal;
