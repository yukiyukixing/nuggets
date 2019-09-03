<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/home">
                <i class="iconfont icon-home"></i>
            </router-link>
            <router-link tag="li" to="/boiling">
                <i class="iconfont icon-circle"></i>
            </router-link>
            <router-link tag="li" to="/search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
            <router-link tag="li" to="/book">
                <i class="iconfont icon-shu"></i>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-people"></i>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
    #footer{
        width: 100%;
        height: 45px;
        background: white;
        /* box-shadow: 0px -1px 1px rgba(243,243,243,0.95); */
        position: fixed;
        left: 0;
        bottom: 0;
    }
    #footer ul{
        height: 50px;
        display: flex;
    }
    #footer ul li{
        flex:1;
        display: flex;
        justify-content: center; 
        align-items: center;
        height: 50px;
    }
    @keyframes move {
        0% {
            background: rgba(0,0,0,0);
        }
        50%{
            background: rgba(243,243,243,0.95);
        }
        100%{
            background: rgba(0,0,0,0);
        }
    }
    #footer ul li.router-link-active{
        color:#0c85ff;
        animation: move .5s;
    }
    #footer ul li i{
        font-size: 30px;
    }
</style>