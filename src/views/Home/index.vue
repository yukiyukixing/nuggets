<template>
    <div class="content">
        <Header />
        <Auto />
        <Content />
        <Button />
        <TabBar /> 
    </div>
</template>

<script>
import Header from '@/components/Header'
import Auto from './auto'
import Content from '@/components/Content'
import Button from './button'
import TabBar from '@/components/TabBar'

export default {
    name : 'Home',
    components : {
        Header,
        Auto,
        Content,
        Button,
        TabBar
    }
}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: auto;
        /* background: url(../../../public/首页关注.png) center center no-repeat;
        background-size: 100% 100%; */
    }
</style>