var positionTriangle2 = {x: 0.0, y: 0.0};
var vertex_buffer2 = gl.createBuffer();
var coord2 = gl.getAttribLocation(shaderProgram, "coordinates");
T2main();

function T2main(){
    // Check that WebGL is possible
    if (!gl){
        return;
    }

    // Defining the geometry
    var vertices = [-0.5, -0.5, 0.0, 0.0, 0.5, -0.5];
    
    // Bind buffers 
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);// Bind an empty array buffer to it
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);// Pass the vertices data to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);// Unbind the buffer

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);

    // point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord2, 2, gl.FLOAT, false, 0, 0);

    //Enable the attribute
    gl.enableVertexAttribArray(coord2);

    drawT2();
    
}

function drawT2(){
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);
    
    // point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord2, 2, gl.FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enableVertexAttribArray(coord2);
    
    var translation = gl.getUniformLocation(shaderProgram, 'translation');
    gl.uniform4f(translation, positionTriangle2.x, positionTriangle2.y, 0.0, 0.0);
    
    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}