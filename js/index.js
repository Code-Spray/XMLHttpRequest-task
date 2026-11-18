function renderPosts(posts) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";
  posts.forEach(post => {
    const card = document.createElement("section");
    card.className = "card col-12 lg:col-4";
    card.style.maxWidth = "320px";
    card.innerHTML = `
      <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.body}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://dummyjson.com/posts", true);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    renderPosts(data.posts);
  }
};

xhr.send();