const getAllCountries = () => new Promise((resolve) => {
   fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET",
   }).then(async (response) => await response.json()).then((res) => {
      resolve(res);
   });
});
