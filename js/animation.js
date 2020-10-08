let path = document.querySelector(".line-left path");
let path2 = document.querySelector(".line-bottom path");
let path3 = document.querySelector(".line-right path");


let length = path.getTotalLength();
let length2 = path2.getTotalLength();
let length3 = path3.getTotalLength();

path.style.transition = path.style.WebkitTransition = "none";
path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;
path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition =
  "stroke-dashoffset 1.5s ease-in-out";
path.style.strokeDashoffset = "0";

path2.style.transition = path2.style.WebkitTransition = "none";
path2.style.strokeDasharray = length2 + " " + length2;
path2.style.strokeDashoffset = length2;
path2.getBoundingClientRect();
path2.style.transition = path2.style.WebkitTransition =
  "stroke-dashoffset 1.5s ease-in-out";
path2.style.strokeDashoffset = "0";


path3.style.transition = path3.style.WebkitTransition = "none";
path3.style.strokeDasharray = length3 + " " + length3;
path3.style.strokeDashoffset = length3;
path3.getBoundingClientRect();
path3.style.transition = path3.style.WebkitTransition =
  "stroke-dashoffset 1.5s ease-in-out";
path3.style.strokeDashoffset = "0";