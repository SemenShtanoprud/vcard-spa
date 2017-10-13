var ex = document.getElementById('ex'),
ctx = ex.getContext('2d'),
pi = Math.PI,
pi2 = pi*2,
opts = {
	bgc: "rgba(32,32,32,.5)",
	radius: 50,
	thickness: 5
};
let w = ex.width,
h = ex.height,
circle;
class Circle{
	constructor(){
		this.reverse = false;
		this.theta = 0;
	}
	update(){
		this.theta+=.05;
		if(this.theta > pi2){
			this.theta = 0;
			this.reverse ? this.reverse = false : this.reverse = true;
		}
	};
	draw(){
		this.update();
		ctx.beginPath();
		this.reverse ?
			ctx.arc(w/2, h/2, opts.radius, 0, this.theta)
			: ctx.arc(w/2, h/2, opts.radius, this.theta, pi2);
		ctx.strokeStyle = "white";
		ctx.lineWidth = opts.thickness;
		ctx.lineCap = "round";
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