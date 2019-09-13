<template>
    <div>
        <ul class="tag_list">
            <li class="active">关注</li>
            <li>推荐</li>
            <li>热榜</li>
            <li>后端</li>
            <li>前端</li>
            <li>Android</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'ListTag'
}
</script>

<style scoped>
    .tag_list{
        width: 100%;
        height: 31px;
        display: flex;
        /* border: 1px solid red; */
        align-items: center;
        /* justify-content: center; */
        /* background: #007fff;*/
        color: #88c3ff; 
    }
    li{
        /* width: .78rem; */
        /* border: 1px solid red; */
        text-align: center;
        font-size: 14px;
        flex:1;
    }
    .active{
        color: white; 
    }
</style>