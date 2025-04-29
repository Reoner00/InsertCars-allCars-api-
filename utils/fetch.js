const URL = "https://680a11fb1f1a52874cdf0a12.mockapi.io";

export const fetchCars = async () => {
  const response = await fetch(`${URL}/Socials`);

  const data = await response.json();
  return data;
};

export const insertCar = async (data) => {
  const response = await fetch(`${URL}/Socials`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const car = await response.json();
  return car;
};

export const fetchCarsById = async (id) => {
  const response = await fetch(`${URL}/Socials/${id}`);
  const data = await response.json();
  return data;
};

export const deleteCarById = async (id) => {
  const response = await fetch(`${URL}/Socials/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
