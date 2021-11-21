

// Titre principale et contours
document.getElementById('main_title').style.setProperty("animation", "dash 15s linear forwards");
document.getElementById('title_main_path').style.setProperty("animation", "dash 4s linear forwards");

setTimeout(function() {
    // Square
    document.getElementById('title_main_square').style.setProperty("animation", "dash 15s linear forwards infinite");
    document.getElementById('title_main_square').style.setProperty("stroke-dasharray", "10");
    let opacity = 0
    function MyFadeFunction() {
        if (opacity<1) {
            opacity += .1;
            setTimeout(function(){MyFadeFunction()},200);
        }
        document.getElementById('title_main_square').style.opacity = opacity;
    }
    MyFadeFunction()
}, 3300)

setTimeout(function() {
    //Triangle
    document.getElementById('title_main_triangle').style.setProperty("animation", "dash 15s linear forwards infinite");
    document.getElementById('title_main_triangle').style.setProperty("stroke-dasharray", "20");
    let opacity = 0
    function MyFadeFunction() {
        if (opacity<1) {
            opacity += .1;
            setTimeout(function(){MyFadeFunction()},200);
        }
        document.getElementById('title_main_triangle').style.opacity = opacity;
    }
    MyFadeFunction()
}, 3700)

setTimeout(function() {
    //Losange
    document.getElementById('title_main_losange').style.setProperty("animation", "dash 15s linear forwards infinite");
    document.getElementById('title_main_losange').style.setProperty("stroke-dasharray", "40");
    let opacity = 0
    function MyFadeFunction() {
        if (opacity<1) {
            opacity += .1;
            setTimeout(function(){MyFadeFunction()},200);
        }
        document.getElementById('title_main_losange').style.opacity = opacity;
    }
    MyFadeFunction()
}, 4100)


