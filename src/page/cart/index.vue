<template>
  <div class="cart">
    <input type="checkbox" @change="handleChange" v-model="isAllChecked" />
    <ul>
      <li v-for="data in datalist" :key="data.id" class="cart-s">
        <input type="checkbox" v-model="checkgroup" :value="data" @change="handleItemChange" class="checkbox"/>
        {{data}}
        <button @click="data.number++">+</button>
        <span>
          <input type="number" v-model="data.number"  class="num"  />
        </span>
        <button @click="handleDelClick(data)">-</button>
      </li>
    </ul>
    <p class="sum">总计:{{getSum()}}</p>
    <Footer/> 
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
export default {
  data() {
    return {
      checkgroup: [],
      isAllChecked: false,
      datalist: [
        {
          name: "商品1",
          price: 10,
          number: 1,
          id: "1"
        },
        { name: "商品2", price: 20, number: 1, id: "2" },
        { name: "商品3", price: 30, number: 1, id: "3" }
      ]
    };
  },
   components:{
    Footer
  },
  methods: {
    handleChange() {
    //   console.log("handleChange");
    },
    getSum() {
      //购物车勾选数据累加
      var sum = 0;
      for (var i in this.checkgroup) {
        sum += this.checkgroup[i].number * this.checkgroup[i].price;
      }

      return sum;
    },
    handleDelClick(data) {
      data.number--;
      if (data.number === 0) {
        data.number = 1;
      }
    },
    // handleChange() {
    //   console.log("handleChange", this.isAllChecked);
    // },
    handleItemChange() {
      if (this.checkgroup.length === this.datalist.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
    }
  }
};
</script>

<style scoped>
.cart-s{
    border: 1px solid red;
    margin: 10px 0;
}
.num{
    width: 50px;
}
.sum{
    float: right;
}
</style>
