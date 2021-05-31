const newsJson = `[
    {
        "id": "1",
        "title": "Tickets",
        "image": "news-one.webp",
        "description": "Ticket Sales Start in December 2020",
        "alt": "news-one"
    },

    { 
        "id": "2",
        "title": "Artists",
        "image": "news-two.webp",
        "description": "Dave Richard Confirmed His Participation",
        "alt": "news-two"
    },

    {
        "id": "3",
        "title": "Artists",
        "image": "news-three.webp",
        "description": "DJ Alison From Italy Joined Our Line-Up",
        "alt": "news-three"

    },

    {
        "id": "4",
        "title": "General",
        "image": "news-four.webp",
        "description": "Dates and Location Are Approved",
        "alt": "news-four"
    }
]`;

function renderNews(news) {
  const newsContainer = document.querySelector(" .latest-news");
  let html = "";
  for (const article of news) {
    html += `<div class="col">
        <div class="card bg-transparent border-0">
          <img src="img/${article.image}" class="card-img-top" alt="${article.alt}">
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description}</p>
          </div>
        </div>
      </div>`;
  }
  newsContainer.innerHTML = html;
}

renderNews(JSON.parse(newsJson));

const lineUpJson = `[
  {
    "id": "1",
    "title": "Tomas Eck",
    "image": "tomas.webp",
    "description": "His first tracks, "Beast" and "Silence" were released in 2006 on the Berlin label
    Auter Records. In 2 years, Tomas became a constant favorite in today's club scene.",
    "date": "5 June | West Stage"
},

{ 
    "id": "2",
    "title": "DJ Delilah",
    "image": "img/dj.webp",
    "description": "Her commitment and deep musical connection is the key to her status one of the best
    techno DJs for the last 10 years. DJ Delilah stands as one of the American minimal techno pioneers.",
    "date": "6 June | East Stage"
},

{
    "id": "3",
    "title": "Jayden Taylor",
    "image": "img/jayden.webp",
    "description": "Jayden combines his unique sound with a maximum of other genres.
    He shows his audiences how exciting techno can be and experiments a lot.",
    "date": "7 June | Main Stage"
},

{
    "id": "4",
    "title": "Mary Don",
    "image": "img/mary.webp",
    "description": "Mary Don is one of the most in-demand names in electronic dance music in 2020.
    She takes cues from techno, funk, disco, and hiphop.",
    "date": "9 June | East Stage"
}

]` ;

function renderLineUp(lineUp) {
  const lineUpContainer = document.querySelector(" .stars");
  let html = "";
  for (const star of lineUp) {
    html += `<div class="card mb-3 bg-transparent border-0" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="img/${star.image}" class="rounded-circle" alt="${star.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${star.title}</h5>
          <p class="card-text">${star.date}</p>
          <p class="card-text">${star.description}</p>
        </div>
      </div>
    </div>
  </div>`;
  }
  lineUpContainer.innerHTML = html;
}

renderLineUp(JSON.parse(lineUpJson));