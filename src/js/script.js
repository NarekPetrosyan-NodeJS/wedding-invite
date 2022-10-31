const gorgBlock = document.querySelector("#gorg");
const gorgDivs = document.querySelectorAll("#gorg div");
const gifNM = document.querySelector("#gif_nm");
window.onload = () => {
gifNM.src = "./src/gif/nm2.gif";
  setTimeout(() => {
    gorgDivs.forEach((div) => (div.style.display = "block"));
    gorgBlock.style.display = "flex";
    gorgBlock.classList.add("gorg");
  }, 4000);
  
}
