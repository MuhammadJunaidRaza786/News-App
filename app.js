function remove() {
  let html = document.getElementById("list");
  while (html.hasChildNodes()) {
    html.removeChild(list.firstChild);
  }
}

async function apicall() {
  try {
    let input = document.getElementById("input");
    let i_value = input.value;
    console.log(i_value);

    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${i_value}&apiKey=027f4cf6e47d4ac18a800838cd8c380a`
    );
    const data = await res.json();
    console.log(data);
    // console.log(data.articles[1].title)

    for (let source of data.articles) {
      console.log(source);

      let card = `<img src=${source.urlToImage} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${source.title}</h5>
        <p class="card-text">${source.description}</p>
        <a href="${source.url}" target="_blank" class="btn btn-primary">Read More</a>
        </div>`;
      const html = document.getElementById("list");
      list.style.display = "flex";
      html.innerHTML += card;
    }
  } catch (error) {
    console.log(`=====> ${error}`);
  }
}

input.addEventListener("change", apicall);
input.addEventListener("change", remove);

// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=027f4cf6e47d4ac18a800838cd8c380a`)
// .then ((res)=> {
//     return res.json()
// })
// .then ( (data) =>
// console.log(data)
// )
