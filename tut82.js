//searching data in mongo db

use Hemilkart

//This query will return all the objects with rating 4.7
//The parameter passed in find, is filter object  
db.items.find({rating: 4.7})

//This query will return all the objects greater than or equal to rating 3.5 (rating >= 3.5)
db.items.find({rating: {$gte: 3.5}})

//This query will return all the objects greater than  rating 3.5 (rating > 3.5)
db.items.find({rating: {$gt: 3.5}})

//And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 25000}})
//This query will return all the objects with ratings less than and price greater than 114000
db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})


//Or operator
db.items.find({$or:[{rating: {$lt: 3.5} }, {price:{$gt: 114000}}]})

//In this find the parameter {rating: 1} is called projection which is supposed to return only the requested objects like here rating and qty
db.items.find({rating: {$gt: 3.5}}, {rating: 1})
db.items.find({rating: {$gt: 3.5}}, {rating: 1, qty: 1})