import { field } from "./constants.js";

export const renderPost = (data) => {
  const { obj, filteredTitleValue, filteredBodyValue } = data;
  const title = obj["title"].toLowerCase();
  const body = obj["body"].toLowerCase();

  if (title.includes(filteredTitleValue) && body.includes(filteredBodyValue)) {
    const titleElement = document.createElement("h3");
    const bodyElement = document.createElement("p");

    field.appendChild(titleElement);
    field.appendChild(bodyElement);

    titleElement.innerHTML = obj["title"];
    bodyElement.innerHTML = obj["body"];
  }
};
