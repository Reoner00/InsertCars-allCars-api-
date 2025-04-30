export const validateInsert = (data) => {
  let isError = false;

  if (isNaN(data.price)) {
    console.error("Price must be a number.");
    message.textContent = "Price must be a number.";
    message.style.color = "red";
    isError = true;
  }
  if (!title.value || !description.value || !imgUrl.value || !price.value) {
    console.error("Fill all fields before submitting.");
    message.textContent = "Fill all fields before submitting.";
    message.style.color = "red";
    isError = true;
  }
  if (title.value.length < 3 || title.value.length > 20) {
    console.log("Title must be between 3 and 20 characters.");
    message.textContent = "Title must be between 3 and 20 characters.";
    message.style.color = "red";
    isError = true;
  }

  if (description.value.length < 5 || description.value.length > 80) {
    console.log("Description must be between 5 and 80 characters.");
    message.textContent = "Description must be between 5 and 80 characters.";
    message.style.color = "red";
    isError = true;
  }

  const imageUrlRegex =
    /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i;

  if (!imageUrlRegex.test(data.imgUrl)) {
    console.log("image URL is bad");
    message.textContent = "image URL is bad";
    message.style.color = "red";
    isError = true;
  }
  return isError;
};
