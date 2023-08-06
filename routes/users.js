import express from "express";

const router = express.Router();
router.use(express.urlencoded({extended:true}));
const users = [
  {
    fname: "John",
    lname: "Doe",
    age: 25,
  },
  {
    fname:'Angela',
    lname:'Yu',
    age:28
  }
];
router.route("/").get((req, res) => {
  res.send(users);
}).post((req,res)=>{
    users.push(req.body)
    res.send(users);
})
export default router;
