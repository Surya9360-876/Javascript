// // // Task 1

// fetch("https://fakestoreapi.com/products")
//     .then(response => response.json())
//     .then(products => {

//         // Display all products
//         products.forEach(product => {
//             console.log("Title:", product.title);
//             console.log("Price:", product.price);
//             console.log("Category:", product.category);
//             console.log("--------------------");
//         });

//         // map() - title and price only
//         let titleAndPrice = products.map(product => ({
//             title: product.title,
//             price: product.price
//         }));

//         console.log("Title and Price:");
//         console.log(titleAndPrice);


//         // filter() - products above $100
//         let expensiveProducts = products.filter(product => product.price > 100);

//         console.log("Products above $100:");
//         console.log(expensiveProducts);


//         // find() - first electronics product
//         let electronicsProduct = products.find(
//             product => product.category === "electronics"
//         );

//         console.log("First Electronics Product:");
//         console.log(electronicsProduct);


//         // reduce() - total price
//         let totalPrice = products.reduce(
//             (total, product) => total + product.price,
//             0
//         );

//         console.log("Total Price:", totalPrice);


//         // sort() - highest price to lowest
//         let sortedProducts = [...products].sort(
//             (a, b) => b.price - a.price
//         );

//         console.log("Products from Highest to Lowest Price:");
//         console.log(sortedProducts);

//     })
//     .catch(error => {
//         console.log("API Error:", error);
//     })
//     .finally(() => {
//         console.log("API operation completed.");
//     });






// // // // Task-2 Product Dashboard



// console

// const apiLink1 = "https://fakestoreapi.com/products";

// function productDashboard(products) {

// const electronics = products.filter(

//     product => product.category === "electronics"

// ).length;



// const jewelery = products.filter(

//     product => product.category === "jewelery"

// ).length;



// const mensClothing = products.filter(

//     product => product.category === "men's clothing"

// ).length;



// const womensClothing = products.filter(

//     product => product.category === "women's clothing"

// ).length;



// const prices = products.map(product => product.price);



// const total = prices.reduce(

//     (sum, price) => sum + price,

//     0

// );



// const sortedPrices = [...prices].sort(

//     (a, b) => b - a

// );



// const highest = sortedPrices[0];

// const lowest = sortedPrices[sortedPrices.length - 1];

// const average = total / products.length;



// console.log(`

// ===== PRODUCT DASHBOARD =====

// Total Products: ${products.length}

// Electronics: ${electronics}

// Jewelery: ${jewelery}

// Men's Clothing: ${mensClothing}

// Women's Clothing: ${womensClothing}

// Highest Price: $${highest.toFixed(2)}

// Lowest Price: $${lowest.toFixed(2)}

// Average Price: $${average.toFixed(2)}

// `);

// }

// fetch(apiLink1)

// .then(response => response.json())

// .then(products => {

//     productDashboard(products);

// })

// .catch(error => {

//     console.log("Error:", error);

// })

// .finally(() => {

//     console.log("Dashboard Completed");

// });







// // // // Task-3 User & Post API

// console.log("Task 3 Started");

// const usersApi = "https://jsonplaceholder.typicode.com/users";

// const postsApi = "https://jsonplaceholder.typicode.com/posts";

// fetch(usersApi)

// .then(response => response.json())

// .then(users => {



//     console.log("All User Names:");



//     users.forEach(user => {

//         console.log(user.name);

//     });



//     console.log("User Name + Email:");



//     users.forEach(user => {

//         console.log(${user.name} - ${user.email});

//     });



//     const user5 = users.find(user => user.id === 5);



//     console.log("User ID 5:");

//     console.log(user5);



//     const cityUsers = users.filter(

//         user => user.address.city === "Gwenborough"

//     );



//     console.log("Users from Gwenborough:");

//     console.log(cityUsers);

// })

// .catch(error => {

//     console.log("User API Error:", error);

// });

// fetch(postsApi)

// .then(response => response.json())

// .then(posts => {



//     const user1Posts = posts.filter(

//         post => post.userId === 1

//     );



//     console.log("Posts by User ID 1:");

//     console.log(user1Posts);



//     console.log(

//         User ID 1 Post Count: ${user1Posts.length}

//     );



//     const firstLongTitle = posts.find(

//         post => post.title.length > 50

//     );



//     console.log("First Title Above 50 Characters:");

//     console.log(firstLongTitle);

// })

// .catch(error => {

//     console.log("Post API Error:", error);

