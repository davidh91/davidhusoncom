const isVisible = (elem) => {
  if (!elem) {
    return 0;
  }
  const rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      // Divide by 2 to make sure return visible only when element is in top-half of screen
      (window.innerHeight / 2 || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default isVisible;
