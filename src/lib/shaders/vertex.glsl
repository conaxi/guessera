varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
	vertexUV = uv;
	vertexNormal = normalize(normalMatrix * normal); // fix the blown-out side issue
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);	
}
