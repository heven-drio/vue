
<template>
  <div>
    <footer>
      <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" class="nav-van">
        <van-tabbar-item icon="home-o" v-model="active" @click=" onClickHome">首页</van-tabbar-item>

        <van-tabbar-item icon="apps-o" v-model="active" @click="onClickClassify">分类</van-tabbar-item>
       
        <van-tabbar-item icon="cart-circle-o" @click="onClickWant">吃什么</van-tabbar-item>
        <van-tabbar-item icon="cart-o" @click="onClickCart">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="onClickMine">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>