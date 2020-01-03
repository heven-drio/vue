<template>
  <div class="home">
    <van-search
      v-model="value"
      placeholder="请输入商品名称"
      show-action
      shape="round"
      @search="onSearch"
      class="search"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="4">
      <van-grid-item v-for="value in 8" :key="value" >
          <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>  
      </van-grid-item>
    </van-grid>

    <van-cell-group>
      <van-cell title="限时抢购" value="更多">
        <van-count-down :time="time">
          <template v-slot="timeData" class="T-item">
            <span class="item">{{ timeData.hours }}</span>
            <span class="item">{{ timeData.minutes }}</span>
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </van-cell>
    </van-cell-group>

    <van-tabs v-model="active">
      <van-tab title="标签 1">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value" >
             <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="标签 2">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value" >
            <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="标签 3">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字">
              <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="标签 4">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value" >
              <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="标签 5">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value">
              <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="标签 6">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value">
              <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="标签 7">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value">
              <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="标签 8">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 8" :key="value" >
            <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>  
          </van-grid-item> 
        </van-grid>
      </van-tab>
    </van-tabs>

    <van-cell-group>
      <van-cell title="猜你喜欢" />
    </van-cell-group>

    <div class="vegetable-card">
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
export default {
  data() {
    return {
      goods: {
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },
  components:{
    Footer
  },
  methods:{
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
  }
};
</script>

<style scoped>
.search {
 
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.home img {
  width: 100%;
  display: block;
  height: 303px;
}
.item {
  display: inline-block;

  width: 22px;
  margin-left: 5px;
  left: 50px;

  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
.T-item {
  left: 200px;
}
.vegetable-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 10px;
}
.cards {
  width: 12rem;

  border: 1px solid red;
  margin: 5px;
  border-radius: 5px;
}
.cards p {
  border: 0;
}
.van-tag-T {
  margin: 5px;
}
.home-price {
  margin: 0 10px;
}
.home-catr {
  margin-right: 20px;
}
</style>


