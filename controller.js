/* 
* Title:        WebGL Final Project Lab
* Authors:      WebGL Team
* Description:  Set up triangle 1 with their draw functions
*
*/
window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    switch(e.key) {
        case 'ArrowLeft':// left key pressed
            triangle1Pos.x -= .01;
            redraw();
            break;
        case 'ArrowUp':// up key pressed
            triangle1Pos.y +=.01;
            redraw();
            break;
        case 'ArrowRight':// right key pressed
            triangle1Pos.x += .01;
            redraw();
            break;
        case 'ArrowDown':// down key pressed
            triangle1Pos.y -= .01;
            redraw();
            break;  
    }   
}   

function redraw(){
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    //updateDrawingT1();
    drawT1();
    drawT2();
    
}