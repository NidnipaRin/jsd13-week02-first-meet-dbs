use("sample_mflix");

//ข้อที่ 1
db.comments.find({ name: "John Bishop" })
db.comments.findOne({_id: ObjectId("5a9427b9aefb5c1b2c3a4d5e") });
db.comments.findOne({email: "john.bishop@fakemail.com"});
db.comments.findOne({ name: "John Bishop" });