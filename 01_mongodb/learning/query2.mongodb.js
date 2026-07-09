use("sample_mflix");

//ข้อที่ 2
db.movies.findOne({ type: "movie", rated: "TV-G" });
db.movies.find({ type: "movie", rated: "TV-G" }).count();

