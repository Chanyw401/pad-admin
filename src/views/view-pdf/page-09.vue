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
                    <div class="theader_item" style="min-width: 4%;" v-for="(item,index) in headerList" :key="index">{{ item.name }}</div>

                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 36%;text-align: center;">
                            <div>{{ item.name }}</div>
                        </div>
                        <div class="tody_item" v-for="(e,indez) in 16" :key="e">
                            <div class="state-item" :class="statelist[index][indez]==2?'active':statelist[index][indez] ==1?'error':'' ">
                                {{ statelist[index][indez]==2  ? '+' : statelist[index][indez] ==1 ? '-' : '' }}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <footer-box :data="'09'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, HeaderTow},
    name: 'page09',
    data() {
        return {
            tableList: [
                {name: 'Butyricimonas属', value: '59.545%', value2: '0.1914-14.598', state: 0},
                {name: '粪球菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: 'Faecalibacterium属', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '霍尔德曼氏菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '韦荣氏球菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '经黏液真杆菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 0},
                {name: '颤螺菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: 'Barnesiella属', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '戴阿利斯特杆菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '柯林斯氏菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '链球菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 0},
                {name: 'Flavonifractor属', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: 'Tyzzerella属', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '链型杆菌属', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '产甲酸草酸杆菌', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: ' C. xylanilytica', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '菠萝泛菌', value: '59.545%', value2: 0.1914 - 14.598, state: 1},
                {name: '酒红马杜拉放线菌', value: '59.545%', value2: 0.1914 - 14.598, state: 0},
                {name: '变黑普雷沃氏菌', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '宋内氏志贺氏菌', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
            ],

            headerList:[
                {name:'感染性腹泻',value:'59.545%'},
                {name:'炎症性肠病',value:'59.545%'},
                {name:'克罗恩病',value:'59.545%'},
                {name:'溃疡性结肠炎',value:'59.545%'},
                {name:'肠易激综合征',value:'59.545%'},
                {name:'腹痛',value:'59.545%'},
                {name:'腹胀',value:'59.545%'},
                {name:'便秘',value:'59.545%'},
                {name:'胀气',value:'59.545%'},
                {name:'无症状憩室病',value:'59.545%'},
                {name:'肝病',value:'59.545%'},
                {name:'肥胖',value:'59.545%'},
                {name:'糖尿病',value:'59.545%'},
                {name:'心脑血管疾病',value:'59.545%'},
                {name:'肾脏疾病',value:'59.545%'},
                {name:'过敏',value:'59.545%'},],
            statelist: [
                ['','','','','','','',2,'','','',1,1,'','',''],
                ['','','','','','','',2,2,'','','','','','',''],
                ['','','','','','','',2,'','','','','','','',''],
                ['','','','','','','',2,'','','','','','','',''],
                ['','','','','','','',2,'','','','',2,'','',''],
                ['','','','','','','','',2,'','','','','','',''],
                ['','','','','','','','',1,'','',1,'','','',''],
                ['','','','','','','','','','','',1,'','','',''],
                ['','','','','','','','','','','','',1,2,'',''],
                ['','','','','','','','','','',2,'','','','',''],
                ['','','','','','','','','','',1,'','','','',''],
                ['','','','','','','','','','',1,'','',2,'',''],
                ['','','','','','','','','','','','','',1,'',''],
                ['','','','','','','','','','','','','','',1,''],
                ['','','','','','','','','','','','','','','',2],
                ['','','','','','','','','','','','','','','',2],
                ['','','','','','','','','','','','','','','',2],
                ['','','','','','','','','','','','','','','',2],
                ['','','','','','','','','','','','','','','',2],
                ['','','','','','','','','','','','','','','',2],

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
    .error{
      line-height: 14px;
    }
  }


}


</style>

