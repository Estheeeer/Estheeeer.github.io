// document.onreadystatechange = function() {
//             if (document.readyState !== "complete") {
//                 document.querySelector(
//                   "body").style.visibility = "hidden";
//                 document.querySelector(
//                   "#container").style.visibility = "visible";
//             } else {
//                 document.querySelector(
//                   "#container").style.display = "none";
//                 document.querySelector(
//                   "body").style.visibility = "visible";
//             }
// };
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}