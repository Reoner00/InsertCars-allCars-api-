import { deleteCarById, fetchCarsById } from "../utils/fetch.js";

const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const title = document.getElementById("title");
const description = document.getElementById("description");
const imgUrl = document.getElementById("imgUrl");
const price = document.getElementById("price");
const btnDelete = document.getElementById("btnDelete");
const message = document.getElementById("message");

const insertDataToScreen = async (car) => {
  title.textContent = car.title;
  description.textContent = car.description;
  imgUrl.src = car.imgUrl;
  price.textContent = car.price;
};

const buildScreen = async () => {
  const car = await fetchCarsById(id);
  insertDataToScreen(car);
};

buildScreen();

btnDelete.addEventListener("click", async () => {
  const car = await deleteCarById(id);
  if (car) {
    message.textContent = "Car deleted successfully";
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
  }
});
