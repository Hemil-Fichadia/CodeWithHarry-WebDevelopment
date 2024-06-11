// Inseting data into mongo db 

use HemilKart 

db.items.insertOne({name: "One Plus 7", price: 38000, rating: 4.9, qty: 1500, sold: 89})

db.items.insertMany([{name: "One Plus 7", price: 38000, rating: 4.9, qty: 1500, sold: 89}, {name: "One Plus 7 pro", price: 51000, rating: 4.7, qty: 1100, sold: 76}])

db.items.insertMany([{name: "One Plus 7 pro", price: 51000, rating: 4.9, qty: 1500, sold: 386}, {name: "One Plus 8 pro", price: 62000, rating: 4.7, qty: 1100, sold: 76}, {name: "One Plus 8T", price: 54000, rating: 4.6, qty: 1300, sold: 410}])


db.items.insertMany([{name: "Samsung S20 FE", price: 40000, rating: 3.5, qty: 800, sold: 30}, {name: "Samsung Z Fold", price: 140000, rating: 3.5, qty: 1000, sold: 26}])

db.items.insertOne({name: "i pad pro 2021", price: 129000, rating: 3.0, qty: 950, sold: 85})

show dbs 

//This query will return all the objects in the collection of db
db.items.find()
