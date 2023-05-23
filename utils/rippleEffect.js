export function rippleEffect(e) {
  const button = e.target;
  const ripple = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + window.scrollX) - radius}px`;
  ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + window.scrollY) - radius}px`;
  ripple.classList.add("ripple");

  button.dataset.ripple === "once" && button.querySelector(".ripple")
  && button.querySelector(".ripple").remove();

  button.appendChild(ripple);

  const timeOut = getAnimationDuration(ripple);

  setTimeout(() => {
    ripple && ripple.remove();
  }, timeOut);

  function getAnimationDuration() {
    const aDuration = window.getComputedStyle(ripple).animationDuration;
    return aDuration.includes("ms")
      ? aDuration.replace("ms", "") : aDuration.replace("s", "") * 1000;
  }
}