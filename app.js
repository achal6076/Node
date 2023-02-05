// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/test', (req, res) => {
//   res.send('Hello Achal this is second node!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express = require('express');
// const app = express();
// const port = 3001;

// app.get('/test',(req,resp)=>{
//     resp.send("hellow Achal this is from your side");
// })

// app.listen(port,()=>{
//     console.log(`your port is 3001 ${port}`);
// })

const express = require("express");
const app = express();
const port = 3000;

let users = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 35 },
  { id: 3, name: "Jim Smith", age: 40 },
];

app.use(express.json());


app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.send(user);
});

app.post("/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(user);
  res.send(user);
});

app.patch("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  user.age = req.body.age;
  res.send(user);
});

app.delete("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
