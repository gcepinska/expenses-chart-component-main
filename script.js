"use strict";

// fetch("./data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsondata) => console.log(jsondata));

const jsonData = function () {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

jsonData();



const day = jsonData.day;
const amount = jsonData.amount;



