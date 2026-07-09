use ("sample_mflix");

//ข้อที่ 3
db.theaters.find({"location.address.state": "AL" }).count();
db.theaters.find({ "location.address.city": "La Quinta" }).count();
db.theaters.findOne({ "location.address.city": "La Quinta" });

//ข้อที่ 4
db.movie.find({ plot: { $regex: "American", $options: "i" } }).count();
db.movie.find({plot: { $regex: "street", $options: "i" } }).count();
db.movie.find({plot: { $regex: "example", $options: "i" } });

//ข้อที่ 5
