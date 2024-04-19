import { renderPost } from "./render.js";

export const renderPosts = (posts, filteredTitleValue, filteredBodyValue) => {
  posts.forEach((obj) => {
    const currData = { obj, filteredTitleValue, filteredBodyValue };
    renderPost(currData);
  });
};

export const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
