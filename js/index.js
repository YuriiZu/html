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