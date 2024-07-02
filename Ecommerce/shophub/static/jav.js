jav.js
let isHovering = false;

function repelCursor(event) {
  const button = document.querySelector('.repel-button');
  const buttonRect = button.getBoundingClientRect();

  const cursorX = event.clientX;
  const cursorY = event.clientY;

  const buttonX = buttonRect.left + buttonRect.width / 2;
  const buttonY = buttonRect.top + buttonRect.height / 2;

  const deltaX = cursorX - buttonX;
  const deltaY = cursorY - buttonY;

  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  const repelStrength = 500;
  const repelX = (deltaX / distance) * repelStrength;
  const repelY = (deltaY / distance) * repelStrength;

  if (isHovering) {
    button.style.transform = `translate(${repelX}px, ${repelY}px)`;
    // Add the 'repelling' class to disable pointer events during the animation
    button.classList.add('repelling');
  }
}

document.querySelector('.repel-button').addEventListener('mouseenter', function () {
  isHovering = true;
});

document.querySelector('.repel-button').addEventListener('mouseleave', function () {
  isHovering = false;

  // Add a delay before removing the 'repelling' class to make it more complex
  setTimeout(() => {
    const button = document.querySelector('.repel-button');
    button.classList.remove('repelling');
    button.style.transform = 'translate(2, 1)';
  }, 10);
});

    