const projectList = [
  {
    name: "ChillQuotes",
    text: "App built in ReactJS where you can share quotes on Twitter",
    img: "img/projects/quotes-thumb.jpg",
    alt: "chill quotes project image",
    link: "pages/case-quotes.html",
    firstImgClass:"js-first-img"
  },
  {
    name: "Grid Systems",
    text: "Responsive site to explore the posibilities of CSS Grid",
    img: "img/projects/grids-thumb.png",
    alt: "grid system project image",
    link: "pages/case-grids.html",
    firstImgClass:""
  },
];



function renderProjects() {
  const cardMarkup = projectList.map(function(project) {  

    return `
      <a class="card" href="${project.link}">
          <img 
            class="card__img js-animate-img lazy-img ${project.firstImgClass}" 
            src="img/lazy-img-thumb.jpg"
            data-src="${project.img}" 
            alt="${project.alt}"
          >
          <h3 class="card__title">${project.name}</h3>
          <p class="card__text">${project.text}</p>
          <h6 class="card__link">View Project 
            <span class="card__icon material-icons"> navigate_next </span>
          </h6>
      </a>
    `
  }).join('');

  const projects = document.querySelector(".js-project");  

  if (projects !== null) { 
    projects.insertAdjacentHTML('afterbegin', cardMarkup);
  }
}
  
renderProjects();
