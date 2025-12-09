const http = require("http");
const { MongoClient, ObjectId } = require("mongodb");

// ===== MongoDB connection =====
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
let db;

// Connect to MongoDB once at startup
client
  .connect()
  .then(() => {
    console.log("✅ Connected to MongoDB");
    db = client.db("restaurantDB");
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const server = http.createServer(async (req, res) => {
  // ===== CORS HEADERS =====
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    // Helper: Parse JSON body safely
    const parseBody = () =>
      new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            resolve(JSON.parse(body || "{}"));
          } catch {
            reject("Invalid JSON format");
          }
        });
      });

    // ==========================
    // ✅ REGISTER USER
    // ==========================
    if (req.method === "POST" && req.url === "/register") {
      const data = await parseBody();
      const users = db.collection("users");

      const existing = await users.findOne({ email: data.email });
      if (existing) {
        res.writeHead(409, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "⚠️ User already exists" }));
        return;
      }

      const result = await users.insertOne({
        fullname: data.fullname,
        phone: data.phone,
        email: data.email,
        password: data.password,
        createdAt: new Date(),
      });

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "🎉 Registration Successful!",
          insertedId: result.insertedId,
        })
      );
    }

    // ==========================
    // ✅ LOGIN USER
    // ==========================
    else if (req.method === "POST" && req.url === "/login") {
      const { email, password } = await parseBody();
      const users = db.collection("users");
      const user = await users.findOne({ email, password });

      if (user) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "✅ Login Successful! Welcome back 🍽️",
            fullname: user.fullname,
            email: user.email,
          })
        );
      } else {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "❌ Invalid Email or Password!" }));
      }
    }

    // ==========================
    // ✅ VIEW USERS
    // ==========================
    else if (req.method === "GET" && req.url === "/view") {
      const users = await db.collection("users").find({}).toArray();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    }

    // ==========================
    // ✅ ADD DISH
    // ==========================
    else if (req.method === "POST" && req.url === "/add-dish") {
      const data = await parseBody();
      const menu = db.collection("menu");

      const result = await menu.insertOne({
        itemCategory: data.itemCategory,
        itemType: data.itemType,
        itemName: data.itemName,
        itemPrice: data.itemPrice,
        itemDescription: data.itemDescription,
        itemImage: data.itemImage,
        createdAt: new Date(),
      });

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "🍽️ Dish added successfully!",
          insertedId: result.insertedId,
        })
      );
    }

    // ==========================
    // ✅ VIEW MENU
    // ==========================
    else if (req.method === "GET" && req.url === "/menu") {
      const menuItems = await db.collection("menu").find({}).toArray();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(menuItems));
    }

    // ==========================
    // ✅ MENU ITEM BY ID (GET + DELETE)
    // ==========================
    else if (req.url.startsWith("/menu/")) {
      const id = req.url.split("/")[2];
      const menu = db.collection("menu");

      // GET menu item by ID
      if (req.method === "GET") {
        try {
          const item = await menu.findOne({ _id: new ObjectId(id) });
          if (item) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(item));
          } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "❌ Dish not found!" }));
          }
        } catch {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "❌ Invalid ID format!" }));
        }
      }

      // DELETE menu item by ID
      else if (req.method === "DELETE") {
        try {
          const result = await menu.deleteOne({ _id: new ObjectId(id) });

          if (result.deletedCount === 1) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({ message: "🗑️ Dish deleted successfully!" })
            );
          } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "❌ Dish not found!" }));
          }
        } catch {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "⚠️ Invalid ID format!" }));
        }
      }
    }

    // ==========================
    // ✅ PLACE ORDER (supports 1 or multiple items)
    // ==========================
    else if (req.method === "POST" && req.url === "/orders") {
      const orderData = await parseBody();
      const orders = db.collection("orders");

      let orderToInsert;

      // 🥇 CASE 1: Multiple items
      if (Array.isArray(orderData.items)) {
        const totalAmount = orderData.items.reduce(
          (sum, i) => sum + (i.itemPrice || 0) * (i.quantity || 1),
          0
        );

        orderToInsert = {
          userEmail: orderData.userEmail || "guest@example.com",
          userName: orderData.userName || "Guest User",
          address: orderData.address || "Not provided",
          phone: orderData.phone || "Not provided",
          items: orderData.items,
          totalAmount,
          paymentStatus: "Pending",
          createdAt: new Date(),
        };
      }

      // 🥈 CASE 2: Single item (from MenuContainer)
      else if (orderData.itemName) {
        orderToInsert = {
          userEmail: orderData.userEmail || "guest@example.com",
          userName: orderData.userName || "Guest User",
          items: [
            {
              itemName: orderData.itemName,
              itemImage: orderData.itemImage,
              itemPrice: orderData.itemPrice,
              quantity: orderData.quantity || 1,
            },
          ],
          totalAmount: orderData.itemPrice * (orderData.quantity || 1),
          paymentStatus: "Pending",
          createdAt: new Date(),
        };
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "⚠️ Invalid order format" }));
        return;
      }

      const result = await orders.insertOne(orderToInsert);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "🛍️ Order placed successfully!",
          orderId: result.insertedId,
          totalAmount: orderToInsert.totalAmount,
        })
      );
    }

    // ==========================
    // ✅ GET ALL ORDERS
    // ==========================
    else if (req.method === "GET" && req.url === "/orders") {
      const orders = await db.collection("orders").find({}).toArray();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(orders));
    }

    // ==========================
    // ✅ DELETE ORDER BY ID
    // ==========================
    else if (req.method === "DELETE" && req.url.startsWith("/orders/")) {
      const id = req.url.split("/")[2];
      const orders = db.collection("orders");

      try {
        const result = await orders.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ message: "🗑️ Order deleted successfully!" })
          );
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "❌ Order not found!" }));
        }
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "⚠️ Invalid order ID format!" }));
      }
    }

    // ==========================
    // ✅ GET ORDERS BY USER EMAIL
    // ==========================
    else if (req.method === "GET" && req.url.startsWith("/orders/")) {
      const email = decodeURIComponent(req.url.split("/")[2]);
      const userOrders = await db
        .collection("orders")
        .find({ userEmail: email })
        .toArray();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userOrders));
    }

    // ==========================
    // ❌ INVALID ROUTE
    // ==========================
    else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  } catch (err) {
    console.error("❌ Error:", err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: "Internal Server Error", error: err.message })
    );
  }
});

server.listen(8081, () => {
  console.log("🚀 Server running at http://127.0.0.1:8081/");
});
