const mobile_nav = document.getElementById("mobile_nav");

const normal_nav = document.getElementById("normal_nav");

if (screen.width < 400) {
  normal_nav.remove();
} else {
  mobile_nav.remove();
}
