const express= require('express');
const app = express();
const db = require('../models');
let { Flower }  = db;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/flowers', function(req, res) {
	Flower.findAll()
		.then(function (flowers) {
			res.json(flowers);
		});
});

app.get('flowers/:id', function(req, res) {
	let flowerId = req.params.id;
	Flower.findById(flowerId)
	.then((flower) =>{
		res.render(flower);
	})
	.catch(err =>{
		console.log('get error', err);
	});
});

app.post('/flowers', function(req,res) {
	console.log('req.body', req.body);
	Flower.create({ 
		name: req.body.name,
		color: req.body.color,
		description: req.body.description

	})
	.then(function(flowers){
		res.json(flowers);
	})
	.catch(err =>{
		console.log('post error', err);
	});
});

app.delete('/flowers/:id', function(req, res) {
	Flower.destroy(
		{
			where: {
				id: req.params.id
			}

		})
		.then((flower) =>{
			res.json(flowers);

		});
});

app.listen(3000, function(){
	db.sequelize.sync();
});

