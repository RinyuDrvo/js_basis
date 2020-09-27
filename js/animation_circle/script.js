function showCircle(cx, cy, radius) {
  const circle = document.getElementById('circle');
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.left = cx + 'px';
  circle.style.top = cy + 'px';

  setTimeout(() => {
    circle.style.width = radius * 2 + 'px';
    circle.style.height = radius * 2 + 'px';
  }, 0)
}