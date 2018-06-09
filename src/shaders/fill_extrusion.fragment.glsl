varying vec4 v_color;
#pragma mapabc: define lowp float base
#pragma mapabc: define lowp float height
#pragma mapabc: define highp vec4 color

void main() {
    #pragma mapabc: initialize lowp float base
    #pragma mapabc: initialize lowp float height
    #pragma mapabc: initialize highp vec4 color

    gl_FragColor = v_color;

#ifdef OVERDRAW_INSPECTOR
    gl_FragColor = vec4(1.0);
#endif
}
