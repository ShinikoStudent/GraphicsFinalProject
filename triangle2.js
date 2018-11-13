var positionTriangle2 = {x: 0.0, y: 0.0};
var vertex_buffer2;
T2main();

function T2main(){
    // Prep the canvas for WebGL use
    //const canvas = document.getElementById('canvas');
    //const gl = canvas.getContext('webgl')

    // Check that WebGL is possible
    if (!gl){
    return;
    }

    // Vertices for triangle
    var vertices = [-0.5, -0.5, 0.0, 0.0, 0.5, -0.5];
    
    // Create a new buffer object
    vertex_buffer2 = gl.createBuffer();

    // Bind an empty array buffer to it
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);

    // Pass the vertices data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    /* == Define Shaders  == */
    // Vertex shader source code
    var vertCode =
        'attribute vec4 coordinates;' + 
        'uniform vec4 translation;'+
        'void main(void) {' +
        '  gl_Position = coordinates + translation;' +
        '}';
    var vertShader = gl.createShader(gl.VERTEX_SHADER);// Create a vertex shader object
    gl.shaderSource(vertShader, vertCode);// Attach vertex shader source code
    gl.compileShader(vertShader);//Compile the vertex shader

    //Fragment shader source code
    var fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' + '}';
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);// Create fragment shader object
    gl.shaderSource(fragShader, fragCode);// Attach fragment shader source code
    gl.compileShader(fragShader);// Compile the fragment shader

    /* == Create a shader program object to store combined shader program == */
    // var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);// Attach a vertex shader
    gl.attachShader(shaderProgram, fragShader);// Attach a fragment shader

    // Link both programs
    gl.linkProgram(shaderProgram);

    // Use the combined shader program object
    gl.useProgram(shaderProgram);

    //Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);

    //Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    //point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

    //Enable the attribute
    gl.enableVertexAttribArray(coord);

    draw2();
    
}

function draw2(){
    //var translation = gl.getUniformLocation(shaderProgram, 'translation');
    //gl.uniform4f(translation, positionTriangle2.x, positionTriangle2.y, 0.0, 0.0);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer2);
    
    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //gl.bindBuffer(gl.ARRAY_BUFFER, null);
}