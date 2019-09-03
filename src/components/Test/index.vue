<template>
    <div @click="detail='10';hello()">123</div>
</template>

<script>
export default {
    name : 'Test',
    data(){
        return {
            detail:'<span>Hello</span>'
        }
    },
    methods:{
        hello(){
            this.detail = '1'
            alert(this.detail)
        }
    }
}
</script>

<style>

</style>