const globalURL = 'http://localhost:1337/api/global';
const landingURL = 'http://localhost:1337/api/landing-page';
const STRAPI_URL = "http://localhost:1337";

async function fetchData() {
  const [globalRes, landingRes] = await Promise.all([
    fetch(globalURL),
    fetch(landingURL)
  ]);
  const globalData = await globalRes.json();
  const landingData = await landingRes.json();

  renderHeader(globalData.data.Header);
  renderHero(landingData.data.blocks.find(b => b.__component === "blocks.hero"));
  renderSectionHeading(landingData.data.blocks.find(b => b.__component === "blocks.section-heading"));
  renderCards(landingData.data.blocks.find(b => b.__component === "blocks.card-grid").Card);
  renderYouTube(landingData.data.blocks.find(b => b.__component === "blocks.section-youtube").Clip);
  renderFooter(globalData.data.Footer);
}

function renderHeader(headerData) {
  const header = document.getElementById("header");
  const nav = headerData.navItems.map(item => `<a href="${item.href}">${item.label}</a>`).join(" | ");
  header.innerHTML = `
    <div class="header-container">
      <img src="${STRAPI_URL + headerData.Logo.Logo.url}" alt="Logo" class="logo" />
      <nav class="navbar">${nav}</nav>
    </div>
  `;
}

function renderHero(heroBlock) {
  const container = document.getElementById("hero-slider");
  container.innerHTML = heroBlock.HeroPicture.map(img => 
    `<img src="${STRAPI_URL + img.Image.url}" alt="hero">`
  ).join("");
}

function renderSectionHeading(headingBlock) {
  document.getElementById("activity-heading").textContent = headingBlock.Heading;
  document.getElementById("activity-subheading").textContent = headingBlock.subHeading;
}

function renderCards(cards) {
  const container = document.getElementById("card-grid");
  container.innerHTML = cards.map(card => `
    <div class="card">
      <img src="${card.cardImage.url}" alt="${card.Heading}" />
      <h3>${card.Heading}</h3>
      <p>${card.text}</p>
    </div>
  `).join("");
}

function renderYouTube(clips) {
  const container = document.getElementById("youtube-section");
  container.innerHTML = clips.map(clip => 
    `<div>
      <h3>${clip.Heading}</h3>
      ${clip.clip[0].children[0].text}
    </div>`
  ).join("");
}

function renderFooter(footerData) {
  const footer = document.getElementById("footer");
  const icons = footerData.Icon.map(icon =>
    `<a href="${icon.href}" target="_blank">
      <img src="${icon.Logo.url}" alt="${icon.label}" style="height: 30px;" />
    </a>`
  ).join(" ");

  footer.innerHTML = `
    <div>${icons}</div>
    <div>${footerData.map.map}</div>
  `;
}

fetchData();
