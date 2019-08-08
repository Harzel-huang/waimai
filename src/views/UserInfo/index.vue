<template>
    <div>
         <span>
      <i class="iconfont icon-jiantou_zuo" @click="back_mine"></i>
    </span>
        <h3>个人信息中心</h3>
        <h3>个人详细资料</h3>
    </div>
</template>

<script>
export default {
    name:"userinfo",
    methods: {
        back_mine(){
            this.$router.replace('/mine')
        }
    },

}
</script>

<style>

</style>
