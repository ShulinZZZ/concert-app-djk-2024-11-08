let express = require("express");
let app = new express();                                                                     
app.set("view engine","ejs")

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.cv6gikysy52c.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "ADMINmmz0s6l2",
  database:"pradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
  res.render("index", {aConcerts: result});
 }); 
});
app.listen(3000);

