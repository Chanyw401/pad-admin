<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'II型糖尿病',nameEn:'Type 2 diabetes'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                糖尿病由多种病因引起的以慢性高血糖为特征的代谢紊乱，主要病征为"三多一少"，即多饮、多食、多尿、体重减轻。II型糖尿病:是体内产生胰岛素的能力并非完全丧失但是胰岛素的作用效果较差，体内的胰岛素出现相对缺乏，35~40岁之后发病，占糖尿病患者90%以上。
            </div>
            <div>
                <div class="theader">
                    <div style="width: 40%;text-align: left;padding-left: 30px">菌名</div>
                    <div style="width: 15%;text-align: center ">检查结果</div>
                    <div style="width: 25%;text-align: center "> 正常范围</div>
                    <div style="width: 20%;text-align:center">对疾病有益/有害</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 40%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 15%;text-align: center ">{{item.value}}</div>
                        <div style="width: 25%;text-align:center;">
                            {{item.value2}}
                        </div>
                        <div style="width: 20%;text-align: center ">
                            {{item.state == 0 ?'有益菌':'有害菌'}}
                        </div>

                    </div>
                </div>

            </div>
            <div class="header-point">建议</div>
            <div class="content-box2">
                II型糖尿病患者的饮食管理十分重要，选择健康食物，限制碳水化合物和脂肪摄入，控制盐摄入。需要定期监测血糖与复诊。
            </div>
            <footer-box :data="'26'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page26',
    data() {







        return {
            tableList:[
                {name: "普雷沃氏菌属 Prevotella",value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'罗氏菌属 Roseburia',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'链球菌属 Streptococcus',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'毛螺菌属 Lachnospira',value:'59.545%',value2:0.1914-14.598,state: 2},


            ],
            list:[{   name:'II型糖尿病\n',
                num:50,
                type:1}]



        }
    },
}
</script>

<style scoped lang="scss">
.theader{
  width: 100%;
  display: flex;
  color: #ffffff;
  background: url(../../assets/img/car-pdf/car-content2-header.png) no-repeat;
  height: 45px;
  line-height: 45px;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}
.t-body{
  width: 100%;
  margin-bottom: 40px;

  .item{
    display: flex;
    align-content: center;
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #434F65;
    background: #e1e4ea;
    margin: 10px 0;
    border-radius: 4px;
    div{
    }
  }
  .item:nth-child(2n){
    background: rgba(37, 74, 150, .2);
  }
  ::v-deep.el-progress__text {
    color: #2E5CBB !important;
    font-size: 11px !important;
  }


}
.content-text{
  width: 100%;
  height: 168px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  padding: 20px;
  text-align: justify;
  margin-bottom: 25px;

  color: #254A96;
}
.content-box2{
  width: 100%;
  height: 93px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  color: #254A96;
  padding: 20px;
  div{
    padding: 10px 0 ;
  }
}





</style>

