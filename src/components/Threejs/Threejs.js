import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import discTexture from '../../images/1694932621902.jpeg';


const ConvexGeometryExample = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let group, camera, scene, renderer;

        const init = () => {
            scene = new THREE.Scene();

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setAnimationLoop(animate);
            mountRef.current.appendChild(renderer.domElement);
            renderer.setSize(250, 150);

            // camera
            camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.set(15, 30, 30);
            scene.add(camera);

            // controls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.minDistance = 35;
            controls.maxDistance = 80;
            controls.maxPolarAngle = Math.PI / 2;

            // point light
            const light = new THREE.PointLight(0xffffff, 3, 0, 0);
            camera.add(light);

            // textures
            const loader = new THREE.TextureLoader();
            const texture = loader.load(discTexture);
            texture.colorSpace = THREE.SRGBColorSpace;

            group = new THREE.Group();
            scene.add(group);

            // points
            let dodecahedronGeometry = new THREE.DodecahedronGeometry(10);

            dodecahedronGeometry.deleteAttribute('normal');
            dodecahedronGeometry.deleteAttribute('uv');

            dodecahedronGeometry = BufferGeometryUtils.mergeVertices(dodecahedronGeometry);

            const vertices = [];
            const positionAttribute = dodecahedronGeometry.getAttribute('position');

            for (let i = 0; i < positionAttribute.count; i++) {
                const vertex = new THREE.Vector3();
                vertex.fromBufferAttribute(positionAttribute, i);
                vertices.push(vertex);
            }

            const pointsMaterial = new THREE.PointsMaterial({
                color: 0x0080ff,
                map: texture,
                size: 1,
                alphaTest: 0.5,
                transparent: true,
            });

            const pointsGeometry = new THREE.BufferGeometry().setFromPoints(vertices);

            const points = new THREE.Points(pointsGeometry, pointsMaterial);
            group.add(points);

            // convex hull
            const meshMaterial = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                opacity: 0.5,
                side: THREE.DoubleSide,
                transparent: true,
            });

            const meshGeometry = new ConvexGeometry(vertices);

            const mesh = new THREE.Mesh(meshGeometry, meshMaterial);
            group.add(mesh);
            mesh.scale.set(1,1);

            window.addEventListener('resize', onWindowResize);
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            group.rotation.y += 0.003;
            group.rotation.x += 0.003;
            renderer.render(scene, camera);
        };

        init();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ConvexGeometryExample;