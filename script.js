const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel (){
    idx++;
    if(idx > vd.length - 1){
        idx = 0;
    }

    vds.style.transform = `translateX(${-idx * 500}px)`
}

setInterval(carrossel, 1800);