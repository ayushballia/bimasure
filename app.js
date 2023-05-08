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

const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll('.menu-item');
// main toggle
menuBtn.addEventListener("click", () => {
    toggle();
});

// toggle on item click it open
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        if (menuBtn.classList.contains('open')) {
            toggle();
        }
    });
});

function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
};

function readmore(){
    var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more..."; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}