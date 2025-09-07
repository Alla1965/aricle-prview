const btnShare = document.querySelector(".btn-share");
const socialLinks = document.querySelector(".social-links");

btnShare.addEventListener("click", () => {
  if (
    socialLinks.style.display === "none" ||
    socialLinks.style.display === ""
  ) {
    socialLinks.classList.toggle("show");
    console.log(socialLinks.classList);
  } else {
    socialLinks.style.display = "none";
  }
});
