var positionTriangle1 = {x: 0.0, y: 0.0};
var vertex_buffer1;
T1main();

function T1main(){
    // Prep the canvas for WebGL use
    //var canvas = document.getElementById('canvas');
    //var gl = canvas.getContext('webgl')

    // Check that WebGL is possible
    if (!gl){
    return;
    }
    
    /* == Defining and storing the geometry == */
    var vertices = [-0.5, 0.5, 0.0, 0.0, 0.5, 0.5];// Vertices for triangle

    /* == Bind buffers  == */
    var vertex_buffer1 = gl.createBuffer();// Create a new buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);// Bind an empty array buffer to it
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);// Pass the vertices data to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);// Unbind the buffer
    
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

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);

    //Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    //point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

    //Enable the attribute
    gl.enableVertexAttribArray(coord);
    
    draw();
    
}

function updateDrawing(){
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);
    var translation = gl.getUniformLocation(shaderProgram, 'translation');
    gl.uniform4f(translation, positionTriangle1.x, positionTriangle1.y, 0.0, 0.0);
    //gl.bindBuffer(gl.ARRAY_BUFFER, null);
    draw();
}

function draw(){
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer1);
    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //gl.bindBuffer(gl.ARRAY_BUFFER, null);
}