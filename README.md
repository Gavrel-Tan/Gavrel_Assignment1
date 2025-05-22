# Assignment 1 UniqloStockManagementSystem

UniqloStockManagementSystem mimics inventory handling procedures within Uniqlo Outlets
## Setup

You will require node.js to run this node module.

```js
npm i
```

Next, create a catalog array to store all the products in node modules

```js
const catalog = [];
```
Create an app.js to run the modules

```js
const Products = require("./gavrel_UniqloStockManagementSystem.js");

  console.log(Products.description);
  console.log('');
  
  //add product to catalog
  Products.addProduct('Starry Night ICONS UT Graphic T-Shirt', 19.90, 'Men', 'Latest collection was created by MoMA and UNIQLO through partnership', 50);
  Products.addProduct('Super Mario Archive UT Graphic T-Shirt', 29.90, 'Unisex', 'Re-released Super Mario series by © Nintendo',100);
  Products.addProduct('KAWS + Warhol Sweatshirt', 14.90, 'Unisex', 'A unique collaboration has come to life between Andy Warhol, a seminal figure in 20th-century art, and KAWS, a leading artist in contemporary art',75);
  Products.showCatalog();
  //check if there is a product to update based on array index
  const UpdateSuccess = Products.updateProduct(0, {
    name: 'Louvre x Doraemon UT Graphic T-Shirt',
    category: 'Unisex',
    price: 35.90,
    quantity: 19,
    description: 'Doraemon is depicted in this original artwork inspired by Johannes Vermeers painting Astronomer',
  });
  if (UpdateSuccess) {
  console.log("Product updated successfully!");
} else {
  console.log("Failed to update product.");
}
console.log('');
//Show product updated in catalog array
Products.showCatalog();
//remove product from catalog
const RemoveSuccess = Products.removeProduct(1);
if (RemoveSuccess) {
  console.log("Product removed successfully!");
} else {
  console.log("Failed to remove product. Check if its existing in the catalog.");
}
//Show product removed in catalog array
Products.showCatalog();
const lowStock = Products.lowStockProducts();
if (lowStock.length > 0) {

  console.log("Low stock products:");
  lowStock.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - Quantity: ${product.quantity}`);
  });
} else {
  console.log("No products with low stock.");
}
//buy product from catalog
const BuySuccess = Products.buyProduct(0, 5);
if (BuySuccess) {
  console.log("Product purchased successfully!");
} else {
  console.log("Failed to purchase product. Check if it has enough stock.");
}
 ```

## Functions

## addProduct Function
```js
addProduct(name, price, category, description, quantity) {
    if (!name || typeof price !== 'number' || price <= 0 || !Number.isInteger(quantity) || quantity <= 0) {
      console.log("Invalid product details. Please check the input.");
      return false;
    }//push Product into catalog array
    else{
      catalog.push({ name, price, category, description, quantity });
    }
  },
```

```addProduct``` perform adding of a new product to the catalog. The function first validates the input parameters ```(name, price, category, description, quantity)``` ensuring the product name is provided, the price is a positive number, and the quantity is a positive integer. If any validation fails, it logs an error and ```returns false```. If all checks pass, it adds the product to the catalog array.

## showCatalog Function
```js
showCatalog() {
    catalog.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price} - ${product.category} `);
      console.log(`   Description: ${product.description} | Quantity: ${product.quantity}`);
      console.log("");
    });
  },

```

```showCatalog``` uses catalog.forEach, which loops through each product in the catalog array displaying all products in the catalog. 

## updateProduct Function
```js
updateProduct(index, newDetails) {
  if (catalog[index]) {
    catalog[index] = { ...catalog[index], ...newDetails };
    return true;
  }
    return false;
  },

```

```updateProduct``` updates an existing product in the catalog by its index. If the product exists, it merges the current product details with the new details provided and returns `true`. If the product does not exist at the given index, it returns `false`.

## removeProduct Function
```js
removeProduct(index) {
    if (catalog[index]) {
      catalog.splice(index, 1);
      return true;
    }
    return false;
  },
```

```removeProduct``` deletes a product from the catalog by its index if a product exists at that index, it is removed and the function returns `true`, otherwise it returns `false`.

## lowStockProducts Function
```js
lowStockProducts() {
    return catalog.filter(product => product.quantity < 20);
  },
```

```lowStockProducts``` returns an array of products from the catalog whose quantity is less than 20. This helps identify items that are low in stock and may need to be reordered.

## buyProduct Function
```js
buyProduct(index, quantity) {
    if (!catalog[index]) {
      console.log("Product not found.");
      return false;
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
      console.log("Invalid purchase quantity.");
      return false;
    }
    if (catalog[index].quantity < quantity) {
      console.log("Not enough stock available.");
      return false;
    }
    catalog[index].quantity -= quantity;
    console.log("");
    console.log(`Purchased ${quantity} of ${catalog[index].name}.`);
    return true;
  },
```

```buyProduct``` allows you to purchase a ```specified``` quantity of a product by its index in the catalog. It first checks if the product exists, if the purchase quantity is a valid ```positive``` integer, and if there is enough stock available. If all checks pass, it subtracts the purchased quantity from the product's stock and returns `true`. If any check fails (product not found, invalid quantity, or insufficient stock), it logs an appropriate message and returns `false`.


## References

- [UNIQLO SG](https://www.uniqlo.com/sg/en/)
- [W3Schools](https://www.w3schools.com/jsref/jsref_filter.asp)
- [MDM Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [DeepSeek](https://chat.deepseek.com/a/chat/s/17151088-016e-4c67-8558-c7c2fa0f2ea4)
- [Geekforgeeks](https://www.geeksforgeeks.org/how-to-push-data-to-array-asynchronously-save-it-in-node-js/)