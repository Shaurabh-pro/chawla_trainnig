const express = require ("express");
const users = require ("./MOCK_DATA.json");
const fs = require ("fs");

const app = express();

const port = 8000;

//middleware
app.use(express.urlencoded({extended: false}));

app.get('/users', (req , resp) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>
                ${user.first_name}
            </li>`).join(" ")}
        </ul>
    `;
    resp.send(html);
});

app.get('/api/users', (req, resp) => {
    return resp.json(users);
});


app.route("/api/users/:id").get( (req, resp) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (user) {
        return resp.json(user);
    } else {
        return resp.status(404).json({ error: "User not found" });
    }
}).patch((req, resp) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      // Update user based on the request body
      const updatedUser = { ...users[userIndex], ...req.body };
      users[userIndex] = updatedUser;

      return resp.json({ status: "success", user: updatedUser });
    } else {
      return resp.status(404).json({ error: "User not found" });
    }
  })
  .delete((req, resp) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      // Delete user
      const deletedUser = users.splice(userIndex, 1)[0];

      return resp.json({ status: "success", deletedUser });
    } else {
      return resp.status(404).json({ error: "User not found" });
    }
  });

app.post('/api/users', (req, resp) => {
    const body = req.body;
    users.push({...body, id: users.length + 1    });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        console.log("body", body);
        return resp.json({ status: "success", id: users.length});
    });

    })
   




app.listen(port, ()=>{
    console.log(`server started is ${port}`);
});


