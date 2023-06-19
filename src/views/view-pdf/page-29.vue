<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'甲状腺疾病',nameEn:'Thyroid disease'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                甲状腺功能亢进症（甲亢）：甲状腺过度活跃，产生过多的甲状腺激素。症状包括焦虑、心悸、体重下降、手颤、多汗和疲劳等。
                甲状腺功能减退症（甲减）：甲状腺功能不足，产生过少的甲状腺激素。症状包括疲劳、体重增加、便秘、皮肤干燥、抑郁等。

            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                怕冷、体重增加、疲倦、消化不良、月经不调等，还会出现皮肤干燥发凉脸手部皮肤水肿，声音嘶哑，毛发稀疏，尤其是眉毛外1/3脱落。

            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1. Knezevic J, Starchl C, Tmava Berisha A, Amrein K. Thyroid-Gut-Axis: How Does the Microbiota Influence Thyroid Function?. Nutrients. 2020;12(6):1769. Published 2020 Jun 12.
               <br/> 2. Fröhlich E, Wahl R. Microbiota and Thyroid Interaction in Health and Disease. Trends Endocrinol Metab. 2019;30(8):479-490.
                <br/>  3. Gong B, Wang C, Meng F, et al. Association Between Gut Microbiota and Autoimmune Thyroid Disease: A Systematic Review and Meta-Analysis. Front Endocrinol (Lausanne). 2021;12:774362. Published 2021 Nov 17.

            </div>
            <footer-box :data="'29'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page29',
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