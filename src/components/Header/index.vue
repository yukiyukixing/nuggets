<template>
    <header class="header">
        <Search />
    </header>
</template>

<script>
import Search from './search_top'

export default {
    name : 'Header',
    components : {
        Search
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 109px;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>