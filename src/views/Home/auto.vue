<template>
    <div class="auto">
        <span>发现更多优秀掘金作者</span>
    </div>
</template>

<script>
export default {
    name:'auto'
}
</script>

<style scoped>
    .auto{
        width: 100%;
        height: 48px;
        line-height: 48px;
        position: fixed;
        top: 86px;
        /* border: 1px solid red; */
        background-image:url(../../../public/auto.png);
        background-repeat:no-repeat;
        background-position:right;
        background-size: 30% 100%;
    }
    .auto span{
        font-size: 14px;
        font-weight: 800;
        color: #393939;
        margin-left: 17px;
    }
</style>