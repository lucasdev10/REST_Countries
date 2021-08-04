const getCountryByName = (name: string) => new Promise((resolve) => {
   fetch(`https://restcountries.eu/rest/v2/name/${name}`, {
      method: "GET",
   }).then(async (response) => await response.json()).then((res) => {
      resolve(res);
   });
});