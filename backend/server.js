const app = require("./app.js");
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db.js");

connectDB()
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB error", err);
    process.exit(1);
  });
