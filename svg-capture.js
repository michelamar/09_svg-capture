var svg = document.getElementById("svjesus");

var b1 = document.getElementById("clear");

var clear_screen = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var make_circle = function(e){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "30");
    circle.setAttribute("fill", "black");
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
    circle.addEventListener("click", change_color, true);
};

var change_color = function(e){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.setAttribute("fill", color);
    e.stopPropagation();
    circle.addEventListener("click", delete_circle, true);
}

var delete_circle = function(e){
    svg.removeChild(this);
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", Math.random()*500);
    circle.setAttribute("cy", Math.random()*500);
    circle.setAttribute("r", "30");
    circle.setAttribute("fill", "black");
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}



b1.addEventListener("click", clear_screen);
svg.addEventListener("click", make_circle);
