const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVXp34aDqth_tpUvHL-m7EKdiYL2deyOQ8n-q3RmfArvvJF50h1mpdrFVrAzIw3Pwfe26RkGFoAYJvtL",
  client_secret: "EGDZrw5GUDuBT3qiY_DmtwpBnikDJaHYxhPHOmXNqKJMeouugPyTpObd0uIhRdBeqEBj2FI0ODv6T2NJ",
});

module.exports = paypal;
