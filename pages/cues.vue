<template>
    <div class="container">
        <scene5></scene5>
        <canvas 
            ref="canvas"
            @click="log"
            v-show="false"
            ></canvas>
        <controls @keyup="keyup"></controls>
    </div>

</template>

<script>
import * as THREE from 'three'
import controls from '~/components/Controls'
import scene5 from '~/components/Scene5'


let width = 1920
let height = 1080

export default {
    components: { controls, scene5 },
    data() {
        return {            
            renderer: null,
            camera: null,
            scene: null,
            road: null,
            roadLines: null,
            linesMoving: true,
            linePosition: 0,
            speed: 1.5,
            
        }
    },
mounted () {
    this.initThree();
  },
  methods: {
    initThree() {
        this.scene = new THREE.Scene();
        // this.camera = new THREE.OrthographicCamera( width / -2, width / 2, height / -2, height / 2, 0.01, 1000 );
        this.camera = new THREE.PerspectiveCamera(120, 1920 / 1080, 3, 1000)
        this.camera.lookAt(0, 0.1, 0)
    
        this.renderer = new THREE.WebGLRenderer( { canvas: this.$refs['canvas'], alpha: true, antialias: true } );
        this.renderer.setSize( 1920, 1080 );
    
        let roadGeometry = new THREE.PlaneGeometry( 50, 1000, 100)
        let roadMaterial = new THREE.MeshBasicMaterial( { color: 0x90918b, side: THREE.DoubleSide} )
        let road = new THREE.Mesh(roadGeometry, roadMaterial)
        // this.scene.add(road)
        this.roadLines = []
        for(let i = 0; i < 4; i++) {
            let geometry = new THREE.PlaneGeometry( 1, 10, 32 )
            let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} )
            let line = new THREE.Mesh( geometry, material )
            line.position.y = i * 40
            this.roadLines.push(line)
        }
        this.roadLines.forEach(line => this.scene.add(line))

    
        this.camera.position.z = 5;
        this.animate()
    },

    animate() {
        if(this.linesMoving){
            this.camera.position.x += (Math.random() - 0.5) / 10
            this.camera.position.x = Math.max(this.camera.position.x, -0.2)
            this.camera.position.x = Math.min(this.camera.position.x, 0.2)
            this.speed += (Math.random() - 0.5) / 100
            this.speed = Math.max(this.speed, 1.5)
            this.speed = Math.min(this.speed, 5.0)
            // this.linePosition += (Math.random() - 0.5) / 100
            this.roadLines.map(line => {
                // line.position.z -= 0.1
                line.position.y -= this.speed

                if(line.position.y > 140) {
                    line.position.y = -20
                } else if(line.position.y < -20) {
                    line.position.y = 140
                }

                line.position.x += this.linePosition
            })
        }
        // this.camera.position.x += Math.random - 0.5
        this.renderer.render( this.scene, this.camera );
        requestAnimationFrame( this.animate );
    },

    log() {
        this.roadLines.forEach(line => console.log(line.position))
    }, 

    keyup(e) {
        switch(e.code) {
            case 'KeyL':
                console.log("L")
                this.linesMoving = !this.linesMoving
            default:
                console.log(e.code)
        }
    }
  }}
</script>