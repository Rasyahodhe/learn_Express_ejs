const exprees = require("express"),
  expresslayouts = require("express-ejs-layouts"),
  app = exprees(),
  morgan = require("morgan"),
  port = 3000;

// Setting Express Untuk menggunakan Ejs
app.set("view engine", "ejs");
// Mempermudah menggunakan routing perpindahan halaman
app.use(expresslayouts);

app.get("/", (req, res) => {
  res.render("index", {
    bidang: "Rahim",
    title: "Halaman Home",
    layout: "layouts/main.ejs",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    bidang: "About",
    title: "Halaman About",
    layout: "layouts/main.ejs",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    bidang: "Contact",
    title: "Halaman Kontak",
    layout: "layouts/main.ejs",
  });
});
app.use("/", (req, res) => {
  res.status(404).send("Halaman Not Found");
});
// informasi Yang Mengaksese
app.use(morgan("combined"));
// Untuk menjalankan Server
app.listen(port, () => {
  console.log(`Server Berjalan pada http://localhost:${port}`);
});
