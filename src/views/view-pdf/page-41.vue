<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'认知障碍（老年痴呆预兆）',nameEn:'Cognitive impairment (a sign of dementia)'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                认知障碍可以有多种不同的原因和病因，其中包括神经系统疾病（如阿尔茨海默病、帕金森病、脑损伤）、精神健康问题（如抑郁症、焦虑症）、脑血管疾病（如中风）、药物或药物滥用、代谢性疾病（如糖尿病）以及其他健康问题。

            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                最常见的症状之一是记忆问题，包括短期记忆和长期记忆的受损。患者可能难以记住新的信息、重复相同的问题，或者忘记过去常识性的事情。难以集中注意力，容易分散或忽略细节；语言表达能力下降；可能迷路、不认识熟悉的地方；可能变得易怒、焦虑、抑郁、不再能准确地判断日期、时间和时间段等。

            </div>    <div class="content-header">参考文献</div>
                <div class="content-literature">
                    1.Vendrik KEW, Ooijevaar RE, de Jong PRC, et al. Fecal Microbiota Transplantation in Neurological Disorders. Front Cell Infect Microbiol. 2020;10:98. Published 2020 Mar 24. doi:10.3389/fcimb.2020.00098.
                  <br/>  2. Xu HM, Huang HL, Zhou YL, et al. Fecal Microbiota Transplantation: A New Therapeutic Attempt from the Gut to the Brain. Gastroenterol Res Pract. 2021;2021:6699268. Published 2021 Jan 16. doi:10.1155/2021/6699268.

                </div>
                <footer-box :data="'41'"/>
            </div>

        </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page41',
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