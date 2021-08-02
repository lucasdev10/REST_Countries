const getAllCountries = () => fetch("https://restcountries.eu/rest/v2/all", {
   method: "GET",
   headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
   },
}).then(async (response) => await response.json()).then(async (res) => {
   console.log(res);
})