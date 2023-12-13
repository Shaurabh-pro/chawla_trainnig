const users = require("./MOCK_DATA.json");
const express = require("express")
const userRouter = require("./routes/user")
const {connectMongoDB} = require("./DB/connection")

const app = express();
app.use('/api/users', userRouter);

connectMongoDB("http://localhost:8000/restDB");

app.listen(port, () => {
  console.log(`server started is ${port}`);
});
