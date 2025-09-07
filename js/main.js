const btnShare = document.querySelector(".btn-share");
const socialLinks = document.querySelector(".social-links");
console.log(btnShare);
console.log(socialLinks);

btnShare.addEventListener("click", () => {
  if (
    socialLinks.style.display === "none" ||
    socialLinks.style.display === ""
  ) {
    // socialLinks.style.display = "block";
    socialLinks.classList.toggle("show");
    console.log(socialLinks.classList);
  } else {
    socialLinks.style.display = "none";
  }
});
