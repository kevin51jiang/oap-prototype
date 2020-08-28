var speakeasy = require("speakeasy"); //Generate a secret key First.
var QRCode = require("qrcode");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const authCode;

function generateKey() {
  var secret = speakeasy.generateSecret({ length: 30 });
  console.log(secret.base32); //using speakeasy generate one time token.

  var token = speakeasy.totp({
    secret: secret.base32,
    encoding: "base32",
  });

  console.log(token);

  // QRCode.toDataURL(secret.otpauth_url, function (err, url) {
  //   console.log(url);
  // });

  var QRCode = require("qrcode");
  //console.log(QRCode);
  //console.log(secret.otpauth_url);

  QRCode.toString(secret.otpauth_url, { type: "terminal" }, function (
    err,
    url
  ) {
    console.log(url);
    authCode = url;
  });

  QRCode.toDataURL(secret.otpauth_url, function (err, url) {
    console.log(url);

    rl.question("Please enter your 6-digit verification code", verification);
  });
}

function verification(inputToken) {
  var verified = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: "base32",
    token: inputToken,
    window: 6,
  });
  if (verified) {
    console.log("Your login has been authenticated!");
    return true;
  } else {
    console.log("Sorry that was not the code we were expecting! Try again!");
    rl.question("Please enter your 6-digit verification code", verification);
  }
}

// console.log(verified);;
var source = document.getElementById("qrcode");
var att = document.createAttribute("src");
att.value = authCode;
source.setAttributeNode(att);