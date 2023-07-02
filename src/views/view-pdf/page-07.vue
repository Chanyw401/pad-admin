<template>
    <div>
        <div class="car-box">
            <header-one :data='{name:"疾病风险评估",nameEn:"Disease risk assessment"}'/>
            <header-tow :data="{name:'相关说明',nameEn:'Relevant description'}"/>
            <div class="content">
                <div>肠道菌群和大量疾病相关，涵盖消化系统、免疫系统、神经系统、代谢以及心脑血管疾病，此外还发现呼吸系统以及多种肿瘤也与肠道菌群存在关联。
                </div>
                <div>利用数十万例的临床和人群样本数据，结合机器学习方法，我们针对数十种疾病使用肠道菌群数据进行疾病状态和风险的预测，并给出了精确的风险概率。
                </div>
                <div>
                    通过我们的检测可以有效评估大部分的慢病风险和进展，甚至可提前对部分疾病进行预警。但需要注意的是，本检测目前仅作为健康评估不作为疾病诊断，消化道出血或同时患有多种疾病可能会产生干扰并导致风险偏高，此外本检测存在概率，低风险不一定代表完全没有疾病，对于结直肠癌建议一年进行一次检测，其他疾病风险评估半年进行一次。
                </div>
            </div>
            <header-tow :data="{name:'疾病相关菌',nameEn:'Disease-associated bacteria'}"/>

            <div>
                <div class="theader">
                    <div class="theader_item"
                         style="width:150px;text-align: center;padding-left: 5px;writing-mode:unset;justify-content: center;align-items: flex-end">
                        <div style="writing-mode:unset;">疾病名称/<br>菌属名称</div>
                    </div>
                    <div class="theader_item" style="min-width: 4%;" v-for="(item,index) in headerList" :key="index">{{
                        item.name
                        }}
                    </div>

                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 36%;text-align: center;">
                            <div>{{ item.name }}</div>
                        </div>
                        <div class="tody_item" v-for="(e,indez) in 16" :key="indez">
                            <div class="state-item"
                                 :class="statelist[index][indez]==2?'active':statelist[index][indez] ==1?'error':'' ">
                                {{ statelist[index][indez] == 2 ? '+' : statelist[index][indez] == 1 ? '-' : '' }}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <footer-box :data="'07'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import HeaderOne from "components/pdf-common/header-one.vue";

export default {
    components: {HeaderOne, FooterBox, HeaderTow},
    name: 'page07',
    data() {
        return {
            tableList: [
                {name:"菌群多样性"},
                {name:"乳酸杆菌属"},
                {name:"弯曲菌属"},
                {name:"脆弱类杆菌"},
                {name:"梭状芽孢杆菌属"},
                {name:"艰难梭菌"},
                {name:"埃希氏菌属"},
                {name:"霍乱弧菌"},
                {name:"罗氏菌属"},


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
                [1, '', 1, '', '', '', '', '', '', '', '', 1, 1, 1, '', ''],
                [1, '', 1, 1, 1, '', '', '', '', '', '', 2, 1, '', '', ''],
                [2, 2, '', 2,2, '', '', '', '', '', '', '', '', '', '', ''],
                [2, '', 1, 1, '', '', '', '', 2, '', '', '', '', '', '', ''],
                [2, '', 2,2, '', '', '', '', 2, '', '', '', '', '', '', ''],
                [2, '', 2,2, '', '', '', '', 2, '', '', '', '', '', '', ''],
                [2, '', 2,'', 2, '', '', '', '', '', 2, '', '', '', '', ''],
                [2, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', 1, 1, 1, '', '', '', 1, '', '', '', '', 1, '', 1, ''],


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

    .error {
      line-height: 14px;
    }
  }


}

.content {
  position: relative;
  height: 310spx;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
  border-radius: 6px 6px 6px 6px;;
  padding: 20px;
  color: #254A96;

  div {
    text-indent: 32px;
    text-align: justify;
    font-size: 16px;
    line-height: 26px;
  }


}


</style>

