uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vColor;
float PI = 3.1415926535897932384626433832795;

void main() {
    // Interpolate between green (0, 1, 0) and red (1, 0, 0) based on the horizontal uv coordinate
    //    gl_FragColor = vec4(mix(vec3(0, 1, 0), vec3(1, 0, 0), vUv.x), 1.0);
    gl_FragColor = vec4(vUv, 0., 1.);
    gl_FragColor = vec4(vColor, 1.);
}