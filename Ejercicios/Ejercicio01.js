async function getAllCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        renderCountries(data);
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

function renderCountries(countries) {
   try{
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = ""; // Limpiar contenedor

    countries.forEach((country) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Evento de click para redireccionar
        card.addEventListener('click', () => {
            window.location.href = `details.html?code=${country.cca3}`;
        });

        card.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common} Flag">
            <div class="card-info">
                <h3>${country.name.common}</h3>
                <p>Población: ${country.population.toLocaleString()}</p>
                <p>Región: ${country.region}</p>
            </div>
        `;

        cardsContainer.appendChild(card);
    });
   }
   catch(err){
    console.error(err);
   }
}

getAllCountries();
