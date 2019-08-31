<template>
    <div>
        <Search />
        <CheakInput />
    </div>
</template>

<script>
import Search from './search_top'
import CheakInput from './checkInput'

export default {
    name : 'Header',
    components : {
        Search,
        CheakInput
    }
}
</script>

<style scoped>
    .content {
        position: fixed;
        width: 100%;
        height: 50px;
        background: rgba(0,127,255,1);
        top: 0;
        left: 0;
        flex:1;
    }
    .content .search_body{
        height: 50px;
        display: flex;
        padding:0 10px;
        border:1px solid #e6e6e6;
        border-radius:5px;
        background-color:#fff;
        display:flex;
        line-height:50px;
    }
    .content .search_body i{
        font-size: 18px;
        padding: 0 4px;
    }
    .content .search_body input {
        border:none;
        font-size:13px;
        color:#333;
        padding:4px 0;
        outline:none;
        margin-left:5px;
        width:100%;
    }
</style>