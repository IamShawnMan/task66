// ============ Array va touple bilan ishlash ===============
var product1 = {
    id: 1,
    name: "Telefon",
    price: 500,
    inStock: false,
};
var product2 = {
    id: 1,
    name: "Kartoshka",
    price: 5,
    inStock: false,
};
var product3 = {
    id: 1,
    name: "Mashina",
    price: 10000,
    inStock: true,
};
function filteredProducts(arr) {
    var expensive = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price > 100) {
            expensive.push(arr[i]);
        }
    }
    return expensive;
}
console.log(filteredProducts([product1, product2, product3]));
