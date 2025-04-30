import { fetchCars } from "./utils/fetch.js";

const carsWrapper = document.getElementById("cars-wrapper");

const buildCards = (data) => {
  data.forEach((car) => {
    const card = document.createElement("a");
    card.href = `./product/index.html?id=${car.id}`;
    card.classList.add("card");

    const id = document.createElement("p");
    id.classList.add("id");
    id.textContent = car.id;

    const title = document.createElement("h2");
    title.textContent = car.title;

    const description = document.createElement("p");
    description.textContent = car.description;

    const imagUrl = document.createElement("img");
    imagUrl.src = car.imgUrl;

    const price = document.createElement("p");
    price.textContent = car.price;

    card.append(title, imagUrl, description, price, id);

    carsWrapper.append(card);
    console.log("Creating card:", car);
  });
};

const buildScreen = async () => {
  const cars = await fetchCars();
  buildCards(cars);
};
buildScreen();
