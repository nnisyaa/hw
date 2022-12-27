const products = [
    [name: 'A' , price: 10 , amount: 2 , id: 0 ],
    [name: 'B' , price: 41 , amount: 7 , id: 1 ],
    [name: 'C' , price: 3 , amount: 34 , id: 2 ],
    [name: 'D' , price: 90 , amount: 5 , id: 3 ],
    [name: 'E' , price: 17 , amount: 56 , id: 4 ]
 ];
/products/235
/products/12
/products/324234

app.get('/products', function (req, res) {
  res.send(JSON.stringify(users.find((user) => user.id == req.params.id));
});

app.get("/products/:id", function (req, res) {
    const idOfProducts = parseInt(req.params.id);
    const products = products.find((user) => user.id === idOfProducts);
    if (!products) {
      res.status(404).send();
    }
    res.status(200).json(user);
  });