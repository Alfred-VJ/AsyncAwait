async function getAllContries(){
    let response = await fetch("https://restcountries.com/v3.1/all");
   return await response.json();
}

 async function renderCountries() {
    const countries = await getAllContries();
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
        container.appendChild(card);
    }
}

renderCountries();

async function search(){
    //Crear tu lógica
    const url = "https://restcountries.com/v3.1/name/";
    try {
        let response = await fetch(url + "mexico");
        let data = await response.json()
        if(data.status == 404){
            //Aquí renderizas la pagina pageNotFound.html
            console.error("Renderizas la pagina de not found") 
        }else{
            console.log({data})
            renderCountriesSearch(data)
        }
    } catch (error) {
        //Aquí renderizas la pagina pageNotFound.html
        console.error("Soy el error entre al catch")
    }
}
 function renderCountriesSearch(countries) {
   
    const container = document.getElementById("countriesContainer");
    container.innerHTML = "";
    
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
        container.appendChild(card);
    }
}