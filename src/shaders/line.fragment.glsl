#pragma mapabc: define highp vec4 color
#pragma mapabc: define lowp float blur
#pragma mapabc: define lowp float opacity

varying vec2 v_width2;
varying vec2 v_normal;
varying float v_gamma_scale;

void main() {
    #pragma mapabc: initialize highp vec4 color
    #pragma mapabc: initialize lowp float blur
    #pragma mapabc: initialize lowp float opacity

    // Calculate the distance of the pixel from the line in pixels.
    float dist = length(v_normal) * v_width2.s;

    // Calculate the antialiasing fade factor. This is either when fading in
    // the line in case of an offset line (v_width2.t) or when fading out
    // (v_width2.s)
    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;
    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);

    gl_FragColor = color * (alpha * opacity);

#ifdef OVERDRAW_INSPECTOR
    gl_FragColor = vec4(1.0);
#endif
}
