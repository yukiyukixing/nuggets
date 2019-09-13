<template>
    <div>
        <div class="center_body">
            <!-- <div class="seat"></div> -->
            <div class="wrap" v-for="item in detail">
                <a :href="item.node.originalUrl">
                    <div class="row1">
                        <div class="left">
                            <div class="img"></div>
                            <span>{{ item.node.user.username }}</span>
                        </div>
                        <div class="right">
                            <span>{{ item.node.tags[0].title }}</span>
                            <span v-if="item.node.tags[1]">/{{ item.node.tags[1].title }}</span>
                        </div>
                    </div>
                    <div class="row2">
                        <span class="title">{{ item.node.title }}</span>
                        <p class="content">
                            {{ item.node.content.substring(0,90) }}...
                        </p>
                    </div>
                    <div class="row3">
                        <div class="zan">
                            <i class="iconfont icon-zan"></i>
                            <span>{{ item.node.likeCount }}</span>
                        </div>
                        <div class="pinglun">
                            <i class="iconfont icon-pinglun"></i>
                            <span>{{ item.node.commentsCount }}</span>
                        </div>
                    </div>
                </a>
            </div>
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
    .center_body{
        width: 100%;
        flex: 1;
        overflow: auto;
        position: relative;
        top:86px;
        bottom: 45px;
        display: flex;
        flex-direction: column;
        /* flex:1;
        overflow: scroll; */
        background-color:#f4f6f9;
        /* border: 1px solid red; */
    }
    .seat{
        width: 100%;
        height: 110px;
        /* border: 1px solid seagreen; */
    }
    .wrap{
        width: 100%;
        height: 166px;
        margin: 4px 0;
        background-color:white; 
        /* border: 1px solid gold; */
        /* background: white; */
    }
    .row1{
        width: 100%;
        height: 40px;
        /* border: 1px solid aqua; */
        display: flex;
    }
    .left{
        float: left;
        height: 40px;
        flex:1;
        /* border: 1px solid red; */
        display: flex;
        line-height: 1;
        padding:13px 7px;
    }
    .img{
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background-color: red;
        background-image: url("../../assets/logo.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .left span{
        padding-left:3px; 
        padding-top:3px; 
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0;
        color: #515152;
    }
    .right{
        float: right;
        flex:1;
        padding:13px 6px;
        text-align: right;
        /* border: 1px solid red; */
        color: #8a9aa9;
        font-size: 11px;
        font-weight: 400;
    }
    .row2{
        width: 100%;
        height: 85px;
        /* border: 1px solid red; */
    }
    .title{
        position: relative;
        top: 4px;
        left: 8px;
        font-size:15px;
        font-weight: 600; 
        color: #1c1c1e;
    }
    .content{
        color: #67727b;
        position: relative;
        top: 10px;
        left: 8px;
        font-size:12px;
        font-weight: 500; 
        line-height: 18px;
        letter-spacing: 0.5px;
    }
    .row3{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 1;
        /* border: 1px solid aquamarine; */
    }
    .zan{
        position: relative;
        font-size:15px;
        color: #949ca8;
        top: 8px;
        left: 7px;
    }
    .zan i{
        font-size:15px;
        color: #949ca8;
    }
    .zan span{
        font-size:12px;
        color: #92a1af;
    }
    .pinglun{
        position: relative;
        color: #949ca8;
        top: 10px;
        left: 24px;
    }
    .pinglun i{
        font-size:10px;
        color: #949ca8;
    }
    .pinglun span{
        font-size:12px;
        color: #92a1af;
        padding-left: 3px;
    }
</style>