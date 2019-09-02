<template>
    <div>
        <div class="conent" v-for="item in detail">
            <a :href="item.node.originalUrl">
                <div class="row1">
                    <div class="user_info">
                        <div class="img"></div>
                        <span>{{ item.node.user.username }}</span>
                    </div>
                    <div class="type">
                        <span>{{ item.node.tags[0].title }}</span>
                        <span v-if="item.node.tags[1]">/{{ item.node.tags[1].title }}</span>
                    </div>
                </div>
                <div class="row2">
                    <div class="title">
                        <h1>{{ item.node.title }}</h1>
                    </div>
                    <div class="main_content">
                        <p>{{ item.node.content.substring(0,80) }}...</p>
                    </div>
                </div>
                <div class="row3">
                    <div class="praise">点赞<span>{{ item.node.likeCount }}</span></div>
                    <div class="comment">评论<span>{{ item.node.commentsCount }}</span></div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Content',
    data(){
        return {
            detail:{}
        }
    },
    methods:{

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
            this.detail = res.data.data.articleFeed.items.edges;
            console.log(res.data.data.articleFeed.items.edges)
        });
    },
}
</script>

<style scoped>
    .conent{
        width: 100%;
        height: 110px;
        margin: 5px 0;
        background: white;
        overflow-y:auto; 
    }
    .conent .row1{
        width: 100%;
        height: 20px;
        display: flex;
    }
    .conent .row1 .user_info{
        display: flex;
        text-align: center;
        align-items: center;
    }
    .conent .row1 .type{
        position: absolute;
        right: 5px;
    }
    .conent .row1 .user_info .img{
        width: 20px;
        height: 20px;
        display: inline-block;
        border-radius: 5px;
        background-image: url("../../assets/logo.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .conent .row2 {
        width: 100%;
        height: 60px;
        margin: 5px 0;
    }
    .conent .row3{
        width:100%;
        height: 20px;
        display: flex;
        flex: 1;
        padding: 0 5px;
    }
    .conent .row3 .praise {
        padding:0 5px;
    }
    .conent .row3 .comment {
        padding:0 5px;
    }
</style>