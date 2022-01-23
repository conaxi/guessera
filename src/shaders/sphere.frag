uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() 
{
    //atmospheric effect
    float intensity = 1.05 - dot(vertexNormal, vec3(0, 0, 1));
    vec3 atmosphere = vec3(0.3, 0.6, 1) * pow(intensity, 2.1);

    // applying effect to the texture
    gl_FragColor = vec4(atmosphere + texture2D(globeTexture,vertexUV).xyz, 1);
}