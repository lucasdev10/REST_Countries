const getCountryByCode = (code: string) => new Promise((resolve) => {
   fetch(`https://restcountries.eu/rest/v2/alpha/${code}`, {
      method: "GET",
   }).then(async (response) => await response.json()).then((res) => {
      resolve(res);
   });
});