  
const qrInput = document.getElementById('qr-input');
const dishDetailsDiv = document.getElementById('dish-details');

let dishData = null;

qrInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageData = await readFileAsDataURL(file);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const qrCode = jsQR(imageData.data, canvas.width, canvas.height);

      if (qrCode) {
        dishData = JSON.parse(qrCode.data);
        fetchDishCalorieData(dishData);
      } else {
        alert('QR Code not detected!');
      }
    };

    image.src = imageData;
  }
});

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function fetchDishCalorieData(dish) {
  const response = await fetch('http://localhost:5000/api/dishes/calories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: dish.items }),
  });

  const calorieData = await response.json();
  displayDishDetails(dish, calorieData);
}

function displayDishDetails(dish, calorieData) {
  let totalCalories = 0;

  dishDetailsDiv.innerHTML = `
    <h2>${dish.dishName}</h2>
    <div id="items-container">
      ${dish.items
        .map((item) => {
          const calories = (calorieData[item.name]?.calorie || 0) * item.quantity;
          totalCalories += calories;
          return `
            <div class="item" data-item-name="${item.name}">
              <span>${item.name} (${item.quantity}): ${calories} cal</span>
              <div>
                <button onclick="updateQuantity('${item.name}', 1)">+</button>
                <button onclick="updateQuantity('${item.name}', -1)">-</button>
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
    <div class="total-calories">Total Calories: <span id="total-calories">${totalCalories}</span> cal</div>
  `;
}

function updateQuantity(itemName, delta) {
  const item = dishData.items.find((i) => i.name === itemName);
  if (item) {
    item.quantity = Math.max(0, item.quantity + delta);
    fetchDishCalorieData(dishData); // Recalculate and update UI
  }
}
