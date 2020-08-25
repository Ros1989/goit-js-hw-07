"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsListItems = ingredients.map((listItem) => {
  const liTag = document.createElement("li");
  liTag.textContent = listItem;

  return liTag;
});

ingredientsRef.append(...ingredientsListItems);
