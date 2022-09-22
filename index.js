var express = require("express");
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use("/public", express.static('public'));
app.use("/images", express.static('images'));


app.get('/', function(req, res){
    let data = {
        nama: "Zaki",
        email: "ahmadin.zaki@gmail.com",
        status: false,
        content: "konten",
        hobi: ["makan","tidur", "nonton anime"],
    };
    // {data} dalam res.render merupakan pemanggil let data
    res.render('index',{data});
});

// INI BELAJAR BACKEND ALAMAT URL
// var mahasiswaController = require("./controllers/mahasiswa");
// var produkController = require("./controllers/produk");

// // midleware adalah penjegat sebelum masuk ke program utama
// app.use("/mahasiswa/:nim",function(req, res, next) {
//     if(req.params && req.params.nim) {
//         console.log("middleware nim " + req.params.nim)
//     }
//     next();
// })

// app.use('/mahasiswa', mahasiswaController);
// app.use('/produk', produkController);

// // untuk menampilkan halam utama menggunakan '/'
// // app.get('/',function(req,res){
// //     res.send("Hallo")
// // });
// app.use(function(req, res) {
//     console.log("middleware response");
// });

// // digunakan untuk menampilkan pesan eror jika halaman tidak ada
// app.get("*", function(req, res){
//     res.status(404).send("404 Not Found");
// });



// app.get('/product',function(req,res){
//     res.send("product")
// });


app.listen(3001)