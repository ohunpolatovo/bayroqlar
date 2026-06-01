const countries = [
  {
    id: 1,
    name: "Germany",
    nativeName: "Deutschland",
    population: 81770900,
    region: "Europe",
    subRegion: "Western Europe",
    capital: "Berlin",
    topLevelDomain: ".de",
    currencies: ["Euro"],
    languages: ["German"],
    borderCountries: ["Austria", "Belgium", "Czech Republic", "Denmark", "France", "Luxembourg", "Netherlands", "Poland", "Switzerland"],
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    id: 2,
    name: "United States of America",
    nativeName: "United States",
    population: 323947000,
    region: "Americas",
    subRegion: "North America",
    capital: "Washington, D.C.",
    topLevelDomain: ".us",
    currencies: ["United States Dollar"],
    languages: ["English"],
    borderCountries: ["Canada", "Mexico"],
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    id: 3,
    name: "Brazil",
    nativeName: "Brasil",
    population: 206135893,
    region: "Americas",
    subRegion: "South America",
    capital: "Brasília",
    topLevelDomain: ".br",
    currencies: ["Brazilian Real"],
    languages: ["Portuguese"],
    borderCountries: ["Argentina", "Bolivia", "Colombia", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    id: 4,
    name: "Iceland",
    nativeName: "Ísland",
    population: 334300,
    region: "Europe",
    subRegion: "Northern Europe",
    capital: "Reykjavík",
    topLevelDomain: ".is",
    currencies: ["Icelandic Króna"],
    languages: ["Icelandic"],
    borderCountries: [],
    flag: "https://flagcdn.com/w320/is.png",
  },
  {
    id: 5,
    name: "Afghanistan",
    nativeName: "افغانستان",
    population: 27657145,
    region: "Asia",
    subRegion: "Southern Asia",
    capital: "Kabul",
    topLevelDomain: ".af",
    currencies: ["Afghan Afghani"],
    languages: ["Pashto", "Dari"],
    borderCountries: ["China", "Iran", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan"],
    flag: "https://flagcdn.com/w320/af.png",
  },
  {
    id: 6,
    name: "Åland Islands",
    nativeName: "Åland",
    population: 28875,
    region: "Europe",
    subRegion: "Northern Europe",
    capital: "Mariehamn",
    topLevelDomain: ".ax",
    currencies: ["Euro"],
    languages: ["Swedish"],
    borderCountries: [],
    flag: "https://flagcdn.com/w320/ax.png",
  },
  {
    id: 7,
    name: "Albania",
    nativeName: "Shqipëria",
    population: 2886026,
    region: "Europe",
    subRegion: "Southern Europe",
    capital: "Tirana",
    topLevelDomain: ".al",
    currencies: ["Albanian Lek"],
    languages: ["Albanian"],
    borderCountries: ["Montenegro", "Kosovo", "North Macedonia", "Greece"],
    flag: "https://flagcdn.com/w320/al.png",
  },
  {
    id: 8,
    name: "Algeria",
    nativeName: "الجزائر",
    population: 40400000,
    region: "Africa",
    subRegion: "Northern Africa",
    capital: "Algiers",
    topLevelDomain: ".dz",
    currencies: ["Algerian Dinar"],
    languages: ["Arabic"],
    borderCountries: ["Libya", "Mali", "Mauritania", "Morocco", "Niger", "Tunisia"],
    flag: "https://flagcdn.com/w320/dz.png",
  }
];


const container = document.getElementById('countries-container');


function displayCountries(data) {
    container.innerHTML = ""; 
    
    data.forEach(country => {
        const countryCard = `
            <div class="country-card">
                <img src="${country.flag}" alt="${country.name} flag" class="country-flag">
                <div class="country-info">
                    <h2 class="country-name">${country.name}</h2>
                    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> ${country.region}</p>
                    <p><strong>Capital:</strong> ${country.capital}</p>
                </div>
            </div>
        `;
        container.innerHTML += countryCard;
    });
}

displayCountries(countries);


document.getElementById('theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
