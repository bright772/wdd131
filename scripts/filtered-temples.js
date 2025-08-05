const showNav = document.querySelector('.navigationUl');
const growMenu = document.querySelector('#growMenu');
growMenu.addEventListener('click', () => {
    showNav.classList.toggle('open');
    growMenu.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-7640-thumb.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-11070-thumb.jpg"
    },
    {
        templeName: "Birmingham England",
        location: "Birmingham, England, United Kingdom",
        dedicated: "2026",
        area: 10800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-england-temple/birmingham-england-temple-45435-thumb.jpg"
    }
];

const container = document.getElementById("templeContainer");

// Function to create and display temple cards
function displayTemples(templeArray) {
    container.innerHTML = ""; // Clear previous content
    templeArray.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.width = "400";
        img.height = "250";
        img.loading = "lazy";

        card.appendChild(img); // move image to the top of the card

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        container.appendChild(card);
    });
}

// Initial display of all temples
displayTemples(temples);

// Event listeners for navigation buttons
document.getElementById("home").addEventListener("click", (event) => {
    displayTemples(temples);
    toggleFunction();
});

document.getElementById("old").addEventListener("click", (event) => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year < 1900;
    });
    displayTemples(oldTemples);
    toggleFunction();
});

document.getElementById("new").addEventListener("click", (event) => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year > 2000;
    });
    displayTemples(newTemples);
    toggleFunction();
});

document.getElementById("large").addEventListener("click", (event) => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
    toggleFunction();
});

document.getElementById("small").addEventListener("click", (event) => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
    toggleFunction();
});