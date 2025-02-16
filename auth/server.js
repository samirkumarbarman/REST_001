import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is listening on port :${PORT}`);
});