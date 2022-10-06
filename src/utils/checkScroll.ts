export function checkScroll() {
  if (document.body.offsetHeight > window.innerHeight) {
    document.body.style.marginRight = "0";
  } else {
    let div = document.createElement("div");

    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    document.body.style.marginRight = scrollWidth + "px";
  }
}