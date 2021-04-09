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

function randomiseCollection() {
  for (let i = cars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cars[i];
      cars[i] = cars[j];
      cars[j] = temp;
  }
  return cars;

};



displayCars();