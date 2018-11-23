/* 
* Title:        WebGL Final Project Lab
* Authors:      WebGL Team
* Description:  Set up triangle 1 with their draw functions
*
*/

var triangle2Pos = {x: 0.0, y: 0.0};// The current position of triangle1

// Create a vertex and color buffer
var vertex_buffer2 = gl.createBuffer();
var coord2 = gl.getAttribLocation(shaderProgram, "coordinates");
var color_buffer2 = gl.createBuffer ();
var color2 = gl.getAttribLocation(shaderProgram, "color");

T2main();

function T2main(){
    // Check that WebGL is possible
    if (!gl){
        return;
    }

    // Defining the geometry
    var vertices = [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5];// Vertices for triangle
    var colors = [0,1,0, 0,1,0, 0, 1, 0];// Color at each vertex [R,G,B, R,G,B, R,G,B]
    
    // Bind vertex buffers 
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);// Bind an empty array buffer to it
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);// Pass the vertices data to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);// Unbind the buffer

    // Create an empty buffer object and store color data
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);

    // point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord2, 2, gl.FLOAT, false, 0, 0);

    //Enable the attribute
    gl.enableVertexAttribArray(coord2);

    // bind the color buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer2);

    // point attribute to the volor buffer object
    gl.vertexAttribPointer(color2, 3, gl.FLOAT, false,0,0) ;

    // enable the color attribute
    gl.enableVertexAttribArray(color2);
    
    drawT2();
    
}

function drawT2(){
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);
    
    // point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord2, 2, gl.FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enableVertexAttribArray(coord2);
    
    // bind the color buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer2);

    // point attribute to the volor buffer object
    gl.vertexAttribPointer(color2, 3, gl.FLOAT, false,0,0) ;

    // enable the color attribute
    gl.enableVertexAttribArray(color2);
    
    var translation = gl.getUniformLocation(shaderProgram, 'translation');
    gl.uniform4f(translation, triangle2Pos.x, triangle2Pos.y, 0.0, 0.0);
    
    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}