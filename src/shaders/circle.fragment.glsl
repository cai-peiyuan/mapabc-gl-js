#pragma mapabc: define highp vec4 color
#pragma mapabc: define mediump float radius
#pragma mapabc: define lowp float blur
#pragma mapabc: define lowp float opacity
#pragma mapabc: define highp vec4 stroke_color
#pragma mapabc: define mediump float stroke_width
#pragma mapabc: define lowp float stroke_opacity

varying vec3 v_data;

void main() {
    #pragma mapabc: initialize highp vec4 color
    #pragma mapabc: initialize mediump float radius
    #pragma mapabc: initialize lowp float blur
    #pragma mapabc: initialize lowp float opacity
    #pragma mapabc: initialize highp vec4 stroke_color
    #pragma mapabc: initialize mediump float stroke_width
    #pragma mapabc: initialize lowp float stroke_opacity

    vec2 extrude = v_data.xy;
    float extrude_length = length(extrude);

    lowp float antialiasblur = v_data.z;
    float antialiased_blur = -max(blur, antialiasblur);

    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);

    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(
        antialiased_blur,
        0.0,
        extrude_length - radius / (radius + stroke_width)
    );

    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);

#ifdef OVERDRAW_INSPECTOR
    gl_FragColor = vec4(1.0);
#endif
}
