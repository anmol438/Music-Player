let btn = document.getElementsByClassName("fa-solid");
// console.log((btn.classList.contains('secondary'))); // true
console.log(btn);
changeBtn = () => {
    for (let i = 0; i < btn.length; i++) {
        const ele = btn[i];
        if (ele.classList.contains("fa-circle-play") == true) {
            ele.classList.remove("fa-circle-play");
            ele.classList.add("fa-circle-pause");
        } else {
            ele.classList.remove("fa-circle-pause");
            ele.classList.add("fa-circle-play");
        }

    }

    console.log("Hello");
}

displayOptions = () => {
    let opt = document.getElementById("hidden-options");
    opt.style.display = opt.style.display == "none" ? "block" : "none";
}