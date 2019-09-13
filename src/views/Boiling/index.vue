<template>
    <div>
        <ListTag />
        <Carousel />
        <List />
        <TabBar />
    </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import ListTag from '@/components/ListTag'
import Carousel from '@/views/Boiling/carousel'
import List from '@/views/Boiling/list'

export default {
    name : 'Boiling',
    components : {
        TabBar,
        ListTag,
        Carousel,
        List
    }
}
</script>

<style>

</style>