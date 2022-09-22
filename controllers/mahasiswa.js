var express = require("express");
var router = express.Router();

router.get("/", function(req,res, next){
    console.log("mahasiswa dipanggil")
    res.send("Hallo Mahasiswa")
    next();
});

router.get("/:nim", function(req,res){
    console.log("nim mahsiswa")
    res.send("akses nim Mahasiswa")
});
module.exports = router;