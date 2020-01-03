<template>
  <div>

    <van-search placeholder="输入商品名称" v-model="value" />

    <van-sidebar v-model="activeKey" style="z-index:10;">
      <van-sidebar-item title="绿卡专享" />
      <van-sidebar-item title="安心蔬菜" />
      <van-sidebar-item title="豆制品" />
      <van-sidebar-item title="新鲜水果" />
      <van-sidebar-item title="肉禽蛋" />
      <van-sidebar-item title="海鲜水产" />
      <van-sidebar-item title="乳品烘焙" />
      <van-sidebar-item title="火锅来了" />
      <van-sidebar-item title="营养早餐" />
      <van-sidebar-item title="产地直销" />
      <van-sidebar-item title="米面良油" />
      <van-sidebar-item title="调味品" />
      <van-sidebar-item title="方便速食" />
      <van-sidebar-item title="酒水饮料" />
      <van-sidebar-item title="休闲零食" />
      <van-sidebar-item title="快手菜" />
      <van-sidebar-item title="南北干货" />
      <van-sidebar-item title="宝宝餐" />
      <van-sidebar-item title="厨房用品" />
    </van-sidebar>
     <Footer/> 
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  components:{
    Footer
  },
    methods: {
    onClickHome() {
      this.$router.push("home");
    },
    onClickClassify() {
      this.$router.push("classify");
    },
    onClickWant() {
      this.$router.push("want");
    },
    onClickCart() {
      this.$router.push("cart");
    },
    onClickMine() {
      this.$router.push("mine");
    }
  },
};
</script>

<style scoped>
</style>