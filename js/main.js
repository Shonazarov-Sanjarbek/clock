const API__PRODUCTS = "https://dummyjson.com"

const wrapper = document.querySelector(".prodacts__wrapper")
const skeleton = document.querySelector(".skeleton__wrapper")
const viewMoreBtn = document.querySelector(".prodacts__btn")
console.log(viewMoreBtn);
// console.log(wrapper);
// console.log(API__PRODUCTS);

let perPageCount = 6
let offset = 1
let categoryValue = ""

async function fetchData(api, limit, category) {
    try {
        skeleton.style.display = "flex"
        await fetch(`${api}/products${category}?limit=${limit}`)
        .then(res => res.json()).then(data => createCard(data))
        .finally(skeleton.style.display = "none")
    } catch (error) {
        console.log("error");
    }
}

fetchData(API__PRODUCTS, perPageCount, "")

function createCard(data) {
    while (wrapper.firstChild) {
        wrapper.firstChild.remove(  )
    }
    data.products.forEach(prodact => {
        console.log(data);
        console.log(prodact);
        let card = document.createElement("div")
        card.classList.add("prodacts__card")
        console.log(card);
        card.innerHTML = `
        <img src="${prodact.thumbnail}" alt="">

        `
        wrapper.appendChild(card)
    });
}

for (let i = 0;i < 12;i++) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = ` <div class="loader">
                        <div class="wrapper">
                          <div class="circle"></div>
                          <div class="line-1"></div>
                          <div class="line-2"></div>
                          <div class="line-3"></div>
                          <div class="line-4"></div>
                        </div>
                      </div>`;
    skeleton.appendChild(wrapper);
}
viewMoreBtn.addEventListener("click", ()=> {
    offset++
    fetchData(API__PRODUCTS, perPageCount * offset, categoryValue)
}
)