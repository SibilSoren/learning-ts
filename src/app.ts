const form = document.querySelector(".my-form") as HTMLFormElement;

const type = document.querySelector("#VehicleType") as HTMLSelectElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const age = document.querySelector("#age") as HTMLInputElement;
const awesome = document.querySelector("#awesome") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, userName.value, age.valueAsNumber, awesome.checked);
});
