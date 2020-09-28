let enemy = {
    v1: p.createVector(-200,-40),
    acc: p.createVector(0,0),
    vel: p.createVector(0,0),
    d: 0,
    angle: p.createVector(0,0),
    v2: p.createVector(0,0),

    //test: p.createVector(0,0),
    //dir: p.createVector(p.mouseX,p.mouseY),

}

function drawEnemy(){

    enemy.angle = p5.Vector.fromAngle(radians(enemy.d), 25);
    enemy.v2 = p5.Vector.sub(enemy.v1,enemy.angle)

    //let test = enemy.v2.angleBetween(player.v1);
    //let testAngle = p5.Vector.fromAngle(test, 25);
    //let v3 = p5.Vector.sub(enemy.v1,testAngle)
    let v3 = p.createVector(mouseX - enemy.v1.x, mouseY - enemy.v1.y)

    //draw enemy
    push();
    translate(w/2,h/2)
    fill(255);
    ellipse(enemy.v1.x,enemy.v1.y,10,10);
    stroke(255,0,0);
    line(enemy.v1.x,enemy.v1.y,enemy.v2.x,enemy.v2.y,);
    //line to enemy
    stroke(0,0,255,75);
    line(enemy.v1.x,enemy.v1.y,player.v1.x,player.v1.y,);
    //stroke(0,255,255,75);
    //line(enemy.v1.x,enemy.v1.y,v3.x,v3.y);
    drawArrow(enemy.v1, v3, 'yellow');
    pop();

    //move
    moveEnemy();
    turnEnemy();
}

function moveEnemy() {
    enemy.acc = p5.Vector.sub(enemy.v2,enemy.v1);
    // acc is def 3
    enemy.acc.setMag(3);

    enemy.vel.add(enemy.acc);
    // vel is def 2
    enemy.vel.limit(2);
    enemy.v1.add(enemy.vel);
}


function turnEnemy(){

    let angleBetween = enemy.v2.angleBetween(player.v1);
    if (angleBetween < 3.14 && angleBetween > 0.01) {
        //go right
        enemy.d--;
    } else if (angleBetween > -3.14 && angleBetween < -0.01){
        enemy.d++;
    }

}

function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    pop();
}
