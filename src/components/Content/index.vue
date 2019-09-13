<template>
    <div class="conent">
        <div class="list" v-for="item in detail">
            <div class="row1">
                <div class="left">
                    <div class="img"></div>
                    <span>{{ item.node.targets[0].user.username }}</span>
                    <!-- <p>{{ item.node.targets[0].user.company }}</p> -->
                </div>
                <div class="right"></div>
            </div>
            <div class="row2">
                <div class="left_content">
                    <div class="title">
                        <span>分享</span>
                        <p>{{ item.node.targets[0].title }}</p>
                    </div>
                    <div class="detail">
                        <p>
                            {{ item.node.targets[0].content }}
                        </p>
                    </div>
                </div>
                <div class="right_img"></div>
            </div>
            <div class="row3">
                <div class="zan">
                    <i class="iconfont icon-zan"></i>
                    <span>{{ item.node.targets[0].likeCount }}</span>
                </div>
                <div class="ping">
                    <i class="iconfont icon-pinglun"></i>
                    <span>{{ item.node.targets[0].commentsCount }}</span>
                </div>
                <div class="share">
                    <i class="iconfont icon-552cc62440096"></i>
                    <span>分享</span>
                </div>
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
                    "extensions": {"query": {"id": "504f6ca050625a4270ba11eebe696b3c"}},
                    "operationName": "",
                    "query": "",
                    "variables": {"type": "ARTICLE","first": 20, "after": "1566960555346"}
                };
        this.axios.post('/a/query',data,{headers: headers}).then((res) => {
            this.detail = res.data.data.followingArticleFeed.items.edges;
            console.log(res.data.data.followingArticleFeed.items.edges)
        });
    }
}
</script>

<style scoped>
    .conent{
        width: 100%;
        height: 100%;
        position: fixed;
        flex: 1;
        overflow: auto;
        top: 135px;
        background: #f4f6f9;
        /* border: 1px solid red; */
    }
    .list{
        width: 100%;
        height: 203px;
        margin:7px 0;
        background: white;
        /* border: 1px solid red; */
    }
    .row1{
        width: 100%;
        height: 52px;
        display: flex; 
    }
    .left {
        width: 100%;
        height: 52px;
        line-height: 52px;
        flex: 1;
        display: flex;
        align-items: center;
    }
    .img{
        width: 33px;
        height: 33px;
        margin-left:9px; 
        border-radius: 50%;
        background-image: url(../../../public/头像.jpg);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .left span {
        font-size: 13px;
        font-weight: 600;
        color: #1c1c1e;
        margin-top:-14px; 
        margin-left:10px; 
    }
    .left p{
        width: 50%;
        font-size: 12px;
        color: #8e9dac;
        margin-top:26px; 
        margin-left:-53px;
    }
    .right{
        flex: 1;
        height: 100%;
        border-radius: 50%;
        background-image: url(../../../public/点.png);
        background-position:right;
        background-size: 80px 100%;
        background-repeat: no-repeat;
    }
    .row2{
        width: 100%;
        height: 113px;
        /* border: 1px solid red; */
    }
    .left_content{
        width: 75%;
        height: 100%;
        margin-left:9px; 
    }
    .title{
        height: 25px;
        line-height: 25px;
        margin-top:5px; 
        display: flex;
    }
    .title span{
        width: 10%;
        height: 10px;
        background: #edf7ff;
        border-radius: 5%;
        font-size: 12px;
        font-weight: 700;
        color: #007fff;
    }
    .title p{
        width: 88%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        padding-left: 10px;
        font-size: 13px;
        font-weight: 600;
        color: #1c1c1e;
    }
    .detail{
        width: 98%;
        height: 69px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .detail p {
        padding-top:4px;
        line-height: 22px; 
        font-size: 14px;
        color: #1c1c1e;
        font-weight: 500;
    }
    .row3{
        width: 100%;
        height: 35px;
        line-height: 35px;
        /* border: 1px solid aqua;*/
        border-top:1px solid #f1f1f1; 
        display: flex; 
    }
    .zan{
        flex: 1;
        /* border: 1px solid red; */
        text-align: center;
    }
    .zan i{
        font-size:15px;
        color: #949ca8;
    }
    .zan span{
        font-size:12px;
        color: #92a1af;
        padding-left:3px; 
    }
    .ping{
        flex: 1;
        /* border: 1px solid red; */
        text-align: center;
    }
    .ping i{
        font-size:12px;
        color: #949ca8;
    }
    .ping span{
        font-size:12px;
        color: #92a1af;
        padding-left:3px; 
    }
    .share{
        flex: 1;
        /* border: 1px solid red; */
        text-align: center;
    }
    .share i{
        font-size:16px;
        color: #949ca8;
    }
    .share span{
        font-size:12px;
        color: #92a1af;
        padding-left:3px; 
    }
</style>