class Block3 
{
    constructor(x, y, width, height) 
    {
        var options =
        {
            isStatic: true
        }
        this.block = Bodies.rectangle(x, y, width, height, options)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.block);
    }
    display()
    {
        var pos = this.block.position;
        fill("aqua");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
};