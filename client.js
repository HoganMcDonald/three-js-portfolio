console.log('js');

const cameraChange = 5;
const cameraDist = 3000;

var mesh;


//RENDERER
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0xe7e7e7);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//CAMERA
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, cameraDist);
// var controls = new THREE.OrbitControls( camera );
// controls.addEventListener( 'change', render );
// controls.autoRotate = true;


//SCENE
var scene = new THREE.Scene();

//LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

//OBJECT
var loader = new THREE.FontLoader();
var font = loader.load('font.json', function(source) {
  var geometry = new THREE.TextGeometry('HOGAN', {
    font: source,
    size: 120,
    height: 10,
    material: 0,
    bevelThickness: 1,
    extrudeMaterial: 1
  });
  var material = new THREE.MeshLambertMaterial({color: 0x181818});
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -1000;
  mesh.position.x = -250;
  scene.add(mesh);
});


//RENDER LOOP
requestAnimationFrame(render);
function render() {
  // controls.update();

  camera.position.x = mesh.position.x + cameraDist * Math.cos( cameraChange * elapsedTime );
  camera.position.z = mesh.position.z + cameraDist * Math.sin( cameraChange * elapsedTime );
  camera.lookAt( mesh.position );

  renderer.render( scene, camera );

  requestAnimationFrame(render);
}
