<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'疾病相关菌',nameEn:'Disease related bacteria'}"/>
            <div>
                <div class="theader">
                    <div class="theader_item"
                         style="width:150px;text-align: center;padding-left: 5px;writing-mode:unset;justify-content: center;align-items: flex-end">
                        <div style="writing-mode:unset;">疾病名称/<br>菌属名称</div>
                    </div>
                    <!--                    <div class="theader_item" style="width: 8%;text-align: center;padding-left: 30px"><div class="theader_text">结果</div></div>-->
                    <!--                    <div class="theader_item" style="width: 8%;text-align: center;padding-left: 30px"><div class="theader_text">正常范围</div></div>-->
                    <div class="theader_item" style="min-width: 4%;" v-for="(item,indey) in headerList" :key="indey">{{ item.name }}</div>

                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList" :key="index" class="item">
                        <div style="width: 36%;text-align: center;">
                            <div>{{ item.name }}</div>
                        </div>
                        <!--                        <div  style="width: 8%;text-align: center;padding-left: 30px"><div >结果</div></div>-->
                        <!--                        <div  style="width: 8%;text-align: center;padding-left: 30px"><div >正常范围</div></div>-->
                        <div class="tody_item" v-for="(e,indez) in 16" :key="e">
                            <div class="state-item"
                                 :class="statelist[index][indez]==2?'active':statelist[index][indez] ==1?'error':'' "
                            >
                                <img v-if="statelist[index][indez] == 2" style="width: 18px" src="../../assets/img/car-pdf/rise.svg" alt="">
                                <img v-if="statelist[index][indez] == 1" style="width: 18px" src="../../assets/img/car-pdf/dwon.svg" alt="">
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <footer-box :data="'08'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, HeaderTow},
    name: 'page08',
    data() {
        return {
            tableList:[
                {name: '懒惰脱硫弧菌'},
                {name: '梭形杆菌属'},
                {name: '双歧杆菌属'},
                {name: '肠沙门氏菌'},
                {name: '阿克曼氏菌'},
                {name: '拟杆菌属'},
                {name: 'Odoribacter属'},
                {name: 'Phascolarctobacteri...'},
                {name: '普雷沃氏菌属'},
                {name: '瘤胃球菌属'},
                {name: '戴阿利斯特菌'},
                {name: '史氏甲烷短杆菌'},
                {name: 'Parabacteroides属'},
                {name: '白色瘤胃球菌'},
                {name: '韦荣氏球菌属'},
                {name: 'Alistipes属'},
                {name: '柯氏杆菌'},
                {name: 'Paraprevotella属'},
                {name: '生黄瘤胃球菌'},
                {name: '人结肠厌氧棍状菌'},
                {name: 'B. crossotus', value: '59.545%', value2: '0.1914-14.598', state: 1},

            ],
            headerList: [
                {name: '感染性腹泻',},
                {name: '炎症性肠病',},
                {name: '克罗恩病', },
                {name: '溃疡性结肠炎', },
                {name: '肠易激综合征', },
                {name: '腹痛', },
                {name: '腹胀',},
                {name: '便秘', },
                {name: '胀气',},
                {name: '无症状憩室病',},
                {name: '肝病',},
                {name: '肥胖',},
                {name: '糖尿病', },
                {name: '心脑血管疾病', },
                {name: '肾脏疾病',},
                {name: '过敏', },],
            statelist: [
                ['',2,'','','','','','','','','','','','','',''],
                ['',2,'','','','','','','','','',2,'','','',''],
                ['',1,1,1,'','','',1,'','','',1,1,'',1,''],
                [2,'',2,'','','','','','','','','','','','',''],
                ['','',1,1,'','','','','',2,'',1,1,'','',1],
                ['','',1,1,'','','','','','','',2,'','',2,''],
                ['','',1,1,'','','','','','','','','','','',''],
                ['','',1,1,'','','',2,2,'','','','','','',''],
                ['','',1,1,'','','','','','','','',2,'',1,''],
                ['','',1,1,'',2,'','','','','','','','','',''],
                ['','',1,'','','','','','','','','','','','',''],
                ['','',2,2,2,2,'',2,'','','',2,'','','',''],
                ['','',2,'','','','','','','',1,'','',2,'',''],
                ['','','',2,'','','','','','','','','',1,'',''],
                ['','','','',2,'','','','','','','','','',1,''],
                ['','','','',1,'','','','','',1,1,'','','',''],
                ['','','','',1,'','','','','','','','','','',''],
                ['','','','',1,'','',2,'','','','','','','',''],
                ['','','','','','',2,'','','','','','','','',''],
                ['','','','','','',2,'','','','','','','','',''],
                ['','','','','','',2,'','','','','','','','',''],
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
    justify-content: flex-end;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    writing-mode: vertical-rl;
    align-items: center;
      color: #434F65;
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
    height: 37px;
    line-height: 37px;
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
      line-height: 18px;
      opacity: 1;
      font-size: 14px;


    }

  }


}


</style>

