<template>
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
</template>

<script>
import Content from '@/components/Content'

export default {
    name : 'CheckInput',
    components : {
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

</style>>