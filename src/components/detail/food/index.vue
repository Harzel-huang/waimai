<template>
  <div>
    <div class="foodcard" ref="card">
      <div class="scrolltitle">
        <ul>
          <li
            :class="{licss:true, activeclick: clickTitleShow==key?true:false }"
            v-for="(item,key) in foodlist"
            :key="key"
            @click="currentIndedx(key)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="foods" ref="foodsUl">
      <div class="foods-wrapper">
        <ul>
          <li class="food-list-hook" v-for="(good, index) in foodlist" :key="index">
            <h3 class="title">{{good.name}}</h3>
            <ul>
              <li
                style="width:250px"
                class="food-item"
                v-for="(food, index) in good.foods"
                :key="index"
                @click="props(food)"
              >
                <div class="icon">
                  <img width="45" height="45" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <!-- <p class="desc">{{food.description}}</p> -->
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <span>
                      <CardControl :food="food" />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCatr />
    </div>
    <foodshow :food="food" ref="reffoodshow" />
  </div>
</template>

<script>
import BScroll from "better-scroll";
import CardControl from "../../CartControl";
import foodshow from "../../Foodshow";
import ShopCatr from "../../ShopCart";
export default {
  name: "foodlist",
  data() {
    return {
      foodlist: [],
      clickTitleShow: -1,
      inputnum: 1,
      food: {}
    };
  },
  mounted() {
    this.axios.get("http://goods.com").then(res => {
      this.foodlist = res.data.data;
      this.$store.state.foodlist = res.data.data;
      // this.$store.commit("pushfoodlist", res.data.data)
      this.$nextTick(() => {
        var scroll = new BScroll(this.$refs.foodsUl, {
          scrollY: true,
          click: true
        });
        this.scroll = scroll;
      });
    });
    this.axios.get("http://info.com").then(res => {
      this.$store.state.shopInfo = res.data.data;
    });
    this.axios.get("http://ratings.com").then(res => {
      this.$store.state.issue = res.data.data;
    });
  },
  methods: {
    currentIndedx(index) {
      this.clickTitleShow = index;
      var h3 = this.$refs.foodsUl.getElementsByTagName("h3");
      this.scroll.scrollTo(0, -h3[index].offsetTop);
    },
    props(food) {
      this.food = food;
      this.$refs.reffoodshow.toggleShow();
    }
  },
  components: {
    CardControl,
    foodshow,
    ShopCatr
  }
};
</script>

<style scoped>
.foodcard {
  display: inline-block;
  height: 460px;
  background-color: green;
  color: white;
}
.licss {
  list-style: none;
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
  width: 80px;
}
.food-list-hook {
  list-style: none;
}
.foods {
  display: inline-block;
  width: 70%;
  height: 460px;
  overflow: hidden;
}
.title {
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: rgb(147, 153, 159);
  background: #f3f5f7;
}
.food-item {
  display: flex;
  margin: 10px;
  padding-bottom: 10px;
  margin-bottom: 0;
}
.icon {
  flex: 0 0 57px;
  /* margin-right: 10px; */
}
.content {
  flex: 1;
}

.name {
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}
.desc,
.extra {
  line-height: 10px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.desc {
  line-height: 12px;
  margin-bottom: 8px;
}
.extra .count {
  margin-right: 12px;
}
.price {
  font-weight: 700;
  line-height: 24px;
}
.activeclick {
  color: blue;
  font-weight: bold;
}
.el-input-number--mini {
  width: 100px;
}
</style>
