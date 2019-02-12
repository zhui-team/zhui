export default function getRotate(deg, precent) {
  let sinx = Math.sin(2 * Math.PI / 360 * deg);
  let sinz = precent * sinx / (101 - precent);
  let rotate = -Math.asin(sinz) / (Math.PI / 180);

  return rotate;
}