<template>
  <div>
    <div class="ratings" ref="ratings">
      <div class="ratings-content">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">4.7</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家 99%</div>
          </div>
          <div class="overview-right">
            <div class="score-wrapper">
              <span class="title">服务态度</span>
              <!-- <Star :score="4.6" :size="36" /> -->
              <span class="score">4.6</span>
            </div>
            <div class="score-wrapper">
              <span class="title">商品评分</span>
              <!-- <Star :score="4.7" :size="36" /> -->
              <span class="score">4.7</span>
            </div>
            <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">30 分钟</span>
            </div>
          </div>
        </div>
        <div class="split"></div>
        <div class="ratingselect">
          <div class="rating-type">
            <span class="block positive active" @click="settabindex(2)">
              全部
              <span class="count">{{issueinfo.length}}</span>
            </span>
            <span class="block positive" @click="settabindex(0)">
              满意
              <span class="count">{{positiveSize}}</span>
            </span>
            <span class="block negative" @click="settabindex(1)">
              不满意
              <span class="count">{{issueinfo.length-positiveSize}}</span>
            </span>
          </div>
          <div class="switch">
            <span class="text">以下评论内容</span>
          </div>
        </div>
        <div class="rating-wrapper">
          <ul>
            <li class="rating-item" v-for="(item,index) in filterRating" :key="index">
              <div class="avatar">
                <img
                  width="28"
                  height="28"
                  src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                />
              </div>
              <div class="content">
                <h1 class="name">{{item.username}}</h1>
                <div class="star-wrapper">
                  <!-- <Star :score="5" :size="24" /> -->
                  <!-- <span class="delivery">{{item.deliveryTime}}</span> -->
                </div>
                <p class="text">{{item.text===""?'该顾客未评价':item.text}}</p>
                <div class="recommend">
                  <span
                    class="item"
                    v-for="(recommend,index) in item.recommend"
                    :key="index"
                  >{{recommend}}</span>
                </div>
                <div class="time">{{item.rateTime | secodesToYear()}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {mapState} from "vuex";
export default {
  name: "issueList",
  data() {
    return {
      issueinfo: [],
      newmap: [],
      tabindex: 2,
      positiveSize: 0,
      filterarry: []
    };
  },
  mounted() {
    this.axios.get("http://ratings.com").then(res => {
      this.issueinfo = res.data.data;
      console.log("发起ajax请求原始数据");
      let newarry = this.issue.filter(item => {
        return item.rateType == 0;
      });
      this.positiveSize = newarry.length;
      this.$nextTick(() => {
        let scroll = new BScroll(".rating-wrapper", {
          scrollY: true,
          click: true
        });
      });
    });
  },

  methods: {
    settabindex(index) {
      this.tabindex = index;
    }
  },
  filters: {
    secodesToYear(second) {
      let date = new Date(second);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let _date = date.getDate();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      return (
        year +
        "-" +
        month +
        "-" +
        _date +
        " " +
        hour +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    filterindex() {
      const { issueinfo, tabindex } = this;
      return issueinfo.filter(rating => {
        return tabindex == 2 || tabindex === tabindex;
      });
    }
  },
  computed: {
    ...mapState(["issue"]),
    //  ...mapState(["cartFoods", "shopInfo"]),
    filterRating() {
      const { issue, tabindex } = this;
      return issue.filter(item => {
        const { rateType } = item;
        return tabindex == 2 || tabindex === rateType;
      });
    }
  }
};
</script>

<style scoped>
.ratings {
  position: absolute;
  top: 210px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.overview {
  display: flex;
  padding: 8px 0;
}
.overview-left {
  flex: 0 0 137px;
  padding: 25px 0;
  width: 137px;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
  text-align: center;
  flex: 0 0 120px;
  width: 120px;
}
.score {
  margin-bottom: 6px;
  line-height: 28px;
  font-size: 24px;
  color: rgb(255, 153, 0);
}
.title {
  margin-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
.rank {
  line-height: 10px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.overview-right {
  flex: 1;
  padding: 6px 0 6px 24px;
}
.score-wrapper {
  margin-bottom: 8px;
  font-size: 0;
}
.title {
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
.star {
  display: inline-block;
  margin: 0 12px;
  vertical-align: top;
}
.score {
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: rgb(255, 153, 0);
  padding: 0 10px;
}
.delivery-wrapper {
  font-size: 0;
}
.title {
  line-height: 18px;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
.delivery {
  margin-left: 12px;
  font-size: 12px;
  color: rgb(147, 153, 159);
}
.split {
  width: 100%;
  height: 8px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background: #f3f5f7;
}
.ratingselect .rating-type {
  padding: 8px 0;
  margin: 0 18px;
  font-size: 0;
}
.block {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  line-height: 16px;
  border-radius: 1px;
  font-size: 12px;
  color: rgb(77, 85, 93);
  background: rgba(77, 85, 93, 0.2);
}
.block:active {
  background: green;
  color: #fff;
}
.count {
  margin-left: 2px;
  font-size: 8px;
}
.switch {
  padding: 10px 25px;
  line-height: 15px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  color: rgb(147, 153, 159);
  font-size: 0;
}
.icon-check_circle {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  font-size: 24px;
}
.text {
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}
.rating-wrapper {
  padding: 0 18px;
  height: 250px;
  overflow: hidden;
}
.rating-item {
  display: flex;
  padding: 18px 0;
}
.avatar {
  flex: 0 0 28px;
  width: 28px;
  margin-right: 12px;
}
.content {
  position: relative;
  flex: 1;
}
.name {
  margin-bottom: 4px;
  line-height: 12px;
  font-size: 10px;
  color: rgb(7, 17, 27);
}
.star-wrapper {
  margin-bottom: 6px;
  font-size: 0;
}
.delivery {
  display: inline-block;
  vertical-align: top;
  line-height: 12px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.text {
  margin-bottom: 8px;
  line-height: 18px;
  color: rgb(7, 17, 27);
  font-size: 12px;
}
.recommend {
  line-height: 16px;
  font-size: 0;
}
.icon-thumb_up,
.icon-thumb_down,
.item {
  display: inline-block;
  margin: 0 8px 4px 0;
  font-size: 9px;
}
.icon-thumb_up {
  color: yellow;
}
.icon-thumb_down {
  color: rgb(82, 148, 214);
}
.item {
  padding: 0 6px;
  border: 1px solid rgba(7, 17, 27, 0.1);
  border-radius: 1px;
  color: rgb(147, 153, 159);
  background: #fff;
}
.time {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
</style>
