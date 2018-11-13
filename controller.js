window.addEventListener("keydown", moveSomething, false);
//setInterval(redraw(), 500);

function moveSomething(e) {
    switch(e.key) {
        case 'ArrowLeft':// left key pressed
            positionTriangle1.x -= .01;
            redraw();
            break;
        case 'ArrowUp':// up key pressed
            positionTriangle1.y +=.01;
            redraw();
            break;
        case 'ArrowRight':// right key pressed
            positionTriangle1.x += .01;
            redraw();
            break;
        case 'ArrowDown':// down key pressed
            positionTriangle1.y -= .01;
            redraw();
            break;  
    }   
}   

function redraw(){
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    updateDrawing();
    draw2();
    //T2main(); // TODO: Needs to not call main!!
}