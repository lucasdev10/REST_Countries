const countryItems = document.getElementById('countries-container');

const findAllCountries = async (region) => {
   const allCountries = await getCountriesByRegion(region);
   allCountries.forEach(country => {
      const countryItem = document.createElement('a');
      countryItem.classList.add('country-item');
      countryItem.innerHTML = `
         <img src="${country.flag}" alt="${country.name}">
         <h4>${country.name}</h4>
         <p><b>Population:</b> ${country.population.toLocaleString()}</p>
         <p><b>Region:</b> ${country.region}</p>
         <p><b>Capital:</b> ${country.capital}</p>
      `
      countryItems.appendChild(countryItem);
   });
};

findAllCountries('africa');

chooseRegion = (region) => { 
   countryItems.innerHTML = '';
   findAllCountries(region); 
}
