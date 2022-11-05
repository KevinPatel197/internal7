const router = require('express').Router();
const Student = require('../models/db');
const multer = require('multer');
const path = require('path');
const vehicle = require('../models/db');

var myfilename;
var updatefilename;
const options = multer.diskStorage({
    destination : function(req, file, cb) 
    {
        cb(null, './uploads')
    },
    filename : function(req, file, cb)
    {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: options });

router.get('/', (req, res) => {
    vehicle.vehicle1.find((err, data) => {
        if(err) throw err;
        res.render('insert', {data: data});
    });
});
router.get('/showdata', (req, res) => {
    vehicle.vehicle2.find((err, data) => {
        if(err) throw err;
        res.render('show', {data: data});
    });
});

router.post('/insert', upload.single('myfile'), (req, res) => {
    if(req.body.insert == 'UPLOAD')
    {
        myfilename = req.file.filename;
        res.send("Uploaded Successfully as " + myfilename);
    }
    else if(req.body.insert == 'INSERT')
    {
        var insert_data = new vehicle.vehicle2({
            vehicle_brand: req.body.brand,
            category_name: req.body.cat,
            vehicle_picture: myfilename,
            price: req.body.price,
            depreciation: req.body.dep,
            number_of_years: req.body.years,
            total_price: req.body.tprice
        });
        insert_data.save((err, data) => {
            if(err) throw err;
            res.send("Inserted Successfully...");
        });
    }
});

module.exports = router;