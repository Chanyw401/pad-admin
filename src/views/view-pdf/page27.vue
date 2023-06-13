<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'疾病相关菌',nameEn:'Disease related bacteria'}"/>
            <div>
                <div class="theader">
                    <div class="theader_item"
                         style="width:150px;text-align: center;padding-left: 5px;writing-mode:unset">
                        <div style="writing-mode:unset">疾病名称/<br>菌属名称</div>
                    </div>
                    <!--                    <div class="theader_item" style="width: 8%;text-align: center;padding-left: 30px"><div class="theader_text">结果</div></div>-->
                    <!--                    <div class="theader_item" style="width: 8%;text-align: center;padding-left: 30px"><div class="theader_text">正常范围</div></div>-->
                    <div class="theader_item" style="min-width: 4%;" v-for="item in 16" :key="item">我是疾病名称</div>

                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 36%;text-align: center;">
                            <div>我是个菌群名称</div>
                        </div>
                        <!--                        <div  style="width: 8%;text-align: center;padding-left: 30px"><div >结果</div></div>-->
                        <!--                        <div  style="width: 8%;text-align: center;padding-left: 30px"><div >正常范围</div></div>-->
                        <div class="tody_item" v-for="i in 16" :key="i">
                            <div class="state-item" :class="item.state==1?'active':item.state ==0?'':'error' ">
                                {{ item.state == 0 ? '' : item.state == 1 ? '+' : '-' }}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <footer-box :data="'27'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, HeaderTow},
    name: 'page27',
    data() {
        return {
            tableList: [
                {name: '厚壁菌门 Firmicutes', value: '59.545%', value2: '0.1914-14.598', state: 1},
                {name: '拟杆菌门 Bacteroidetes', value: '59.545%', value2: '0.1914-14.598', state: 0},
                {name: '变形菌门 Proteobacteria', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '放线菌门 Actinobacteria', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '螺旋体 Spirochaetes', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '厚壁菌门 Firmicutes', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '拟杆菌门 Bacteroidetes', value: '59.545%', value2: 0.1914 - 14.598, state: 0},
                {name: '变形菌门 Proteobacteria', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '放线菌门 Actinobacteria', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '螺旋体 Spirochaetes', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '厚壁菌门 Firmicutes', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '拟杆菌门 Bacteroidetes', value: '59.545%', value2: 0.1914 - 14.598, state: 0},
                {name: '变形菌门 Proteobacteria', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '放线菌门 Actinobacteria', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
            ]


        }
    },
}
</script>

<style scoped lang="scss">
.theader {
  width: 100%;
  display: flex;
  color: #434F65;
  height: auto;
  padding-bottom: 10px;
  border-bottom: 2px solid #254A96;
  line-height: 12px;
  font-size: 12px;
  background-size: cover;
  margin-bottom: 20px;
  // 字体竖排
  .theader_item {
    width: 31px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    writing-mode: vertical-rl;
    align-items: center;
  }

  .theader_text {
    width: 20px;
  }


}

.t-body {
  width: 100%;

  .item {
    display: flex;
    align-content: center;
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 12px;
    color: #434F65;
    background: #e1e4ea;

    div {
      border-bottom: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
    }
  }

  //.item:nth-child(2n){
  //  background: rgba(37, 74, 150, .2);
  //}
  .tody_item {
    min-width: 31px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;

    .state-item {
      opacity: 0;
    }

    .active,
    .error {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background: #254A96;
      color: #ffffff;
      line-height: 18px;
      opacity: 1;
        font-size: 14px;

    }

    .active {
      background: #CA3E54;
    }
  }


}


</style>

