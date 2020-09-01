function moveScrollTo(idElement) {
  window.scroll({
    top: document.querySelector(idElement).offsetTop -80,  
    left: 0,
    behavior: "smooth" // 3
  });
}
