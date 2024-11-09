function startAnimation() {
  // Make the animation visible
  document.getElementById('flower-animation').style.visibility = 'visible';

  // If animation is not initialized, start it
  if (!animation) {
    animation = lottie.loadAnimation({
      container: document.getElementById('flower-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'flower-animation.json' // Use your local or URL path
    });
  }

  // Trigger confetti animation
  confetti({
    particleCount: 500,
    spread: 80,
    origin: { x: 0.5, y: 0.5 },
    gravity: 0.2,
    drift: 0.1
  });

  // Erase all text content, including the apology message
  document.querySelector('.container').innerHTML = '';

  // Trigger the image bloom effect after a short delay
  setTimeout(function() {
    const image = document.querySelector('.thank-you-image');
    image.style.transform = 'scale(1)';
  }, 100);
}
