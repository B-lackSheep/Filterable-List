import { fetchData } from "./api.js";

let filterValueTitle = "";
let filterValueBody = "";

export const handleInputTitle = () => {
  const inputValueTitle = inputTitle.value.trim();

  if (inputValueTitle !== filterValueTitle) {
    filterValueTitle = inputValueTitle;
    fetchData(filterValueTitle, filterValueBody);
  }
};

export const handleInputBody = () => {
  const inputValueBody = inputBody.value.trim();

  if (inputValueBody !== filterValueBody) {
    filterValueBody = inputValueBody;
    fetchData(filterValueTitle, filterValueBody);
  }
};
