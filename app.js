const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))
let items = [   " buy food" ," cook food" ,"eat food"];
let workItems = [];

app.get("/", function(req,res){
  let today = new Date();
  let options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }
  var currentDay = today.toLocaleDateString("en-us", options);


  res.render("list",{
    listTtle:currentDay,
    newItems:items
  })
})
 app.post("/", function(req,res){
   let item = req.body.newItem;

   if(req.body.list === "work"){
     workItems.push(item);
     res.redirect("/work")
   }else{
     items.push(item);
    res.redirect("/");
   }

  console.log(req.body);
 })


 app.get("/work", function(req,res){
   res.render("list",{
     listTtle: "work",
     newItems: workItems
   })
 })
 app.post("/work",function(req,res){
   res.send("thanks");

 })



app.listen(3000, function(){

})
