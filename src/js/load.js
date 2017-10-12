var ex = document.getElementById('ex'),
ctx = ex.getContext('2d'),
pi = Math.PI,
pi2 = pi*2,
opts = {
	bgc: "rgba(32,32,32,1)",
	radius: 100,
	thickness: 5
};
let w = ex.width = window.innerWidth,
h = ex.height = window.innerHeight,
circle;
class Circle{
	constructor(){
		this.reverse = false;
		this.theta = 0;
	}
	update(){
		this.theta+=.9;
	};
	draw(){
		this.update();
		console.log(this.theta);
		ctx.beginPath();
		ctx.arc(w/2, h/2, opts.radius, 0, this.theta);
		ctx.strokeStyle = "red";
		ctx.lineWidth = opts.thickness;
		ctx.stroke();
	};
}
function setup(){
	circle = new Circle();
	requestAnimationFrame(loop);
};
function loop(){
	ctx.fillStyle = opts.bgc;
	ctx.fillRect(0,0,w,h);
	circle.draw()
	requestAnimationFrame(loop);
	
};
setup();