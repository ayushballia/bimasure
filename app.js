const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(()=>{text.textContent="Trusted"}, 0);
    setTimeout(()=>{text.textContent="Transparent"}, 4000);
    setTimeout(()=>{text.textContent="Best Quality"}, 8000);
}

textLoad();
setInterval(textLoad, 12000);