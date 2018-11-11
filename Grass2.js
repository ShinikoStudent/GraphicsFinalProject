main();

function main(){
    // Prep the canvas for WebGL use
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl')
	//Grass code
    // Check that WebGL is possible
    if (!gl){
    return;
    }
    for(var i = 0.1; i > -1.1; i-=0.02){
    // Vertices for triangle
    var vertices = [-0.01+i, -0.99, 0.0+i, -1.0, 0.05+i, -0.75];

    // Create a new buffer object
    var vertex_buffer = gl.createBuffer();

    // Bind an empty array buffer to it
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // Pass the vertices data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // Vertex shader source code
    var vertCode =
    'attribute vec2 coordinates;' + 
    'void main(void) {' + ' gl_Position = vec4(coordinates,0.0, 1.0);' + '}';

    //Create a vertex shader object
    var vertShader = gl.createShader(gl.VERTEX_SHADER);

    //Attach vertex shader source code
    gl.shaderSource(vertShader, vertCode);

    //Compile the vertex shader
    gl.compileShader(vertShader);

    //Fragment shader source code
    var fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);' + '}';

    // Create fragment shader object
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    // Attach fragment shader source code
    gl.shaderSource(fragShader, fragCode);

    // Compile the fragment shader
    gl.compileShader(fragShader);

    // Create a shader program object to store combined shader program
    var shaderProgram = gl.createProgram();

    // Attach a vertex shader
    gl.attachShader(shaderProgram, vertShader); 

    // Attach a fragment shader
    gl.attachShader(shaderProgram, fragShader);

    // Link both programs
    gl.linkProgram(shaderProgram);

    // Use the combined shader program object
    gl.useProgram(shaderProgram);

    //Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    //Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    //point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

    //Enable the attribute
    gl.enableVertexAttribArray(coord);

    // COMMENT THESE OUT FOR NEW OBJECTS
    //gl.clearColor(1.0, 0.0, 0.0, 1.0); // Set clear color to black, fully opaque
    //gl.clear(gl.COLOR_BUFFER_BIT); // Clear the color buffer with specified clear color
    //gl.viewport(0,0,canvas.width,canvas.height); // Set the view port

    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
	}
	
	
	
}