use('solitair-friend-project');

//  clear existing data
db.orders.deleteMany({});

//Insert mock data for orders collection

db.orders.insertMany([
  {
    "_id": "o001",
    "customer_id": "001",
    "customer_name": "Ruby Corundum",
    "products": [
      {
        "product_id": "c001",
        "name": "Diamond Scanning Crash Course",
        "quantity": 1,
        "price": 1590,
        "booking_info": {
          "date": "2026-08-13",
          "time": "18:00"
        }
      },
      {
        "product_id": "c002",
        "name": "Solitaire Friend",
        "quantity": 1,
        "price": 2590,
        "booking_info": {
          "date": "2026-08-12",
          "time": "14:00",
          "location": "Central World",
          "note": "อยากได้แหวนเพชรน้ำ 100 งบ 1 แสน ทรงกลมครับ"
        }
      },
      {
        "product_id": "c003",
        "name": "Solitaire Diamond Starter Kit",
        "quantity": 1,
        "price": 1290
      }
    ],
    "total_amount": 5470,
    "shipping_address": {
      "street": "123/45 ถนนวงศ์สว่าง แขวงวงศ์สว่าง เขตบางซื่อ",
      "city": "Bangkok",
      "postal_code": "10800",
      "country": "Thailand"
    },
    "payment_status": "paid",
    "order_status": "shipped",
    "created_at": "2026-07-09 13:30:00"
  },
  {
    "_id": "o002",
    "customer_id": "002",
    "customer_name": "Amber Yellow",
    "products": [
      {
        "product_id": "c003",
        "name": "Solitaire Diamond Starter Kit",
        "quantity": 2,
        "price": 1290
      }
    ],
    "total_amount": 2580, // 1290 x 2
    "shipping_address": {
      "street": "99/1 ถนนประชาราษฎร์ แขวงวงศ์สว่าง เขตบางซื่อ",
      "city": "Bangkok",
      "postal_code": "10800",
      "country": "Thailand"
    },
    "payment_status": "paid",
    "order_status": "shipped",
    "created_at": "2026-07-09 13:45:00"
  },
  {
    "_id": "o003",
    "customer_id": "003",
    "customer_name": "Emerald Green",
    "products": [
      {
        "product_id": "c001",
        "name": "Diamond Scanning Crash Course",
        "quantity": 1,
        "price": 1590,
        "booking_info": { 
          "date": "2026-08-15", 
          "time": "20:00" 
        }
      }
    ],
    "total_amount": 1590,
    "shipping_address": null, // เรียนออนไลน์ ไม่มีสินค้ากายภาพ ไม่ต้องเก็บที่อยู่จัดส่ง
    "payment_status": "paid",
    "order_status": "completed",
    "created_at": "2026-07-09 14:00:00"
  },
  {
    "_id": "o004",
    "customer_id": "004",
    "customer_name": "Sapphire Blue",
    "products": [
      {
        "product_id": "c002",
        "name": "Solitaire Friend",
        "quantity": 1,
        "price": 2590,
        "booking_info": { 
          "date": "2026-08-20", 
          "time": "11:00", 
          "location": "Siam Paragon", 
          "note": "เน้นดูแหวนหมั้นผู้ชาย งบประมาณ 50,000 บาทค่ะ" 
        }
      }
    ],
    "total_amount": 2590,
    "shipping_address": null, // บริการนัดเจอหน้าร้าน ไม่มีสินค้ากายภาพ
    "payment_status": "paid",
    "order_status": "confirmed_by_expert",
    "created_at": "2026-07-09 14:15:00"
  },
  {
    "_id": "o005",
    "customer_id": "005",
    "customer_name": "Topaz Golden",
    "products": [
      {
        "product_id": "c001",
        "name": "Diamond Scanning Crash Course",
        "quantity": 1,
        "price": 1590,
        "booking_info": { 
          "date": "2026-08-14", 
          "time": "19:30" 
        }
      },
      {
        "product_id": "c003",
        "name": "Solitaire Diamond Starter Kit",
        "quantity": 1,
        "price": 1290
      }
    ],
    "total_amount": 2880, // 1590 + 1290
    "shipping_address": {
      "street": "456 ลาดพร้าว ซอย 1 แขวงจอมพล เขตจตุจักร",
      "city": "Bangkok",
      "postal_code": "10900",
      "country": "Thailand"
    },
    "payment_status": "paid",
    "order_status": "pending", // รอดำเนินการจัดส่งกล่องอุปกรณ์
    "created_at": "2026-07-09 14:20:00"
  },
  {
    "_id": "o006",
    "customer_id": "006",
    "customer_name": "Garnet Red",
    "products": [
      {
        "product_id": "c002",
        "name": "Solitaire Friend",
        "quantity": 1,
        "price": 2590,
        "booking_info": { 
          "date": "2026-08-25", 
          "time": "15:00", 
          "location": "EmQuartier", 
          "note": "อยากให้ช่วยตรวจเช็คใบเซอร์ GIA สองเม็ดที่ร้านตู้จองไว้ให้หน่อยค่ะ" 
        }
      },
      {
        "product_id": "c003",
        "name": "Solitaire Diamond Starter Kit",
        "quantity": 1,
        "price": 1290
      }
    ],
    "total_amount": 3880, // 2590 + 1290
    "shipping_address": {
      "street": "789 สุขุมวิท ซอย 24 แขวงคลองตัน เขตคลองเตย",
      "city": "Bangkok",
      "postal_code": "10110",
      "country": "Thailand"
    },
    "payment_status": "paid",
    "order_status": "pending",
    "created_at": "2026-07-09 14:30:00"
  }
]);

// Find all orders
db.orders.find({});