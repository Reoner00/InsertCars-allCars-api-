const title = document.getElementById("title");
const description = document.getElementById("description");
const imgUrl = document.getElementById("imgUrl");
const price = document.getElementById("price");
const btnSubmit = document.getElementById("btnSubmit");
const inputDelId = document.getElementById("inputDelId");
const btnDelId = document.getElementById("delCarId");
const message = document.getElementById("message");

const insertCar = async (data) => {
  const response = await fetch(
    "https://680a11fb1f1a52874cdf0a12.mockapi.io/Socials",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );
  const car = await response.json();
  return car;
};

const deleteCar = async (id) => {
  const response = await fetch(
    `https://680a11fb1f1a52874cdf0a12.mockapi.io/Socials/${id}`,
    {
      method: "DELETE",
    }
  );
  const delCarId = await response.json();
  return delCarId;
};

btnSubmit.addEventListener("click", async () => {
  if (
    !title.value.trim() ||
    !description.value.trim() ||
    !imgUrl.value.trim() ||
    !price.value.trim()
  ) {
    console.error("Fill all fields before submitting.");
    message.textContent = "Fill all fields before submitting.";
    message.style.color = "red";
    return;
  }

  const data = {
    title: title.value,
    description: description.value,
    imgUrl: imgUrl.value,
    price: price.value,
  };

  const car = await insertCar(data);
  console.log("car", car);

  title.value = "";
  description.value = "";
  imgUrl.value = "";
  price.value = "";
  message.textContent = "Car added successfully";
  message.style.color = "green";
  console.log("Car added successfully", car);
});

btnDelId.addEventListener("click", async () => {
  const idToDelete = inputDelId.value.trim();
  if (!idToDelete) {
    console.log("Please enter an ID to delete.");
    message.textContent = "Please enter an ID to delete.";
    message.style.color = "red";
    return;
  }

  deleteCar(idToDelete)
    .then((deletedCar) => {
      if (!deletedCar) {
        console.log("No car found to delete");
        message.textContent = `No car found with id `;
        message.style.color = "red";
        return;
      }

      console.log("Car deleted successfully", deleteCar);
      message.textContent = `car with id ${idToDelete} deleted successfully`;
      message.style.color = "green";
      inputDelId.value = "";
    })
    .catch((error) => {
      console.error("Error deleting car:", error);
      alert("Failed to delete the car. Please try again.");
    });
});
