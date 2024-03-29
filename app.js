const exprees = require("express"),
  expresslayouts = require("express-ejs-layouts"),
  app = exprees(),
  morgan = require("morgan"),
  port = 3000;

// Setting Express Untuk menggunakan Ejs
app.set("view engine", "ejs");
// Mempermudah menggunakan routing perpindahan halaman
app.use(expresslayouts);

// =============== Menuju Halaman Home
app.get("/", (req, res) => {
  res.render("index", {
    bidang: "Rahim",
    title: "Halaman Home",
    layout: "layouts/main.ejs",
  });
});

// ==================    Menuju Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    bidang: "About",
    title: "Halaman About",
    layout: "layouts/main.ejs",
  });
});
// ===================   Menuju Halaman Kontak
app.get("/contact", (req, res) => {
  res.render("contact", {
    bidang: "Contact",
    title: "Halaman Kontak",
    layout: "layouts/main.ejs",
  });
});

// Pengecekkan Untuk apakah halaman ada atau tidak
app.use("/", (req, res) => {
  res.status(404).render("notFound", {
    title: "Not Found",
    layout: "layouts/main.ejs",
  });
});

//========================  informasi Yang Mengaksese
app.use("/", morgan("combined"));

//========================  Untuk menjalankan Server
app.listen(port, () => {
  console.log(`Server Berjalan pada http://localhost:${port}`);
});
