<template>
    <div>
        <h1>这是我的页面</h1>
        <Test />
        <TabBar />
    </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import Test from '@/components/Test'

export default {
    name : 'Mine',
    components : {
        TabBar,
        Test
    }
}
</script>

<style>

</style>