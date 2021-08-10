const countryItems = document.getElementById('countries-container');
var allCountries = [];
var allCountriesBackup = [];

const findAllCountries = async (region) => {
   allCountries = await getCountriesByRegion(region);
   allCountriesBackup = allCountries;
   handlerHTML();
};

handlerHTML = () => {
   allCountries.forEach(country => {
      const countryItem = document.createElement('span');
      countryItem.innerHTML = `
      <a class="country-item" href="./app/views/country-details/country-details.html?${country.name}">
         <img src="${country.flag}" alt="${country.name}">
         <h4>${country.name}</h4>
         <p><b>Population:</b> ${country.population.toLocaleString()}</p>
         <p><b>Region:</b> ${country.region}</p>
         <p><b>Capital:</b> ${country.capital}</p>
      </a>
      `
      countryItems.appendChild(countryItem);
   });
};

chooseRegion = (region) => {
   countryItems.innerHTML = '';
   setRegion(region);
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

handlerGetAll = () => {
   const regionSelected = localStorage.getItem('region');

   if (regionSelected) {
      document.getElementById('filter').value = regionSelected;
      findAllCountries(regionSelected);
   } else {
      setRegion('africa');
      findAllCountries('africa');
   }
};

setRegion = (region) => localStorage.setItem('region', region);
