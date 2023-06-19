<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'肝病',nameEn:'Liver disease'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                肝病是指影响肝脏功能和结构的疾病，肝脏是人体最重要的器官之一，具有多种重要功能，包括代谢物的合成、解毒、储存和分泌等。肝病可以有多种原因引起，包括病毒感染（如乙型肝炎病毒和丙型肝炎病毒）、酒精滥用、脂肪堆积、遗传因素、药物或毒物的作用、自身免疫反应等。

            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                肝病的症状和严重程度因具体疾病类型和个体差异而异。一些常见的症状包括肝区疼痛或不适、腹胀、消化不良、食欲减退、恶心、呕吐、黄疸（皮肤和眼睛发黄）、腹水积聚、肝性脑病（精神状态异常）等
            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1.Tripathi A, Debelius J, Brenner DA, et al. The gut-liver axis and the intersection with the microbiome [published correction appears in Nat Rev Gastroenterol Hepatol. 2018 May 21;:]. Nat Rev Gastroenterol Hepatol. 2018;15(7):397-411. doi:10.1038/s41575-018-0011-z.
               <br/> 2.Compare, D,, et al. "Gut-liver axis: the impact of gut micro biotaon alcoholic fatty liver disease. "Nutrition, Metabolism andCardiovascular Diseases 22.6(2012): 471-476.

            </div>
            <footer-box :data="'23'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page23',
    data() {
        return {
            tableList:[
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},


            ],
            list:[{   name:'疾病名称',
                num:50,
                type:1}]



        }
    },
}
</script>

<style scoped lang="scss">
.header-point{
  font-size: 24px;
  font-weight: 400;
  color: #1A356B;
  line-height: 19px;
  letter-spacing: 1px;
  padding: 10px;
  position: relative;
  margin-bottom: 10px;
  &:before{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #2E5CBB;
    left: 0;
    top: 50%;
  }
}
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
.content-box{
  width: 100%;
  height: 180px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  padding: 20px;
  text-align: justify;

  color: #254A96;
}
.content-text{
  width: 100%;
  height: 168px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  padding: 20px;
  text-align: justify;

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
.content-header{
  color: #8989A3;
  font-size: 24px;
}
.content-literature{
  margin-top: 20px;
  font-size: 14px;
  font-family: Alibaba PuHuiTi 2.0-35 Thin, Alibaba PuHuiTi 20;
  font-weight: 250;
  color: #8989A3;
  line-height: 24px;
  word-wrap: break-word;
  text-align: justify;
}





</style>

f