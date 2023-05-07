const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(()=>{text.textContent="Trusted"}, 0);
    setTimeout(()=>{text.textContent="Transparent"}, 4000);
    setTimeout(()=>{text.textContent="Best Quality"}, 8000);
}

textLoad();
setInterval(textLoad, 12000);


function dropdownClick() {
    document.getElementById("myDropdown").classList.toggle("show");

    window.onclick = function(event) {
        if(!event.target.matches('.dropbtn')){
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i ;
            for(i = 0; i<dropdowns.length; i++){
                var opendropdown = dropdowns[i];
                if (opendropdown.classList.contains("show")) {
                    opendropdown.classList.remove("show");
                }
            }
        }
    }
}

$(document).ready(function(){
    $(".dropdown").mouseenter(function(){
        $(".dropdown-content").addClass("show")
        console.log("mouse enter")
    })
    $(".dropdown").mouseleave(function(){
        $(".dropdown-content").removeClass("show")
        console.log("mouse enter")
    })
})