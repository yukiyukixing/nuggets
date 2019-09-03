<template>
    <div>
        <div class="row1"></div>
        <div class="row2">
            <div class="search">
                <div class="search_input_wrap">
                    <i class="iconfont icon-sousuotop"></i>
                    <input type="text" disabled="disabled" placeholder="搜索文章、用户、标签"/>
                </div>
            </div>
            <div class="tab_list"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .row1{
        width: 100%;
        height: 23px;
        position: fixed;
        top: 0;
    }
    .row2{
        width: 100%;
        height: 86px;
        position: fixed;
        top: 23px;
        background: rgba(0,127,255,1);
        border-bottom: 1px solid red;
    }
    .row2 .search{
        width: 100%;
        height: 46px;
        border-bottom: 1px solid red;
        padding-top:7px;
        padding-left:7px;
    }
    .row2 .search .search_input_wrap{
        /* display: none; */
        width: 82%;
        height: 31px;
        line-height: 1;
        box-sizing: border-box;
        border-radius:1px;
        background: rgba(51,153,255,1);
    }
    .row2 .search .search_input_wrap i{
        position: relative;
        height: 100%;
        left: 12px;
        font-size: 16px;
        font-weight: 500;
        color: white;
    }
    .row2 .search .search_input_wrap input{
        width: 90%;
        height: 100%;
        position: relative;
        left: 15px;
        background:none;
        outline: none;
        border: none;
    }
    .row2 .search .search_input_wrap input::-webkit-input-placeholder{
        color: #a0cfff;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 2px;
        position: relative;
        left: 8px;
        top: -2px;
    }
    .row2 .tab_list{
        width: 100%;
        height: 40px;
        border: 1px solid blueviolet;
    }
</style>