const getCountryByName = (name: string) => fetch(`https://restcountries.eu/rest/v2/name/${name}`, {
   method: "GET",
   headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
   },
}).then(async (response) => await response.json()).then(async (res) => {
   console.log(res);
})