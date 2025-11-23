document.addEventListener("DOMContentLoaded", () => {
  const temples = [
    {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah, USA",
      dedicated: "April 6, 1893",
      year: 1893,
      area: 253000,
      image: "https://via.placeholder.com/800x450.webp?text=Salt+Lake+Temple"
    },
    {
      name: "Kirtland Temple",
      location: "Kirtland, Ohio, USA",
      dedicated: "March 27, 1836",
      year: 1836,
      area: 9000,
      image: "https://via.placeholder.com/800x450.webp?text=Kirtland+Temple"
    },
    {
      name: "Nauvoo Temple",
      location: "Nauvoo, Illinois, USA",
      dedicated: "May 27, 2002",
      year: 2002,
      area: 10000,
      image: "https://via.placeholder.com/800x450.webp?text=Nauvoo+Temple"
    },
    {
      name: "Laie Hawaii Temple",
      location: "Laie, Hawaii, USA",
      dedicated: "November 27, 1919",
      year: 1919,
      area: 18000,
      image: "https://via.placeholder.com/800x450.webp?text=Laie+Hawaii+Temple"
    },
    {
      name: "Bern Switzerland Temple",
      location: "Bern, Switzerland",
      dedicated: "September 11, 1955",
      year: 1955,
      area: 15000,
      image: "https://via.placeholder.com/800x450.webp?text=Bern+Temple"
    },
    {
      name: "Tokyo Japan Temple",
      location: "Tokyo, Japan",
      dedicated: "October 27, 1980",
      year: 1980,
      area: 20000,
      image: "https://via.placeholder.com/800x450.webp?text=Tokyo+Temple"
    },
    {
      name: "St. George Temple",
      location: "St. George, Utah, USA",
      dedicated: "January 4, 1877",
      year: 1877,
      area: 17000,
      image: "https://via.placeholder.com/800x450.webp?text=St+George+Temple"
    },
    {
      name: "Madrid Spain Temple",
      location: "Alcobendas, Madrid, Spain",
      dedicated: "May 19, 1999",
      year: 1999,
      area: 12000,
      image: "https://via.placeholder.com/800x450.webp?text=Madrid+Temple"
    },
    {
      name: "Paris France Temple",
      location: "Le Chesnay-Rocquencourt, France",
      dedicated: "May 21, 2017",
      year: 2017,
      area: 105000,
      image: "https://via.placeholder.com/800x450.webp?text=Paris+Temple"
    },
    {
      name: "Salt Lake Conference Center Temple",
      location: "Salt Lake City, Utah, USA",
      dedicated: "June 2000",
      year: 2000,
      area: 95000,
      image: "https://via.placeholder.com/800x450.webp?text=Conference+Center+Temple"
    }
  ];

  const cardsContainer = document.getElementById("cards");
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
  const yearEl = document.getElementById("year");
  const lastModifiedEl = document.getElementById("lastModified");

  function createCard(t) {
    const article = document.createElement("article");
    article.className = "card";

    const media = document.createElement("div");
    media.className = "media";
    const img = document.createElement("img");
    img.setAttribute("src", t.image);
    img.setAttribute("alt", t.name);
    img.setAttribute("loading", "lazy"); 
    img.setAttribute("decoding", "async");
    media.appendChild(img);

    const body = document.createElement("div");
    body.className = "body";

    const h3 = document.createElement("h3");
    h3.textContent = t.name;

    const pLoc = document.createElement("p");
    pLoc.textContent = t.location;

    const meta = document.createElement("div");
    meta.className = "meta";
    const pDate = document.createElement("div");
    pDate.textContent = `Dedicated: ${t.dedicated}`;
    const pArea = document.createElement("div");
    pArea.textContent = `Area: ${t.area.toLocaleString()} sq ft`;

    meta.appendChild(pDate);
    meta.appendChild(pArea);

    body.appendChild(h3);
    body.appendChild(pLoc);
    body.appendChild(meta);

    article.appendChild(media);
    article.appendChild(body);

    return article;
  }

  function renderCards(list) {
    cardsContainer.innerHTML = ""; 
    if (!list || list.length === 0) {
      const note = document.createElement("p");
      note.textContent = "No temples match this filter.";
      cardsContainer.appendChild(note);
      return;
    }
    const fragment = document.createDocumentFragment();
    for (const t of list) {
      fragment.appendChild(createCard(t));
    }
    cardsContainer.appendChild(fragment);
  }

  function filterHome() {
    renderCards(temples);
  }
  function filterOld() {
    renderCards(temples.filter(t => t.year < 1900));
  }
  function filterNew() {
    renderCards(temples.filter(t => t.year > 2000));
  }
  function filterLarge() {
    renderCards(temples.filter(t => t.area > 90000));
  }
  function filterSmall() {
    renderCards(temples.filter(t => t.area < 10000));
  }

  function setActiveButton(activeBtn) {
    filterButtons.forEach(btn => {
      btn.setAttribute("aria-pressed", "false");
    });
    activeBtn.setAttribute("aria-pressed", "true");
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const f = btn.getAttribute("data-filter");
      setActiveButton(btn);
      if (f === "home") filterHome();
      if (f === "old") filterOld();
      if (f === "new") filterNew();
      if (f === "large") filterLarge();
      if (f === "small") filterSmall();
    });
  });

  filterHome();

  yearEl.textContent = new Date().getFullYear();
  lastModifiedEl.textContent = `Last modified: ${document.lastModified || "N/A"}`;
});

  yearEl.textContent = new Date().getFullYear();
  lastModifiedEl.textContent = `Last modified: ${document.lastModified || "N/A"}`;
});
