const API__PRODUCTS = "https://dummyjson.com"

const wrapper = document.querySelector(".prodacts__wrapper")
const skeleton = document.querySelector(".skeleton__wrapper")
// console.log(wrapper);
// console.log(API__PRODUCTS);

async function fetchData(api) {
    try {
        await fetch(`${api}/products`)
        .then(res => res.json()).then(data => console.log(data))
    } catch (error) {
        console.log("error");
    }
}

fetchData(API__PRODUCTS)

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
    // console.log("sdsd")
}