const circle = document.querySelector('.progress');

const progressAnimation = () => {
  let percentageProgress = Math.floor(50 * 100);

  let radius = circle.getAttribute('r');
  let circleLenght = 2 * Math.PI * radius;
  circle.setAttribute('stroke-dasharray', circleLenght);
  circle.setAttribute('stroke-dashoffset', circleLenght - circleLenght * percentageProgress / 100);
}

progressAnimation();
