<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	// shaders, ?raw loads them as strings : https://vitejs.dev/guide/features.html#static-assets
	import vertexShader from '$lib/shaders/vertex.glsl?raw';
	import fragmentShader from '$lib/shaders/fragment.glsl?raw';

	// rotating animation
	let spin = 0;
	SC.onFrame(() => {
		spin += 0.0;
	});

	// initalizing both textures
	let background, texture;
	// loading them on mount to avoid SSR issues
	onMount(() => {
		new THREE.TextureLoader().load('../../../static/earth.jpg', (loaded) => {
			texture = loaded;
		});
		new THREE.TextureLoader().load('../../../static/stars.jpg', (loaded) => {
			background = loaded;
		});
	});
</script>

<div class="globe">
	<!-- {background} or alpha={true} -->
	<SC.Canvas antialias alpha={true}>
		<SC.Mesh
			geometry={new THREE.SphereGeometry(5, 50, 50)}
			material={new THREE.ShaderMaterial({
				vertexShader,
				fragmentShader,
				uniforms: {
					globeTexture: {
						value: texture
					}
				}
			})}
			rotation={[0, spin, 0]}
		/>
		<SC.PerspectiveCamera position={[1, 1, 5 * 4 + 10]} />
		<SC.AmbientLight intensity={0.6} />
		<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
	</SC.Canvas>
</div>

<style>
	.globe {
		position: absolute !important;
		z-index: 1 !important;
		margin-left: 50% !important;
		width: 100% !important;
		height: 100% !important;
		background-color: #c6c4f7 !important;

		overflow: hidden;
	}

	@media only screen and (max-width: 768px) {
		.globe {
			margin-left: 0 !important;
		}
	}
</style>
