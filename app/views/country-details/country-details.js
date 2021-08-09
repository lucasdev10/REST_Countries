handlerCountry = async () => {
    const countryName = window.location.href.split('?')[1];
    const countyDetails = (await getCountryByName(countryName))[0];

    document.getElementById('image').innerHTML =
        `<img src="${countyDetails.flag}" alt="${countyDetails.name}" title="${countyDetails.name}">`;

    const topLevelDomain = countyDetails.topLevelDomain.map(el => el).toString();
    const currencies = countyDetails.currencies.map(el => el.code).toString();
    const languages = countyDetails.languages.map(el => el.name).toString();
    const borders = countyDetails.borders.map(el => `<p class="border-countries">${el}</p>`).toString().replace(/,/g, '');

    document.getElementById('details').innerHTML = `
    <h2>${countyDetails.nativeName}</h2>

    <div class="country-details-info">
        <div>
            <p><b>Native Name:</b>${countyDetails.nativeName}</p>
            <p><b>Population:</b>${countyDetails.population.toLocaleString()}</p>
            <p><b>Region:</b>${countyDetails.region}</p>
            <p><b>Sub Region:</b>${countyDetails.subregion}</p>
            <p><b>Capital:</b>${countyDetails.capital}</p>
        </div>
        <div>
            <p><b>Top Level Domain:</b>${topLevelDomain}</p>
            <p><b>Currencies:</b>${currencies}</p>
            <p><b>Languages:</b>${languages}</p>
        </div>
    </div>

    <div>
        <p><b>Border Countries:</b></p>
        ${borders}
    </div>
    `;

};