"use strict";
const form = document.querySelector(".my-form");
const type = document.querySelector("#VehicleType");
const userName = document.querySelector("#name");
const age = document.querySelector("#age");
const awesome = document.querySelector("#awesome");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, userName.value, age.valueAsNumber, awesome.checked, "Just for commit");
});
