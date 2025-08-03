const apiKey = "0VTDNlJJmF6W0AlP9vPpkHJvNv9e94JJ";

function getGIFs() {
  const searchTerm = document.getElementById("search").value;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("gifcontainer");
      container.innerHTML = ""; // clear previous gifs
      data.data.forEach(gif => {
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        img.alt = "GIF";
        img.style.margin = "10px";
        container.appendChild(img);
      });
    })
    .catch(error => console.error("Error fetching GIFs:", error));
}
