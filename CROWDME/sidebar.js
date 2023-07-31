let list = document.getElementsByClassName('header__container__list');
let container = document.getElementsByClassName('header__container');
let banner = document.getElementsByClassName('banner__container');
let flag = true;
var counter = 0;
document.querySelector('.header__container__btn .header__container__btn__bar').addEventListener("click",function(){
    var w = document.documentElement.clientWidth;
    if (w+17 < 806) {
        console.log("entre");
        if (flag) {
            list[0].style.display = 'block';
            container[0].style.height = '200.7px';
            banner[0].style.marginTop = '0px';
        } else {
            list[0].style.display = 'none';
            container[0].style.height = '37.35px';
            banner[0].style.marginTop = '1.5vh';
        }
    }
    flag = !flag;
});
 
function displayWindowSize() {
    var w = document.documentElement.clientWidth;
    var w = w + 12;
    if (w > 806 && counter > 2) {
        console.log("mayor");
        list[0].style.display = 'flex';
        container[0].style.height = '85px';
    } else {
        if (counter <= 2) {
            counter++;
        }
    }
    if (w < 806) {
        console.log("menor");
        list[0].style.display = 'none';
        container[0].style.height = '37.35px';
        banner[0].style.marginTop = '1.5vh';
    }
}


window.addEventListener("resize", displayWindowSize);

displayWindowSize();