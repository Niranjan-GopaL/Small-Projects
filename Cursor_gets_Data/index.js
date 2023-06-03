const canvas = document.querySelector('canvas');

canvas.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;
  
  //[x,y,[r,g,b,a]]
  console.log([x,y,getPixelColor(x,y)]);
});

function getPixelColor(x, y) {
  const ctx = canvas.getContext('2d');
  const pixelData = ctx.getImageData(x, y, 1, 1).data;
  // array [r,g,b,a]
  return pixelData;
}