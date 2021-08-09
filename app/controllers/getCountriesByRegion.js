const getCountriesByRegion = (region) => new Promise((resolve) => {
   fetch(`https://restcountries.eu/rest/v2/region/${region}`, {
      method: "GET",
   }).then(async (response) => await response.json()).then((res) => {
      resolve(res);
   });
});