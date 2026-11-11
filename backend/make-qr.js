const QRCode = require("qrcode");

QRCode.toFile("qr.png", "https://cloudyr-hub.github.io/qr-page/", {
  width: 1000,
  margin: 2,
  errorCorrectionLevel: "M",
})
  .then(() => console.log("Saved qr.png"))
  .catch((err) => console.error(err));
