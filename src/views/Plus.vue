<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 10:29:21
 * @LastEditTime: 2019-07-19 20:41:07
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="收件地址" left-arrow @click-left="onClickLeft" style="background:#cecece" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Plus",
  data() {
    return {
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      },
      searchResult: []
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave() {
      Toast("save");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style>
.van-icon-arrow-left:before {
  color: #979797;
}
</style>