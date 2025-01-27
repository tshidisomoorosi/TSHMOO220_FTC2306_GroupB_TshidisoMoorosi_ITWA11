const root_1 = document.querySelector('[data-key="order1"]');

const root_2 = document.querySelector('[data-key="order2"]');

const root_3 = document.querySelector('[data-key="order3"]');

root_1.firstElementChild.children[1].textContent = root_1.dataset.biscuits;
root_1.children[1].children[1].textContent = root_1.dataset.donuts;
root_1.children[2].children[1].textContent = root_1.dataset.pancakes;
root_1.lastElementChild.children[1].textContent =
  root_1.dataset.delivered === "true" ? "Delivered" : "Pending";

root_2.firstElementChild.children[1].textContent = root_2.dataset.biscuits;
root_2.children[1].children[1].textContent = root_2.dataset.donuts;
root_2.children[2].children[1].textContent = root_2.dataset.pancakes;
root_2.lastElementChild.children[1].textContent =
  root_2.dataset.delivered === "true" ? "Delivered" : "Pending";

root_3.firstElementChild.children[1].textContent = root_3.dataset.biscuits;
root_3.children[1].children[1].textContent = root_3.dataset.donuts;
root_3.children[2].children[1].textContent = root_3.dataset.pancakes;
root_3.lastElementChild.children[1].textContent =
  root_3.dataset.delivered === "true" ? "Delivered" : "Pending";
