use('solitair-friend-project');

//clear existing data
db.users.deleteMany({});

//Insert mock data for users collection 
db.users.insertMany([
  {
    "_id": "001",
    "name": "Ruby Corundum",
    "email": "ruby.corundum@example.com",
    "shopping_cart": [
      {
        "product_id": "c001",
        "product_name": "Diamond Scanning Crash Course",
        "quantity": 1,
        "price": 1590,
        "booking_info": { "date": "2026-08-13", "time": "18:00" }
      },
      {
        "product_id": "c002",
        "product_name": "Solitaire Friend",
        "quantity": 1,
        "price": 2590,
        "booking_info": { "date": "2026-08-12", "time": "14:00", "location": "Central World", "note": "อยากได้แหวนเพชรน้ำ 100 งบ 1 แสน ทรงกลมครับ" }
      },
      {
        "product_id": "c003", 
        "product_name": "Solitaire Diamond Starter Kit",
        "quantity": 1, 
        "price": 1290 
      }
    ]
  },
  {
    "_id": "002",
    "name": "Amber Yellow",
    "email": "amber.y@example.com",
    "shopping_cart": [
      {
        "product_id": "c003",
        "product_name": "Solitaire Diamond Starter Kit",
        "quantity": 2,
        "price": 1290
      }
    ]
  },
  {
    "_id": "003",
    "name": "Emerald Green",
    "email": "emerald.g@example.com",
    "shopping_cart": [
      {
        "product_id": "c001",
        "product_name": "Diamond Scanning Crash Course",
        "quantity": 1,
        "price": 1590,
        "booking_info": { "date": "2026-08-15", "time": "20:00" }
      }
    ]
  },
  {
    "_id": "004",
    "name": "Sapphire Blue",
    "email": "sapphire.b@example.com",
    "shopping_cart": [
      {
        "product_id": "c002",
        "product_name": "Solitaire Friend",
        "quantity": 1,
        "price": 2590,
        "booking_info": { "date": "2026-08-20", "time": "11:00", "location": "Siam Paragon", "note": "เน้นดูแหวนหมั้นผู้ชาย งบประมาณ 50,000 บาทค่ะ" }
      }
    ]
  },
  {
    "_id": "005",
    "name": "Topaz Golden",
    "email": "topaz.g@example.com",
    "shopping_cart": [
      {
        "product_id": "c001",
        "product_name": "Diamond Scanning Crash Course",
        "quantity": 1,
        "price": 1590,
        "booking_info": { "date": "2026-08-14", "time": "19:30" }
      },
      {
        "product_id": "c003",
        "product_name": "Solitaire Diamond Starter Kit",
        "quantity": 1,
        "price": 1290
      }
    ]
  },
  {
    "_id": "006",
    "name": "Garnet Red",
    "email": "garnet.r@example.com",
    "shopping_cart": [
      {
        "product_id": "c002",
        "product_name": "Solitaire Friend",
        "quantity": 1,
        "price": 2590,
        "booking_info": { "date": "2026-08-25", "time": "15:00", "location": "EmQuartier", "note": "อยากให้ช่วยตรวจเช็คใบเซอร์ GIA สองเม็ดที่ร้านตู้จองไว้ให้หน่อยค่ะ" }
      },
      {
        "product_id": "c003",
        "product_name": "Solitaire Diamond Starter Kit",
        "quantity": 1,
        "price": 1290
      }
    ]
  }
]);

//Find all users
db.users.find({});