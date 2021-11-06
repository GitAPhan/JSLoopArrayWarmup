function print_greeting(username) {
    console.log(`Hello ${username}, Welcome to the print greeting function!`);
};

function square(num) {
    var square_num = num * num;
    return square_num;
};

print_greeting('Random_Username');

var amazon_products = ['Coffee Grinder', 'Paw Patrol Toys', 'Popcorn Maker', 'Mini Fridge', 'Chess Board', 'Office Chair'];
console.log(amazon_products);
console.log(amazon_products[amazon_products.length - 1]);

var count = 0;
while (count < amazon_products.length) {
    console.log(amazon_products[count]);
    count++;
};

console.log('****This is the for loop****');
for (var counter = 0; counter < amazon_products.length; counter++) {
    console.log(amazon_products[counter]);
};

var ratings = [4, 3.9, 2.2, 1.9, 4.2, 1.1];
console.log('****This is the rating loop****');
for (count = 0; count < amazon_products.length; count++) {
    console.log(`${amazon_products[count]} - rating: ${ratings[count]}`);
    if (ratings[count] >= 4) {
        console.log('This is an excellent product!');
    } else if (ratings[count] >= 3) {
        console.log('This is a good product.');
    } else if (ratings[count] >= 2) {
        console.log('This is an okay product.');
    } else if (ratings[count] < 2) {
        console.log('This is a bad product');
    } else {
        console.log('Something seems wrong!');
    }
};

var weather = [12, 14, -3, 19, 16, 8, 19.5, 5, 4, 17, 16, 18, 19, 20, 17, 24, 16, 3, 36];

for (count = 0; weather[count] <= 20; count++) { };
console.log('You have to wait ' + count + ' days before you can go to the beach');


print_greeting('Awesome_Username');
var squar = square(10);
console.log(`${squar}`);