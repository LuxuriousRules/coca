import './styles/index.scss'

import './modules/header.js'
import './modules/backend.js'
import './modules/backend.js'
import { getProducts } from './modules/backend.js';


async function renderProducts() {
  const products = await getProducts();
  const container = document.getElementById("products");

  if (!products.length) {
    container.innerHTML = "<p>Нет товаров</p>";
    return;
  }

  container.innerHTML = products.map(p => {
    const variant = p.variants?.[0];
    const price = variant?.prices?.[0];
    const img = p.thumbnail || "https://placehold.co/150";


    return `
      <div class="products">
       <div class="produckts__wrapper">
        <img class="products__img" src="${img}" alt="${p.title}" width="380">
        <h3 class="products__title">${p.title}</h3>
        <p class="products__description">${p.description || "Описание отсутствует"}</p>
        <p>
          ${price 
            ? `Цена: ${price.amount / 100} ${price.currency_code.toUpperCase()}`
            : "Цена не указана"}
        </p>
        <button class="buy-btn" data-id="${p.id}">Купить</button>
        </div>
      </div>
      
    `;
  }).join("");
}

renderProducts();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("buy-btn")) {
    const productId = e.target.dataset.id; 
    addToCart(productId);
  }
});

let cart = [];

function addToCart(productId) {
  const product = cart.find(p => p.id === productId);
  if (product) {
    product.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  console.log("Корзина:", cart);
}
















import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({duration: 2000, once: false,});

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

