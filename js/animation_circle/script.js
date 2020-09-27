function showCircle(cx, cy, radius) {
  const circle = document.getElementById('circle');
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.left = cx + 'px';
  circle.style.top = cy + 'px';

  return new Promise(resolve => {
    setTimeout(() => {
      circle.style.width = radius * 2 + 'px';
      circle.style.height = radius * 2 + 'px';

      circle.addEventListener('transitionend', function handler() {
        circle.removeEventListener('transitionend', handler);
        resolve(circle);
      });
    }, 0)
  })
}

const button = document.getElementById('button');
button.onclick = function () {
  showCircle(250, 250, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello World");
  });
};