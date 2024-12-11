
// Import Express
const express = require('express')
const morgan = require('morgan')
// Create an Express app
const app = express();


//Answer Quastion 1
app.get('/greeting/:name', (req, res) => {
    const itemId = req.params.name; 
    res.send( `<h1>Hello there!${itemId}</h1>`);
  });



//Answer Quastion 2
app.get('/roll/:number', (req, res) => {
    const itemId = req.params.number; 
    if (isNaN(itemId)) {
        return res.send('You must specify a number.'); 
    };
    //
    const number = parseInt(itemId,20)
    if (number<=0){
        return res.send('provide a number greater than 0')
    }
//
})


//Answer 3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
//
app.get('/collectibles/:index', (req, res) => {
    const itemId = req.params.index; 
    res.send( `This item is not yet in stock. Check back soon`);
  });
//

//Answer 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes',(req,res) => {
    const itemId = req.params.shoes; 
    res.send( `list of shoes${itemId}`);
    
    let filterShoes = shoes
}
const { 'max-Price':maxPrice , 'main-price':minPrice, type} = req.query

//filter max-price

app.get('/shoes/:max-price',(req,res) => {
    const itemId = req.params.shoes; 
    res.send( `list of shoes${itemId}`);
if (maxPrice) {
    filterShoes = filterShoes.filter(shoe =>shoe.price <= parseInt(maxPrice)   

}

   //filter min-price        

    app.get('/shoes/:min-price',(req,res) => {
    const itemId = req.params.shoes; 
    res.send( `list of shoes${itemId}`);
if (minPrice) {
    filterShoes = filterShoes.filter(shoe =>shoe.price >= parseInt(mainPrice)                         
}
//filter by type
if (type) {
filterShoes = filterShoes.filter(shoe =>shoe.type
}

app.listen(3000,() => {
    console.log ('server is running on part 3000')

})
