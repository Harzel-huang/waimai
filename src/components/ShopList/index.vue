<template>
     <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li border-1px">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="">
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              <h4 class="shop_title ellipsis"></h4>
              <ul class="shop_detail_ul">
                <li class="supports">
                </li>
              </ul>
            </div>
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <!-- <Star :score="shop.rating" :size="24"/> -->
                <div class="rating_div">
                
                </div>
                <div class="order_div">
                  <!-- 月售{{shop.recent_order_num}}单 -->
                </div>
              </div>
              <div class="shop_rating_order_right">
                <span class="delivery_style delivery_right"></span>
              </div>
            </div>
            <div class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥
                    <!-- {{shop.float_minimum_order_amount}} -->
                    起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥
                    <!-- {{shop.float_delivery_fee}} -->
                    </span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"shopList"

}
</script>

<style>

</style>
