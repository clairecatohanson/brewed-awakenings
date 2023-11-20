import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener("click", (event) => {
    const clickedEl = event.target

    if (clickedEl.dataset.type === "employee") {
        const employeeId = clickedEl.dataset.id
        let productCounter = 0
        for (const order of orders) {
            if (order.employeeId === parseInt(employeeId)) {
                productCounter++
            }
        }
        
        for (const employee of employees) {
            if (employee.id === parseInt(employeeId)) {
                window.alert(`${employee.name} sold ${productCounter} products`)
            }
        }        
    }
})

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

