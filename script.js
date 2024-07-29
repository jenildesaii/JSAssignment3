// Smoothie class definition
class Smoothie {
    constructor(name, size, fruits, extras) {
        this.name = name;
        this.size = size;
        this.fruits = fruits;
        this.extras = extras;
        this.price = this.calculatePrice();
    }

    // Method to calculate the price of the smoothie
    calculatePrice() {
        let basePrice;
        switch (this.size) {
            case 'small':
                basePrice = 5;
                break;
            case 'medium':
                basePrice = 7;
                break;
            case 'large':
                basePrice = 9;
                break;
            default:
                basePrice = 0;
        }
        let fruitsPrice = this.fruits.length * 1; // $1 per fruit
        let extrasPrice = this.extras.length * 2; // $2 per extra
        return basePrice + fruitsPrice + extrasPrice;
    }

    // Method to describe the smoothie
    describe() {
        let fruitsList = this.fruits.length ? this.fruits.join(', ') : 'None';
        let extrasList = this.extras.length ? this.extras.join(', ') : 'None';
        return `
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Size:</strong> ${this.size.charAt(0).toUpperCase() + this.size.slice(1)}</p>
            <p><strong>Fruits:</strong> ${fruitsList}</p>
            <p><strong>Extras:</strong> ${extrasList}</p>
            <p><strong>Total Price:</strong> $${this.price.toFixed(2)}</p>
        `;
    }
}

// Function to handle the smoothie order
function orderSmoothie() {
    // Get form values
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;

    // Get selected fruits
    const fruitElements = document.querySelectorAll('input[name="fruits"]:checked');
    const fruits = Array.from(fruitElements).map(element => element.value);

    // Get selected extras
    const extraElements = document.querySelectorAll('input[name="extras"]:checked');
    const extras = Array.from(extraElements).map(element => element.value);

    // Validate form inputs
    if (!name || !size) {
        alert('Please fill out your name and select a size.');
        return;
    }

    // Create a new Smoothie object
    const smoothie = new Smoothie(name, size, fruits, extras);

    // Display the order summary
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = `<h2>Your Smoothie Order:</h2>${smoothie.describe()}`;
}

// Add event listener to the order button
document.getElementById('order-button').addEventListener('click', orderSmoothie);
