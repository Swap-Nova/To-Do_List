## Why use Embedded JavaScripts (EJS):
- When building an backend we use ```res.write()``` function. In order to avoid that we can just add the content in our HTML file and then call it in our app.js file:
```javascript
res.sendFile(__dirname+"/index.html");
```
- But at the same time, we cannot write repetitive HTML files all the time for each condition. So, we use templates for those who have similar content to each other.

## Getting started with EJS:
- To get started
```bash
npm install ejs
```
- To use the ejs we have to create a view directory that contains the index.ejs file.
- The ejs code is the same as HTML code, i.e., anything that is a valid HTML code will also be a valid ejs code.
- There are different types of tags that can be used in the EJS templates:

<img width="521" alt="Screenshot 2023-07-10 at 11 10 07 AM" src="https://github.com/Swap-Nova/To-Do_List/assets/92979885/a85fc43a-5d84-49a1-9413-6695ae644b59">

## Passing Data from Webpage to Server:
- Create an HTML form that is a method to POST the data to the server.
- If we write this code the page crashes due to the new EJS line where we are rendering the newListItem. The problem is that the newListItem is not defined. Because when we run the local host we land to the app.get() and we are rendering only
```javascript
res.reneder(”lists”, {kindOfDay:Day)};
```
- Therefore, we have to use res.redirect() method so that it returns back to the home route app.get() function and adds our new item.
```javascript
res.render("lists", { 
        kindOfDay : day, // kindOfDay is a variable that will be called in EJS
        newListItem : item // redirect from the post request
    });

app.post(("/"),(req,res)=>{
    var item = req.body.newItem;
    console.log(item);

    // it will redirect to the home route which then triggers the app.get method  
    res.redirect("/");
});
```
- The problem with this code is that ‘item’ is created inside the post function and therefore, the item variable will not be recognized by the res.render(). To fix this we will be using Scope of Programming.

## Templates vs Layouts:
- To implement logic on our server that separates out the data. This help in reusing the ejs template for as many different lists as we want to create. But the problem begins when we want a different type of page like the About or Contact page so it is not possible to use the same template. 
- Using layout:
<img width="682" alt="Screenshot 2023-07-10 at 11 14 44 AM" src="https://github.com/Swap-Nova/To-Do_List/assets/92979885/5bb5a484-cdfb-42d7-a035-0cdff8620e50">

## Understanding modules and exporting:
- So we start by wrapping the code block within a function returning the required output and exporting the function module.
Then by using ```express.static``` we can call the module inside the home route.
- Moreover, there are different methods to express a javascript function. Here we are exporting the module by function declaration in order to use a reusable component that can define the current date and day.
```javascript
module.exports.getDate = function(){
	  let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-US", options);
};
```
