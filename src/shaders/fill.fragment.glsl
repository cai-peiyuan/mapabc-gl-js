#pragma mapabc: define highp vec4 color
#pragma mapabc: define lowp float opacity

void main() {
    #pragma mapabc: initialize highp vec4 color
    #pragma mapabc: initialize lowp float opacity

    gl_FragColor = color * opacity;

#ifdef OVERDRAW_INSPECTOR
    gl_FragColor = vec4(1.0);
#endif
}
