const findAllCountries = async () => {
   const allCountries = await getAllCountries();
   console.log(allCountries);
};
findAllCountries();