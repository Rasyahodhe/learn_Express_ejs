const exprees = require("express"),
  app = exprees(),
  morgan = require("morgan"),
  port = 3000;
// Setting Express Untuk menggunakan Ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { bidang: "Rahim", title: "Halaman Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { bidang: "About", title: "Halaman About" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { bidang: "Contact", title: "Halaman Kontak" });
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
