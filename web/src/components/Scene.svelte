<script>
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { calcPosFromCalcLonRad } from '../utils';

	export let pos, radius;

	// SETUP
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

	// RENDERER
	const renderer = new THREE.WebGL1Renderer({
		antialias: true,
		alpha: true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(innerWidth, innerHeight);
	document.body.appendChild(renderer.domElement);

	// CONTROLS
	const controls = new OrbitControls(camera, renderer.domElement);

	// EARTH
	const globe = new THREE.Mesh(
		new THREE.SphereGeometry(radius, 30, 30),
		new THREE.MeshPhongMaterial({
			map: THREE.ImageUtils.loadTexture('earth.jpg'),
			bumpMap: THREE.ImageUtils.loadTexture('earthbump.jpg'),
			bumpScale: 0.06,
			specularMap: THREE.ImageUtils.loadTexture('earthspec.jpg'),
			specular: new THREE.Color('grey')
		})
	);
	scene.add(globe);

	// MARKER
	const {x, y, z}  = calcPosFromCalcLonRad(pos.lat, pos.lon)
	const marker = new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.01, 20, 20),
		new THREE.MeshBasicMaterial({ color: 0xff0000 })
	);
	marker.position.set(x, y, z);
	scene.add(marker);

	// LIGHTS
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
	scene.add(ambientLight);

	const pointLight = new THREE.PointLight(0xffffff, 1);
	pointLight.position.set(5, 3, 5);
	scene.add(pointLight);

	// CAMERA
	camera.position.z = 2;

	// RENDER
	const animate = () => {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
		//globe.rotation.y += 0.01;
		controls.update();
	};

	animate();
</script>

<canvas />