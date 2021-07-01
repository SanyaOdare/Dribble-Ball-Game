let ball = document.getElementById('float-circle');

// function named up() that will raise the bottom
function up() {
  ball.style.bottom = '250px';
};

//function named down() that will lower the bottom position of the ball
function down() {
ball.style.bottom = '50px';
}
document.body.addEventListener("keydown", up);
document.body.addEventListener("keyup", down);