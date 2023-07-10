// jshint version:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

// Array- items assigned newListItems and so it is used in EJS File for <ul>
const items= ["Buy Groceries", "Arriving Guests", "Morning Jog"]; 
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));

app.get("/", (req,res)=>{

    const day = date.getDate(); // using the built module of date

    // for using the day-module
    // let day = date.getDay(); 

    // lists is the name of the EJS file
    res.render("lists", { 
        listTitle : day, // listTitle is a variable that will be called in EJS
        newListItems : items // redirect from the post request and return the array of items
    });
});

app.post(("/"),(req,res)=>{
    // console.log(req.body);
    const item = req.body.newItem;
    
    // so if the item is added in work route then it will be pushed in the array workItems 
    // also the name list is from the button name="list" in our ejs file
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/"); // it will redirect to the home route which then triggers the app.get method  
    }
});

app.get("/work",(req,res)=>{
    res.render("lists", {
        listTitle:"Work List",
        newListItems: workItems
    }); 
});

// app.post("/work",(req,res)=>{
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.direct("/work");
// });

app.get("/about",(req,res)=>{
    res.render("about");
});

app.listen(3000,()=>{
    console.log("Server started at port 3000.");
});