import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB().then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`server is listening on ${process.env.PORT}`);
    });
});


