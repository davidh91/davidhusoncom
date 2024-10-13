const isVisible = (elem) => {
  if (!elem) {
    return 0;
  }
  console.log("is visible elem:", elem);

  const rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default isVisible;