// })

// .finally(() => {

//     console.log("Task 3 Completed");

// });







// // // // Task-4 API + Search

// console.log("Task 4 Started");

// const apiLink4 = "https://fakestoreapi.com/products";

// function searchProducts(category, maxPrice) {

// fetch(apiLink4)

//     .then(response => response.json())

//     .then(products => {



//         const result = products.filter(product =>

//             product.category.toLowerCase() === category.toLowerCase() &&

//             product.price <= maxPrice

//         );



//         console.log("Matching Products:");



//         result.forEach(product => {

//             console.log(

//                 ${product.title} - $${product.price}

//             );

//         });

//     })

//     .catch(error => {

//         console.log("Error:", error);

//     });

// }

// const category = prompt("Enter product category:");

// const maxPrice = Number(

// prompt("Enter maximum price:")

// );

// searchProducts(category, maxPrice);







// // // // Task-5 Shopping Cart

// console.log("Task 5 Started");

// const apiLink5 = "https://fakestoreapi.com/products";

// fetch(apiLink5)

// .then(response => response.json())

// .then(products => {



//     console.log("===== AVAILABLE PRODUCTS =====");



//     products.forEach(product => {

//         console.log(

//             ID: ${product.id} | ${product.title} | $${product.price}

//         );

//     });



//     const input = prompt(

//         "Enter product IDs separated by comma:"

//     );



//     const ids = input

//         .split(",")

//         .map(id => Number(id.trim()));



//     const cart = products.filter(

//         product => ids.includes(product.id)

//     );



//     console.log("===== CART =====");



//     cart.forEach((product, index) => {

//         console.log(

//             Product ${index + 1}: ${product.title}

//         );



//         console.log(

//             Price: $${product.price}

//         );

//     });



//     const total = cart.reduce(

//         (sum, product) => sum + product.price,

//         0

//     );



//     let discount = 0;



//     if (total > 200) {

//         discount = 20;

//     } else if (total > 100) {

//         discount = 10;

//     }



//     const discountAmount = total * discount / 100;



//     const finalAmount = total - discountAmount;



//     console.log(Total: $${total.toFixed(2)});

//     console.log(Discount: ${discount}%);

//     console.log(

//         Final Amount: $${finalAmount.toFixed(2)}

//     );

// })

// .catch(error => {

//     console.log("Error:", error);

// })

// .finally(() => {

//     console.log("Shopping Cart Completed");

// });






// // // // Task-6 Product1 Report

// console.log("Task 6 Started");

// const apiLink6 = "https://fakestoreapi.com/products";

// function productReport(products) {

// console.log("========== PRODUCT REPORT ==========");   

// console.log(Total Products: ${products.length});   

// console.log("\nProduct Names:");   

// products.forEach(product => {   
//     console.log(- ${product.title});   
// });   

// const productNames = products.map(   
//     product => product.title   
// );   

// console.log("\nProduct Names Array:");   
// console.log(productNames);   

// const expensiveProducts = products.filter(   
//     product => product.price > 100   
// );   

// console.log("\nProducts Above $100:");   

// expensiveProducts.forEach(product => {   
//     console.log(   
//         ${product.title} - $${product.price}   
//     );   
// });   

// const electronicsProduct = products.find(   
//     product => product.category === "electronics"   
// );   

// console.log("\nElectronics Product:");   
// console.log(electronicsProduct);   

// const totalPrice = products.reduce(   
//     (sum, product) => sum + product.price,   
//     0   
// );   

// console.log(   
//     \nTotal Product Value: $${totalPrice.toFixed(2)}   
// );   

// const anyAbove500 = products.some(   
//     product => product.price > 500   
// );   

// console.log(   
//     Any Product Above $500: ${anyAbove500}   
// );   

// const allAbove1 = products.every(   
//     product => product.price > 1   
// );   

// console.log(   
//     All Products Above $1: ${allAbove1}   
// );   

// const sortedProducts = [...products].sort(   
//     (a, b) => b.price - a.price   
// );   

// console.log("\nHighest → Lowest:");   

// sortedProducts.forEach(product => {   
//     console.log(   
//         ${product.title} - $${product.price}   
//     );   
// });

// }

// fetch(apiLink6)
// .then(response => response.json())
// .then(products => {
// productReport(products);
// })
// .catch(error => {
// console.log("API Error:", error);
// })
// .finally(() => {
// console.log("\n========== COMPLETED ==========");
// });