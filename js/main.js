// const btnShare = document.querySelector(".btn-share");
// const socialLinks = document.querySelector(".social-links");

// btnShare.addEventListener("click", () => {
//   if (
//     socialLinks.style.display === "none" ||
//     socialLinks.style.display === ""
//   ) {
//     socialLinks.classList.toggle("show");
//     console.log(socialLinks.classList);
//   } else {
//     socialLinks.style.display = "none";
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const btnShare = document.querySelector(".btn-share");
  const socialLinks = document.querySelector(".social-links");

  // Відкриття/закриття при кліку на кнопку
  btnShare.addEventListener("click", (e) => {
    e.stopPropagation(); // щоб подія не дійшла до document
    socialLinks.classList.toggle("show");
  });
  // Закриття при кліку поза socialLinks
  document.addEventListener("click", (e) => {
    if (!socialLinks.contains(e.target) && !btnShare.contains(e.target)) {
      socialLinks.classList.remove("show");
    }
  });
});
