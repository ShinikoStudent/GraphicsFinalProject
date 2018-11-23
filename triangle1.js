var positionTriangle1 = {x: 0.0, y: 0.0};
var vertex_buffer1 = gl.createBuffer();
var coord1 = gl.getAttribLocation(shaderProgram, "coordinates");
var color_buffer = gl.createBuffer ();
var color1 = gl.getAttribLocation(shaderProgram, "color");
T1main();

function T1main(){
    // Check that WebGL is possible
    if (!gl){
        return;
    }
    
    // Defining the geometry
    var vertices = [-0.5, 0.5, 0.0, 0.0, 0.5, 0.5];// Vertices for triangle
    
    var colors = [1,0,0, 1,0,0, 1, 0, 0];
    
    // Create an empty buffer and store vertex data
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);// Bind an empty array buffer to it
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);// Pass the vertices data to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);// Unbind the buffer
    
    // Create an empty buffer object and store color data
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);

    // point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord1, 2, gl.FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enableVertexAttribArray(coord1);
    
    // bind the color buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);

    // point attribute to the volor buffer object
    gl.vertexAttribPointer(color1, 3, gl.FLOAT, false,0,0) ;

    // enable the color attribute
    gl.enableVertexAttribArray(color1);
    
    drawT1();
    
}

function drawT1(){
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);
    
    //point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord1, 2, gl.FLOAT, false, 0, 0);

    //Enable the attribute
    gl.enableVertexAttribArray(coord1);
    
        // bind the color buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);

    // point attribute to the volor buffer object
    gl.vertexAttribPointer(color1, 3, gl.FLOAT, false,0,0) ;

    // enable the color attribute
    gl.enableVertexAttribArray(color1);
    
    var translation = gl.getUniformLocation(shaderProgram, 'translation');
    gl.uniform4f(translation, positionTriangle1.x, positionTriangle1.y, 0.0, 0.0);
    
    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}