export const disablePageScrolling = shouldDisable => {
  document.body.style.setProperty('overflow', shouldDisable ? 'hidden' : '');
};
