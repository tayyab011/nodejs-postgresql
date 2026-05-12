import { app } from "./index.js";
import pool from "./app/config/db.js";

const PORT = process.env.PORT || 5050;

pool
  .connect()
  .then(() => {
    console.log("PostgreSQL Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
