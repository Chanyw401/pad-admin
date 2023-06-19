<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'II型糖尿病',nameEn:'Type 2 diabetes'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                II型糖尿病（Type 2 diabetes）是一种慢性代谢性疾病，也被称为成人型糖尿病。它是最常见的糖尿病类型，约占所有糖尿病病例的90-95%。II型糖尿病通常发生在成年人身上，但近年来在青少年和儿童中的发病率也在增加。这种疾病的特征是身体无法正确使用或产生足够的胰岛素。糖尿病可能导致一系列的并发症，包括心血管疾病、中风、肾脏问题、神经损伤、视力问题和下肢截肢。
            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                II型糖尿病中一部分病人以胰岛素抵抗为主，多肥胖，因胰岛素抵抗，胰岛素敏感性下降，血中胰岛素增高以补偿其胰岛素抵抗，但相对病人的高血糖而言，胰岛素分泌仍相对不足。此类病人早期症状不明显，仅有轻度乏力、口渴，常在明确诊断之前就可发生大血管和微血管并发症。饮食治疗和口服降糖药多可有效。

            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1.Liu L, Zhang J, Cheng Y, et al. Gut microbiota: A new target for T2DM prevention and treatment. Front Endocrinol (Lausanne). 2022;13:958218. Published 2022 Aug 11. doi:10.3389/fendo.2022.958218.
             <br/>   2.Cerdas Pérez S. Menopause and diabetes. Climacteric. 2023;26(3):216-221. doi:10.1080/13697137.2023.2184252.

            </div>
            <footer-box :data="'27'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page27',
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