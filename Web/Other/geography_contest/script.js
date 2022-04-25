const countries = document.querySelectorAll("path");
const countryNameDisplay = document.querySelector(".country-name");
const userCountryNameInput = document.querySelector("#user-country-name");
const userCapitalNameInput = document.querySelector("#user-capital-name");
const countryFlagImage = document.querySelector("img");
const spans = document.querySelectorAll("span");
let currentCountry = undefined;
let countryNameCapitalMap = new Map([
    ["Afganistan", "Kabul"],
    ["Albania", "Tirana"],
    ["Algieria", "Algier"],
    ["Angola", "Luanda"],
    ["Antigua i Barbuda", "Saint John's"],
    ["Argentyna", "Buenos Aires"],
    ["Armenia", "Erywan"],
    ["Austria", "Wiedeń"],
    ["Azerbejdzan", "Baku"],
    ["Bahamy", "Nassau"],
    ["Bahrajn", "Manama"],
    ["Bangladesz", "Dhaka"],
    ["Barbados", "Bridgetown"],
    ["Bialorus", "Minsk"],
    ["Belgia", "Bruksela"],
    ["Belize", "Belmopan"],
    ["Benin", "Porto-Novo"],
    ["Bhutan", "Thimphu"],
    ["Boliwia", "Sucre"],
    ["Bosnia i Hercegowina", "Sarajewo"],
    ["Botswana", "Gaborone"],
    ["Brazylia", "Brasilia"],
    ["Brunei", "Bandar Seri Begawan"],
    ["Bulgaria", "Sofia"],
    ["Burkina Faso", "Wagadugu"],
    ["Burundi", "Gitega"],
    ["Chile", "Santiago"],
    ["Chiny", "Pekin"],
    ["Chorwacja", "Zagrzeb"],
    ["Cypr", "Nikozja"],
    ["Czad", "Ndzamena"],
    ["Czarnogora", "Podgorica"],
    ["Czechy", "Praga"],
    ["Dania", "Kopenhaga"],
    ["Demokratyczna Republika Konga", "Kinszasa"],
    ["Dominika", "Roseau"],
    ["Dominikana", "Santo Domingo"],
    ["Dzibuti", "Dzibuti"],
    ["Egipt", "Kair"],
    ["Ekwador", "Quito"],
    ["Erytrea", "Asmara"],
    ["Estonia", "Tallinn"],
    ["Eswatini", "Mbabane"],
    ["Etiopia", "Addis Abeba"],
    ["Fidzi", "Suva"],
    ["Filipiny", "Manila"],
    ["Finlandia", "Helsinki"],
    ["Francja", "Paryz"],
    ["Gabon", "Libreville"],
    ["Gambia", "Bandzul"],
    ["Ghana", "Akra"],
    ["Grecja", "Ateny"],
    ["Grenada", "Saint George's"],
    ["Gruzja", "Tbilisi"],
    ["Gujana", "Georgetown"],
    ["Gwatemala", "Gwatemala"],
    ["Gwinea", "Konakry"],
    ["Gwinea Bissau", "Bissau"],
    ["Gwinea Rownikowa", "Malabo"],
    ["Haiti", "Port-au-Prince"],
    ["Hiszpania", "Madryt"],
    ["Holandia", "Amsterdam"],
    ["Honduras", "Tegucigalpa"],
    ["Indie", "Nowe Delhi"],
    ["Indonezja", "Dzakarta"],
    ["Irak", "Bagdad"],
    ["Iran", "Teheran"],
    ["Irlandia", "Dublin"],
    ["Islandia", "Rejkjavik"],
    ["Izrael", "Jerozolima"],
    ["Jamajka", "Kingston"],
    ["Japonia", "Tokio"],
    ["Jemen", "Sana"],
    ["Jordania", "Amman"],
    ["Kambodza", "Phnom Penh"],
    ["Kamerun", "Jaunde"],
    ["Kanada", "Ottawa"],
    ["Katar", "Doha"],
    ["Kazachstan", "Nur-Sultan"],
    ["Kenia", "Nairobi"],
    ["Kirgistan", "Biszkek"],
    ["Kolumbia", "Bogota"],
    ["Komory", "Moroni"],
    ["Kongo", "Brazzaville"],
    ["Korea Poludniowa", "Seul"],
    ["Korea Polnocna", "Pjongjang"],
    ["Kostaryka", "San Jose"],
    ["Kuba", "Hawana"],
    ["Kuwejt", "Kuwejt"],
    ["Laos", "Wientian"],
    ["Lesotho", "Maseru"],
    ["Liban", "Bejrut"],
    ["Liberia", "Monrovia"],
    ["Libia", "Trypolis"],
    ["Litwa", "Wilno"],
    ["Lotwa", "Ryga"],
    ["Macedonia Polnocna", "Skopje"],
    ["Madagaskar", "Antananarywa"],
    ["Malawi", "Lilongwe"],
    ["Malediwy", "Male"],
    ["Malezja", "Kuala Lumpur"],
    ["Mali", "Bamako"],
    ["Malta", "Valletta"],
    ["Maroko", "Rabat"],
    ["Mauretania", "Nawakszut"],
    ["Mauritius", "Port Louis"],
    ["Meksyk", "Meksyk"],
    ["Mikronezja", "Palikir"],
    ["Mjanma", "Naypyidaw"],
    ["Moldawia", "Kiszyniow"],
    ["Mongolia", "Ulan Bator"],
    ["Mozambik", "Maputo"],
    ["Namibia", "Windhuk"],
    ["Nauru", "Yaren"],
    ["Nepal", "Katmandu"],
    ["Niemcy", "Berlin"],
    ["Niger", "Niamey"],
    ["Nigeria", "Abudza"],
    ["Nikaragua", "Managua"],
    ["Norwegia", "Oslo"],
    ["Nowa Zelandia", "Wellington"],
    ["Oman", "Maskat"],
    ["Pakistan", "Islamabad"],
    ["Palau", "Ngerulmud"],
    ["Panama", "Panama"],
    ["Papua-Nowa Gwinea", "Port Moresby"],
    ["Paragwaj", "Asuncion"],
    ["Peru", "Lima"],
    ["Polska", "Warszawa"],
    ["Republika Poludniowej Afryki", "Pretoria"],
    ["Portugalia", "Lizbona"],
    ["Republika Srodkowoafrykanska", "Bangi"],
    ["Republika Zielonego Przyladka", "Praia"],
    ["Rosja", "Moskwa"],
    ["Rumunia", "Bukareszt"],
    ["Rwanda", "Kigali"],
    ["Saint Kitts i Nevis", "Basseterre"],
    ["Saint Lucia", "Castries"],
    ["Saint Vincent i Grenadyny", "Kingstown"],
    ["Salwador", "San Salvador"],
    ["Samoa", "Apia"],
    ["Senegal", "Dakar"],
    ["Serbia", "Belgrad"],
    ["Seszele", "Victoria"],
    ["Sierra Leone", "Freetown"],
    ["Slowacja", "Bratyslawa"],
    ["Slowenia", "Lublana"],
    ["Somalia", "Mogadiszu"],
    ["Sri Lanka", "Sri Dzajawardanapura Kotte"],
    ["Stany Zjednoczone", "Waszyngton"],
    ["Sudan", "Chartum"],
    ["Sudan Poludniowy", "Dzuba"],
    ["Surinam", "Paramaribo"],
    ["Syria", "Damaszek"],
    ["Szwajcaria", "Berno"],
    ["Szwecja", "Sztokholm"],
    ["Tadzykistan", "Duszanbe"],
    ["Tajlandia", "Bangkok"],
    ["Tanzania", "Dodoma"],
    ["Timor Wschodni", "Dili"],
    ["Togo", "Lome"],
    ["Tonga", "Nuku'alofa"],
    ["Trynidad i Tobago", "Port-of-Spain"],
    ["Tunezja", "Tunis"],
    ["Turcja", "Ankara"],
    ["Turkmenistan", "Aszchabad"],
    ["Tuvalu", "Vaiaku"],
    ["Uganda", "Kampala"],
    ["Ukraina", "Kijow"],
    ["Urugwaj", "Montevideo"],
    ["Uzbekistan", "Taszkent"],
    ["Vanuatu", "Port Villa"],
    ["Wenezuela", "Caracas"],
    ["Wegry", "Budapeszt"],
    ["Wielka Brytania", "Londyn"],
    ["Wietnam", "Hanoi"],
    ["Wlochy", "Rzym"],
    ["Wybrzeze Kosci Sloniowej", "Jamusukro"],
    ["Wyspy Marshalla", "Majuro"],
    ["Wyspy Salomona", "Honiara"],
    ["Wyspy Swietego Tomasza i Ksiazeca", "Sao Tome"],
    ["Zambia", "Lusaka"],
    ["Zimbabwe", "Harare"],
    ["Zjednoczone Emiraty Arabskie", "Abu Zabi"]
]);
// let itr = countryNameCapitalMap.keys();
// countryNameCapitalMap.forEach((country) => {
//     console.log(itr.next().value + " " + country);
// });
let correctCountryName = "Antigua i Barbuda";
let correctCapitalName = "Saint John's";
function checkCountryAndCapitalInput() {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            userCountryNameInput.disabled = false;
            userCountryNameInput.focus();
            if (userCountryNameInput.value.toLowerCase() === correctCountryName.toLowerCase()) {
                userCountryNameInput.disabled = true;
                spans[0].style.backgroundColor = "green";
                spans[0].style.transform = "scaleX(1)";
                userCapitalNameInput.disabled = false;
                userCapitalNameInput.focus();
                if (userCapitalNameInput.value.toLowerCase() === correctCapitalName.toLowerCase()) {
                    spans[1].style.backgroundColor = "green";
                    spans[1].style.transform = "scaleX(1)";
                    userCapitalNameInput.disabled = true;
                    if (currentCountry) {
                        if ((currentCountry.getAttribute("class") == undefined ? currentCountry.getAttribute("name") : currentCountry.getAttribute("class")) === correctCountryName) {
                            spans[0].style.transform = "scaleX(0)";
                            spans[1].style.transform = "scaleX(0)";
                            currentCountry.style.fill = "var(--color4)";
                            clearInterval(interval);
                            resolve();
                        }
                    }
                }
            }
        });
    });
}
const regex = / /gi;
const startGame = async () => {
    countryNameCapitalMap = new Map([...countryNameCapitalMap.entries()].sort(function(a, b){return 0.5 - Math.random()}));
    document.querySelector(".start-button").innerText = "Restart";
    userCountryNameInput.disabled = false;
    userCountryNameInput.focus();
    spans[0].style.transform = "scaleX(0)";
    spans[1].style.transform = "scaleX(0)";
    userCountryNameInput.value = "";
    userCapitalNameInput.value = "";
    console.log(currentCountry);
    if (currentCountry) {
        currentCountry.style.fill = "var(--color4)";
    }
    for (let itr = countryNameCapitalMap.keys(), i = 0; i < countryNameCapitalMap.size; i++) {
        correctCountryName = itr.next().value;
        correctCapitalName = countryNameCapitalMap.get(correctCountryName);
        countryFlagImage.setAttribute("src", `img/${correctCountryName.replace(regex, "-").toLowerCase()}.png`);
        await checkCountryAndCapitalInput();
        userCountryNameInput.value = "";
        userCapitalNameInput.value = "";
    }
    document.querySelector("button").innerText = "Start";
    // countryNameCapitalMap.forEach(async (capital) => {
        
    //     correctCountryName = itr.next().value;
    //     correctCapitalName = capital;
    //     countryFlagImage.setAttribute("src", `img/${correctCountryName.replace(" ", "-").toLowerCase()}.png`);console.log(correctCountryName);
    // });
}
countries.forEach((country) => {
    country.addEventListener('click', () => {
        countries.forEach((element) => {
            element.style.fill = "var(--color4)";
        });
        country.style.fill = "var(--color2)";
        currentCountry = country;
    });
});