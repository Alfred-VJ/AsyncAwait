async function getAllContries(){
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    console.log({data});
}

function renderCountries(countries) {
    const container = document.getElementById("countriesContainer");

    
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        
        const card = document.createElement("div");
        card.classList.add("country-card");

        const flag = document.createElement("img");
        flag.src = country.flags?.png || "ruta/imagen/por/defecto.png"; 
        flag.alt = `Bandera de ${country.name.common}`;
        flag.classList.add("country-flag");

        const name = document.createElement("h2");
        name.textContent = country.name.common;
        name.classList.add("country-name");

        const description = document.createElement("p");
        description.textContent = `Capital: ${country.capital?.[i] || "N/A"}`;
        description.classList.add("country-description");

        
        card.appendChild(flag);
        card.appendChild(name);
        card.appendChild(description);

    console.log("******************")        
        container.appendChild(card);
    }
}


getAllContries();