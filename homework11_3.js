const images = [
  "/img/1.jpeg",
  "/img/2.jpeg",
  "/img/3.jpeg",
  "/img/4.jpeg",
  "/img/5.jpeg",
  "/img/6.jpeg",
  "/img/7.jpeg",
  "/img/8.jpeg",
  "/img/9.jpeg",
];

function getRandomImg(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
const randomImgSrc = getRandomImg(images);
document.getElementById("random_img").src = randomImgSrc;
