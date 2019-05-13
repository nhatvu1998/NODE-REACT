var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'pnnv2002',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
 
})
/* GET home page. */
router.get('/', function(req, res, next) {});

router.get('/getData01', function(req, res, next) {
  pool.query('SELECT * FROM public.product_info', (error, response) => {
    if(error)
      console.log(error);
    else  
      res.send(response.rows);
  })

});


router.get('/add', function(req, res, next) {
  res.render('add',{});
});

router.post('/add', function(req, res, next) {
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;
  var image = req.body.image;
  pool.query("INSERT into product_info (product_name, product_price, image) values ($1,$2,$3)",
  [product_name,product_price,image], (error, response) => {
    if(error) console.log(error);
    else res.send('đã nhận được dữ liệu '+ product_name + product_price+image);
  });
  
});

module.exports = router;
