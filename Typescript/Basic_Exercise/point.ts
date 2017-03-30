class	Point	{
				constructor(public	x:	number,	public	y:	number)	{
				}
				add(point:	Point)	{
								return	new	Point(this.x	+	point.x,	this.y	+	point.y);
				}
}

class	Point3D	extends	Point	{
				z:	number;
				constructor(x:	number,	y:	number,	z:	number)	{
								super(x,	y);
								this.z	=	z;
				}
				add(point:	Point3D)	{
								var	point2D	=	super.add(point);
								return	new	Point3D(point2D.x,	point2D.y,	this.z	+	point.z);
				}
}

var	p1	=	new	Point(0,	10);
var	p2	=	new	Point(10,	20);
var	p3	=	p1.add(p2);	//	{x:10,y:30}

console.log(p1);
console.log(p2);
console.log(p3);
