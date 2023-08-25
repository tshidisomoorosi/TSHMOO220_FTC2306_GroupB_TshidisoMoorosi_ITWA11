const root_1 = document.querySelector('[data-key="order1"]')
// const biscuits_1 = document.querySelector('[data-biscuits="10"]')
// const donuts_1 = document.querySelector('[data-donuts="13"]')
// const pancakes_1 = document.querySelector('[data-pancakes="0"]')
// const status_1 = document.querySelector('[data-delivered="false"]')

const root_2 = document.querySelector('[data-key="order2"]')
// const biscuits_2 = document.querySelector('[data-biscuits="5"]')
// const donuts_2 = document.querySelector('[data-donuts="0"]')
// const pancakes_2 = document.querySelector('[data-pancakes="2"]')
// const status_2 = document.querySelector('[data-delivered="false"]')

const root_3 = document.querySelector('[data-key="order3"]')
// const biscuits_3 = document.querySelector('[data-biscuits="12"]')
// const donuts_3 = document.querySelector('[data-donuts="11"]')
// const pancakes_3 = document.querySelector('[data-pancakes="15"]')
// const status_3 = document.querySelector('[data-delivered="true"]')


root_1.firstElementChild.children[1].textContent = "10";
root_1.children[1].children[1].textContent = "13";
root_1.children[2].children[1].textContent = "0";
root_1.lastElementChild.children[1].textContent = "false";

root_2.firstElementChild.children[1].textContent = "5"
root_2.children[1].children[1].textContent = "0";
root_2.children[2].children[1].textContent = "2";
root_2.lastElementChild.children[1].textContent = "false";

root_3.firstElementChild.children[1].textContent = "12"
root_3.children[1].children[1].textContent = "11";
root_3.children[2].children[1].textContent = "15";
root_3.lastElementChild.children[1].textContent = "true";
