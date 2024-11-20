// Función para mostrar detalles del vehículo
function showCarDetails(model, price, location, brand, year, transmission, fuel, color, condition, body) {
    // Llenar los detalles en la ventana modal
    document.getElementById('car-model').innerText = model;
    document.getElementById('car-price').innerText = price;
    document.getElementById('car-location').innerText = location;
    document.getElementById('car-brand').innerText = brand;
    document.getElementById('car-year').innerText = year;
    document.getElementById('car-transmission').innerText = transmission;
    document.getElementById('car-fuel').innerText = fuel;
    document.getElementById('car-color').innerText = color;
    document.getElementById('car-condition').innerText = condition;
    document.getElementById('car-body').innerText = body;
    
    // Mostrar la ventana modal
    document.getElementById('modal').style.display = 'block';
}

// Función para cerrar la ventana modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
