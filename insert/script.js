import { insertCar, deleteCarById } from "../utils/fetch.js";

const title = document.getElementById("title");
const imgUrl = document.getElementById("imgUrl");
const description = document.getElementById("description");
const price = document.getElementById("price");
const btnSubmit = document.getElementById("btnSubmit");
const inputDelId = document.getElementById("inputDelId");
const btnDelId = document.getElementById("delCarId");
const message = document.getElementById("message");

btnSubmit.addEventListener("click", async () => {
  const data = {
    title: title.value,
    description: description.value,
    imgUrl: imgUrl.value,
    price: +price.value,
  };
  if (isNaN(data.price)) {
    console.error("Price must be a number.");
    message.textContent = "Price must be a number.";
    message.style.color = "red";
    return;
  }
  if (!title.value || !description.value || !imgUrl.value || !price.value) {
    console.error("Fill all fields before submitting.");
    message.textContent = "Fill all fields before submitting.";
    message.style.color = "red";
    return;
  }
  const imageUrlRegex =
    /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i;

  if (!imageUrlRegex.test(data.imgUrl)) {
    console.log("mage URL is bad");
    return;
  }

  const car = await insertCar(data);

  if (car) {
    message.textContent = "Car was added successfully";
    message.style.color = "green";

    setTimeout(() => {
      window.location.replace = "../index.html";
    }, 3000);
  }
});

btnDelId.addEventListener("click", async () => {
  const idToDelete = inputDelId.value.trim();
  if (!idToDelete) {
    console.log("Please enter an ID to delete.");
    message.textContent = "Please enter an ID to delete.";
    message.style.color = "red";
    return;
  }

  try {
    const deletedCar = await deleteCarById(idToDelete);
    if (!deletedCar) {
      console.log("No car found to delete");
      message.textContent = `No car found with id ${idToDelete}`;
      message.style.color = "red";
      return;
    }
    message.textContent = `Car with ID ${idToDelete} deleted successfully`;
    message.style.color = "green";
    inputDelId.value = "";
  } catch (error) {
    console.error("Error deleting car:", error);
    message.textContent = "Error deleting car. Please try again.";
    message.style.color = "red";
  }
});
