const inputEl = document.getElementById("fileInput");
const imageEl = document.getElementById("image");
const formEl = document.getElementById("form");
const url = "https://if-student-api.onrender.com/api/file";

const renderImage = (file) => {
  imageEl.innerHTML = `
  <img src="${file}"  alt="your image"/> `;
};

const sendImage = async () => {
  const response = await fetch(url, {
    method: "POST",
    body: new FormData(formEl),
  });
  const result = await response.json();

  console.log(result);
};

inputEl.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    renderImage(event.target.result);
  });

  reader.readAsDataURL(file);

  sendImage();
});

imageEl.addEventListener("click", () => {
  inputEl.click();
});
