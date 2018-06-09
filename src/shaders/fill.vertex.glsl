attribute vec2 a_pos;

uniform mat4 u_matrix;

#pragma mapabc: define highp vec4 color
#pragma mapabc: define lowp float opacity

void main() {
    #pragma mapabc: initialize highp vec4 color
    #pragma mapabc: initialize lowp float opacity

    gl_Position = u_matrix * vec4(a_pos, 0, 1);
}
