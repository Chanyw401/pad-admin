<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'结直肠癌',nameEn:'Colorectal cancer'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                结直肠癌(colorectal cancer, CRC)是一种常见的致命疾病，环境和遗传因素均可能影响其发生风险。近些年，结直肠癌的患者有年轻化趋势，绝大部分患者是结肠黏膜长了息肉、腺瘤，经过长时间、多步骤、序惯性基因突变而发生癌变。大多数患者的表现是粪便中或粪便上有血；大便习惯改变、大便变细；有腹泻或便秘症状，有时二者会交替出现；腹部绞痛，伴有呕吐，大便排出后，疼痛会有缓解；体重无缘无故减轻；持续的疲劳感

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
                            {{item.state == 0 ?'-': item.state ==1? '↓' : '↑'}}
                        </div>

                    </div>
                </div>

            </div>
            <div class="header-point">建议</div>
            <div class="content-box2">
                一般认为饮食习惯、肠道菌群、化学致癌物、基因变异、腺瘤、慢性溃疡性结肠炎等因素会增加结肠癌的风险。年龄是结直肠癌的一个主要风险因素，建议56~85岁人群每年进行一次结肠癌筛查。超过85岁结直肠癌筛查收益不大。

            </div>







            <footer-box :data="'10'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page10',
    data() {
        return {
            tableList:[
                {name:'拟杆菌属 Bacteroides',value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'梭杆菌属 Fusobacterium',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'肠杆菌属 Enterobacter',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'链球菌属 Streptococcus',value:'59.545%',value2:0.1914-14.598,state: 2},


            ],
            list:[{   name:'结直肠癌',
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

