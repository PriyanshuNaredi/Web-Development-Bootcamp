// By default JQuery Selects all the elements
$("h1").css("color","red"); // $() or jquery()

console.log($("button").css("color"));
// Output -> rgb(0,0,0)

$("h1").addClass("big-title margin-50");

console.log($("h1").hasClass("margin-50"));
// Output -> true

$("h1").text("Bye.");

$("button").text("CliCK mE");

// $("button").html(<em>Hey</em>);

console.log($("img").attr("src"));
// Output -> drum.png

$("a").attr("href", "https://www.yahoo.com");

console.log($("h1").attr("class"));
// Output -> margin-50 big-title'

$("h1").click(function (e) { 
    $("h1").css("color", "purple");
});

$("button").click(function (e) { 
    $("h1").css("color", "purple");
});

/* Equivalent JavaScript for the above JQuery
for (var i = 0; i<5; i++) {
    document.querySelectorAll("button") [i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}
*/

$("input").keypress(function (e) { 
    console.log(e.key);
});

$(document).keypress(function (e) { 
    $("h1").text(e.key);
});

$(document).on("mouseover", function () {
    $("h1").css("color", "purple");
});

$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");

$("h1").append("<button>New</button>");

// Prepend and append will add button just before "Hello." text 


$("img").remove();

/* 
$("button").on("click", function () {
    $("a").hide();
}); 
*/

/*
$("button").on("click", function () {
    $("a").toggle();
});
*/
/*
$("button").on("click", function () {
    $("a").fadeToggle();
}); 
*/
/*
$("button").on("click", function () {
    $("a").slideToggle();
}); 
*/
$(".btn").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5}); // css property values are always numeric
}); 