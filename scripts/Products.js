import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener("click", (event) => {
    const clickedEl = event.target

    if (clickedEl.dataset.type === "product") {
        for (const product of products) {
            if (product.id === parseInt(clickedEl.dataset.id)) {
                window.alert(`${product.name} costs\n$${parseFloat(product.price).toFixed(2)}`)
            }
        }
    }
})

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-id="${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

