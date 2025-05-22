const catalog = [];

module.exports = {
  description: "This module manages product catalog.",
  //check if product is valid before adding to catalog
  addProduct(name, price, category, description, quantity) {
    if (!name || typeof price !== 'number' || price <= 0 || !Number.isInteger(quantity) || quantity <= 0) {
      console.log("Invalid product details. Please check the input.");
      return false;
    }//push Product into catalog array
    else{
      catalog.push({ name, price, category, description, quantity });
    }
  },
  //show all products in catalog array
  showCatalog() {
    catalog.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price} - ${product.category} `);
      console.log(`   Description: ${product.description} | Quantity: ${product.quantity}`);
      console.log("");
    });
  },

  updateProduct(index, newDetails) {
  if (catalog[index]) {
    catalog[index] = { ...catalog[index], ...newDetails };
    return true;
  }
    return false;
  },

  removeProduct(index) {
    if (catalog[index]) {
      catalog.splice(index, 1);
      return true;
    }
    return false;
  },
  //check if product quantity is less than 20
  lowStockProducts() {
    return catalog.filter(product => product.quantity < 20);
  },
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
};