// Obtener el parámetro "code" de la URL
const urlParams = new URLSearchParams(window.location.search);
const countryCode = urlParams.get('code');

// Función para obtener y mostrar los detalles del país
async function getCountryDetails(code) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();
        renderCountryDetails(data[0]); // La API devuelve un array
    } catch (error) {
        console.error("Error fetching country details:", error);
    }
}

function renderCountryDetails(country) {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.common} Flag" class="detail-flag">
        <h2>${country.name.common}</h2>
        <p><strong>Población:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Región:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
        <p><strong>Moneda:</strong> ${Object.values(country.currencies)[0].name}</p>
        <p><strong>Idiomas:</strong> ${Object.values(country.languages).join(', ')}</p>
    `;
}

// Llamar a la función con el código del país
getCountryDetails(countryCode);
