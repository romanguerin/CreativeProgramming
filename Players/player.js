let player = {
    v1: p.createVector(50,50),
    d: 0,
    angle: p.createVector(0,0),
    v2: p.createVector(0,0),
    l: false, r: false,
    acc: p.createVector(0,0),
    vel: p.createVector(0,0),
    lRad: 0, rRad: 0,
    lBack: 0, rBack: 0
}

function setPlayer(){

}

function drawPlayer(){
    player.angle = p5.Vector.fromAngle(radians(player.d), 15);
    player.v2 = p5.Vector.sub(player.v1,player.angle)
    //console.log(player.v1.fromAngle(radians(player.d), 15));
    //make corners
    player.lRad = player.d -200;
    player.rRad = player.d -160;

    //draw player
    push();
    translate(w/2,h/2)
    fill(255);
    ellipse(player.v1.x,player.v1.y,10,10);
    stroke(144, 238, 117);
    //draw radar arc
    noFill();
    arc(player.v1.x, player.v1.y, 80, 80, radians(player.lRad), radians(player.rRad), PIE );
    console.log(player.d);
    //target
    stroke(255,0,0);
    line(player.v1.x,player.v1.y,player.v2.x,player.v2.y,);
    pop();
    //turn player
    turnPlayer();
    //movePlayer();

}

function movePlayer(){
     //let mouse = p.createVector(mouseX,mouseY);
     player.acc = p5.Vector.sub(player.v2,player.v1);
     player.acc.setMag(0.1);

     player.vel.add(player.acc);
     player.vel.limit(1);
     player.v1.add(player.vel);

     //player.v1.mag(0.01);
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        player.l = true;
    }
    if (keyCode === RIGHT_ARROW) {
        player.r = true;
    }
    return false;
}

function keyReleased(){
    player.r = false;
    player.l = false;
}

function turnPlayer(){
    if (player.l === true){
        player.d--;
    } else if (player.r === true){
        player.d++;
    }
}
