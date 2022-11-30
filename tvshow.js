
const form = document.querySelector("form");
const images = document.querySelector("img");
const container = document.querySelector("#container");


form.addEventListener("submit", async function show(e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
    console.log(res.data);
    addImages(res.data);
    form.elements.query.value = "";

})



const addImages = (shows) => {
    container.innerHTML = "";
    for (let result of shows) {
        const img = document.createElement("img");
        if (result.show.image) {
            img.src = result.show.image.medium
            container.append(img);
        }
    }
}

