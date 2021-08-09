const countryItems = document.getElementById('countries-container');
var allCountries = [];
var allCountriesBackup = [];
var regionSelected = 'africa';

const findAllCountries = async (region) => {
   allCountries = await getCountriesByRegion(region);
   allCountriesBackup = allCountries;
   handlerHTML();
};

handlerHTML = () => {
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
   regionSelected = region;
   findAllCountries(region);
}

filterCountries = (search) => {
   countryItems.innerHTML = '';
   if (search.trim()) {
      allCountries = allCountriesBackup.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
      handlerHTML();
   } else {
      resetValues();
   }
};

resetValues = () => {
   allCountries = allCountriesBackup;
   handlerHTML();
};
