<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'如何应用微生物医疗',nameEn:'How to apply microbial medicine'}"/>
            <div class="content-text">
                <div>
                    肠道菌群移植属于医疗技术范畴，应在符合管理规范情况下开展。

                </div>
                <div>
                    菌群移植是将从健康人群肠道中提取的功能菌群制备成菌液，通过鼻饲管、肠镜、胶囊等方式移植入患者体内。随着菌群移植产业的蓬勃发展，技术迭代更新，菌群移植胶囊可实现超洁净、无异味，服用方式简易、作用温和，大幅减轻患者心理负担，广受临床及用户青睐。
                </div>

            </div>
            <div class="header-three">实施流程</div>


            <div class="content-text">
                <div>
                    截至2023年6月，在国际临床试验 Clinical Trials 上注册的菌群移植临床研究达453项，超过60个病种。
                </div>
                <div>
                    随着菌群移植不断地向精准化方向发展，越来越多的临床数据累积，针对肠道内疾病治疗的有效率显著提升。
                </div>
                <div>
                    同时，菌群移植对治疗肠道外疾病亦有积极疗效，包括代谢性疾病、精神类疾病、肿瘤免疫治疗等。
                </div>
                在行业共识中，明确其可应用于以下疾病：
                <br/> 1.消化系统疾病：
                <br/> （1）艰难梭状芽胞杆菌感染；
                <br/> （2）溃疡性结肠炎、克罗恩病、功能性便秘、肠易激综合征、菌群紊乱相关腹泻等。
                <br/> 2.肠道菌群紊乱所致的消化系统外疾病：
                <br/> （1）神经系统疾病：帕金森病、阿尔兹海默症、癫痫等。
                <br/> （2）精神系统：自闭症、情绪障碍、多动症、抽动症等。
                <br/> （3）代谢相关疾病：代谢综合征、糖尿病等。
                <br/> （4）肿瘤相关疾病：免疫治疗及放化疗所致肠炎等。

            </div>


            <footer-box :data="'57'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, HeaderTow},
    name:'page57',
    data() {




        return {
            tableList:[
                {name: "弯曲杆菌属 Campylobacter",value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'艰难梭菌(C. difficile)',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'肠沙门氏菌(S. enterica)',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'埃希氏菌属 Escherichia',value:'59.545%',value2:0.1914-14.598,state: 2},


            ],
            list:[{   name:'感染型腹泻',
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
  padding:20px  20px 50px 20px ;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  text-align: justify;
  margin-bottom: 25px;
  line-height: 25px;
  color: #254A96;
  div{
    text-indent: 32px;
  }
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

