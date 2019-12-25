<template>
    <div>test 跨域{{num}}
    </div>
</template>
<script>
export default {
    name: "ky-test",
    data() {
        return {
            num: null
        }
    },
    methods: {
        // @flow
        getData(num: number){
            this.num = num * num;
        }
    },
    mounted() {
        this.getData("5");
    }
}
</script>

<style lang="scss">
iframe{
    width: 100%;
    height: 1000px;
}
</style>