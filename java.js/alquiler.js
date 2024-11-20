function showFleet(type) {
    const fleetList = document.getElementById('fleet');
    fleetList.innerHTML = ''; // Limpiar la lista de flota

    let cars = [];
    if (type === 'Sedán') {
        cars = [
            {model: 'Toyota Corolla', price: '$50/día', image: 'Imagenes/corolla.avif', details: 'Detalles del Toyota Corolla...'},
            {model: 'Honda Civic', price: '$55/día', image: 'Imagenes/civic.png', details: 'Detalles del Honda Civic...'}
        ];
    } else if (type === 'SUV') {
        cars = [
            {model: 'Toyota RAV4', price: '$70/día', image: 'Imagenes/rav4.png', details: 'Detalles del Toyota RAV4...'},
            {model: 'Honda CR-V', price: '$75/día', image: 'Imagenes/crv.img', details: 'Detalles del Honda CR-V...'}
        ];
    } else if (type === 'Camioneta') {
        cars = [
            {model: 'Ford Ranger', price: '$80/día', image: 'Imagenes/ranger.png', details: 'Detalles del Ford Ranger...'},
            {model: 'Chevrolet Silverado', price: '$85/día', image: 'Imagenes/silverado.png', details: 'Detalles del Chevrolet Silverado...'}
        ];
    }

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('fleet-item');
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h2>${car.model}</h2>
            <p>Monto por día: ${car.price}</p>
            <button class="btn" onclick="showCarDetails('${car.model}', '${car.price}', '${car.details}')">VER DETALLES</button>
        `;
        fleetList.appendChild(carItem);
    });
}

function showCarDetails(model, price, details) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('car-model').innerText = model;
    document.getElementById('car-price').innerText = price;
    document.getElementById('car-details').innerText = details;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
