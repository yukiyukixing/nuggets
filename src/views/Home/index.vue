<template>
    <div class="content">
        <Header />
        <TabBar /> 
    </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import Header from '@/components/Header'


export default {
    name : 'Home',
    components : {
        TabBar,
        Header
    }
}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 812px;
        /* background: url(../../../public/back.png) center center no-repeat;
        background-size: 100% 812px;
        z-index: 90000; */
    }
</style>