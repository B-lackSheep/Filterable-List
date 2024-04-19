import { WEB_API } from "./constants.js";
import { renderPosts } from "./utils.js";

export async function fetchData(filterValueTitle, filterValueBody) {
  const response = await fetch(WEB_API);
  response
    .json()
    .then((data) => {
      const filteredTitleValue = filterValueTitle.toLowerCase();
      const filteredBodyValue = filterValueBody.toLowerCase();

      field.innerHTML = "";
      renderPosts(data, filteredTitleValue, filteredBodyValue);
    })
    .catch((error) => {
      console.log("Ошибка при получении данных:", error);
    });
}
