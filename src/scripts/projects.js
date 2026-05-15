var accordions = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {

    this.classList.toggle("active");
    //this.attributes.add("aria-expanded");
    var panelToAnimate = this.nextElementSibling;
    if (panelToAnimate.style.maxHeight) { panelToAnimate.style.maxHeight = null; } 
    else { panelToAnimate.style.maxHeight = panelToAnimate.scrollHeight + "px"; }
  });
};
