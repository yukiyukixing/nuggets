<template>
    <div>
        <div class="row2">
            <div class="search">
                <div class="search_input_wrap">
                    <i class="iconfont icon-sousuotop"></i>
                    <input type="text" disabled="disabled" placeholder="搜索文章、用户、标签"/>
                </div>
                <div class="setting_tag">
                    <i class="iconfont icon-setting"></i>
                    <span>标签</span>
                </div>
            </div>
            <div class="tab_list">
                <yd-tab horizontal-scroll>
                    <yd-tab-panel label="关注">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="推荐">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="热榜">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="后端">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="前端">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="Android">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="iOS">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="人工智能">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="开发工具">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="代码人生">
                        <Content />
                    </yd-tab-panel>
                    <yd-tab-panel label="阅读">
                        <Content />
                    </yd-tab-panel>
                </yd-tab>
            </div>
        </div>
    </div>
</template>

<script>
import Content from '@/components/Content'

export default {
    name : 'CheckInput',
    components:{
        Content
    },
    data (){
        return{

        }
    },
    mounted(){
        let headers = {
                        "Content-Type": "application/json",
                        "X-Agent": "Juejin/Web",
                        "X-Legacy-Device-Id": "1566352286393",
                        "X-Legacy-Token": "eyJhY2Nlc3NfdG9rZW4iOiIzb2d4SGZJZTF2N0RROFI4IiwicmVmcmVzaF90b2tlbiI6InVFMm9RU3E2QmxZbjZkTDIiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==",
                        "X-Legacy-Uid": "5d5988d7f265da03ca116b43"
                    };
        let data = {
                    "extensions": {"query": {"id": "21207e9ddb1de777adeaca7a2fb38030"}},
                    "operationName": "",
                    "query": "",
                    "variables": {"first": 20, "after": "", "order": "POPULAR"},
                    "after": "",
                    "first": 20,
                    "order": "POPULAR"
                };
        this.axios.post('/a/query',data,{headers: headers}).then((res) => {
            // console.log(res)
        })
    },
    methods:{

    }
}
</script>

<style scoped>
    .row2{
        width: 100%;
        height: 86px;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,127,255,1);
        /* border-bottom: 1px solid red; */
    }
    .row2 .search{
        width: 100%;
        height: 46px;
        /* border-bottom: 1px solid red; */
        padding-top:7px;
        padding-left:7px;
        display:flex;
    }
    .row2 .search .search_input_wrap{
        /* display: none; */
        width: 82%;
        height: 31px;
        line-height: 1;
        box-sizing: border-box;
        border-radius:1px;
        /* border: 1px solid yellow; */
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
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 2px;
        position: relative;
        left: 8px;
    }
    .setting_tag{
        /* border: 1px solid saddlebrown; */
        width: 18%;
        height: 31px;
        line-height: 1;
        float:right;
    }
    .setting_tag i{
        position: relative;
        top: 6px;
        left: 5px;
        font-size: 16px;
        font-weight: 500;
        color: white;
    }
    .setting_tag span{
        position: relative;
        top: 6px;
        left: 7px;
        font-size: 16px;
        font-weight: 500;
        color: white;
        letter-spacing: 2px;
    }
    .row2 .tab_list{
        width: 100%;
        height: 40px;
        /* border: 1px solid blueviolet; */
    }
</style>