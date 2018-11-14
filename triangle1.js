var positionTriangle1 = {x: 0.0, y: 0.0};
var vertex_buffer1 = gl.createBuffer();
var coord1 = gl.getAttribLocation(shaderProgram, "coordinates");
T1main();

function T1main(){
    // Check that WebGL is possible
    if (!gl){
        return;
    }
    
    // Defining the geometry
    var vertices = [-0.5, 0.5, 0.0, 0.0, 0.5, 0.5];// Vertices for triangle

    // Bind buffers
    // vertex_buffer1 = gl.createBuffer();// Create a new buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);// Bind an empty array buffer to it
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);// Pass the vertices data to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);// Unbind the buffer
    
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);

    // point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord1, 2, gl.FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enableVertexAttribArray(coord1);
    
    drawT1();
    
}

function drawT1(){
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);
    
    //point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord1, 2, gl.FLOAT, false, 0, 0);

    //Enable the attribute
    gl.enableVertexAttribArray(coord1);
    
    var translation = gl.getUniformLocation(shaderProgram, 'translation');
    gl.uniform4f(translation, positionTriangle1.x, positionTriangle1.y, 0.0, 0.0);
    
    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}