const carsWrapper = document.getElementById("cars-wrapper");

const fetchCars = async () => {
  const response = await fetch(
    "https://680a11fb1f1a52874cdf0a12.mockapi.io/Socials"
  );
  const data = await response.json();
  return data;
};

const buildCards = (data) => {
  data.forEach((car) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
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

    cardContent.append(title, imagUrl, description, price, id);

    card.append(cardContent);
    carsWrapper.append(card);
    console.log("Creating card:", car);
  });
};

const buildScreen = async () => {
  const cars = await fetchCars();
  console.log(cars);
  buildCards(cars);
};
buildScreen();
