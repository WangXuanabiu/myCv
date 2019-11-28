<template>
	<div>
        <button @click="goAnimation">动画</button>
        <button @click="stop">stop</button>
        <div class="box" ref="box">
      
        </div>
	</div>
</template>
<script>
//import HelloWorld from './components/HelloWorld.vue'


export default {
    name: 'animation-test',
    data() {
        return {
            myTimer: null,
            step: 1
        }
    },
    methods:{
        goAnimation() {
            if(this.myTimer){
                clearInterval(this.myTimer)
            }
            this.myTimer = setInterval(() => {
                this.step += 0.01;
                this.$refs.box.style.left = this.$refs.box.offsetLeft + 1 + "px";
                this.$refs.box.style.top = this.$refs.box.offsetTop + this.step*this.step + "px";

            },20)            
        },
        stop() {
            clearInterval(this.myTimer);
            this.$refs.box.style.top = 0;
            this.$refs.box.style.left = 0;
            this.step = 1;
        }
    }
}
</script>

<style>
.box {
    width: 10px;
    height: 10px;
    background-color: pink;
    position: absolute;
    left: 0;
}
</style>