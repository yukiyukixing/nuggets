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
        this.axios.get('a/api/movieOnInfoList?cityListId=10').then((res) => {
            console.log(res)
        })
    },
    methods:{

    }
}
</script>

<style scoped>

</style>>