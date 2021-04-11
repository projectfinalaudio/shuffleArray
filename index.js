var cars = ["Koenigsegg", " BMW", " Volvo", " Mercedes"];

function displayCars() {
    document.getElementById("cars").innerHTML 
    = cars;
};

function editFirstCar() {
    cars[0] = "Nissan GTR";
    document.getElementById("cars").innerHTML 
    = cars;
};

function editSecondCar() {
    cars[1] = "McLaren";
    document.getElementById("cars").innerHTML 
    = cars;
};

function editThirdCar() {
    cars[2] = "Toyota";
    document.getElementById("cars").innerHTML 
    = cars;
};

function editFourthCar() {
    cars[3] = "Lamborghini";
    document.getElementById("cars").innerHTML 
    = cars;
};

displayCars();

function hideCars() {
    var visible = document.querySelectorAll("#cars");
    var visible_button = document.querySelectorAll("#button-container-1");


    for (invisible=0; invisible<visible.length; invisible++) {
        visible[invisible].style.display = "none";
    };
    for (invisible=0; invisible<visible.length; invisible++) {
        visible_button[invisible].style.display = "none";
    };   
};

function showCars() {
    var visible = document.querySelectorAll("#cars");
    var visible_button = document.querySelectorAll("#button-container-1");


    for (invisible=0; invisible<visible.length; invisible++) {
        visible[invisible].style.display = "block";
    };
    for (invisible=0; invisible<visible.length; invisible++) {
        visible_button[invisible].style.display = "block";
    };   
};




