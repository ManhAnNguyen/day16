const data = [
  {
    id: 1,
    name: "Macbook Pro",
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg",
    price: 10000,
  },
  {
    id: 2,
    name: "Iphone 13 Pro Max",
    image:
      "https://genk.mediacdn.vn/139269124445442048/2022/3/19/genk-iphone-13-pro-max-alpine-green-17-1647675386948656581465.jpg",
    price: 3000,
  },
  {
    id: 3,
    name: "Airpod Pro",
    image:
      "https://s.yimg.com/os/creatr-uploaded-images/2020-09/7e945160-f699-11ea-beef-f468e8c9049c",
    price: 2000,
  },
  {
    id: 4,
    name: "Apple Watch",
    image: "https://vcdn-sohoa.vnecdn.net/2022/03/23/a1-3163-1648018222.jpg",
    price: 100,
  },
  {
    id: 5,
    name: "Porsche",
    image:
      "https://media.vov.vn/sites/default/files/styles/large/public/2021-04/992-porsche-911-turbo-s-malaysia-1-e1618198018590-1200x629.jpg",
    price: 600,
  },
];
const carts = [];
const listItem = document.querySelector(".list-item");
const cartContainer = document.querySelector(".cart-container");
let totalItem = document.querySelector(".total-item");

data.map((d, index) => {
  const { id, name, image, price } = d;
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
    <div class = 'item-left'>
       <span class = 'image'>
         <img src = ${image} />
      </span>
      <span class = 'name'>${name}</span>
    </div>
    <div class = 'item-right'>
      <span class = 'price'>${price}</span>
      <button idItem=${id} class = 'button' >Add</button>
    </div>
  `;

  listItem.appendChild(item);
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const idItem = btn.getAttribute(["idItem"]);
    let currentItem = Number(totalItem.innerHTML);
    currentItem += 1;
    totalItem.innerHTML = currentItem;

    const item = data.find((d) => d.id.toString() === idItem.toString());
    carts.push(item);
    cartContainer.innerHTML = "";
    carts.map((c) => renderItemCart(c));
  });
});

const renderItemCart = (item) => {
  const itemCart = document.createElement("div");
  itemCart.classList.add("item-cart");
  itemCart.innerHTML = `
   <span class = 'image-cart'>
     <img src = ${item.image} />
    </span>
    <span>${item.name}</span>
    <span class = 'price-cart'>${item.price}</span>
  `;
  cartContainer.appendChild(itemCart);
};
