<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'炎症性肠病',nameEn:'inflammatory bowel disease'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                炎症性肠病包括溃疡性结肠炎（UC）和克罗恩病（CD）任何年龄均可发病，20~30岁人群较为高发。据统计在亚洲平均人群中每10万人出现该疾病约15例，且呈上升趋势。
            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                临床上，患者会表现为反复的腹痛、腹泻、粘液血便，甚至出现各种全身并发症如视物模糊、关节疼痛、皮疹等。IBD患者肠道不能正常吸收进食的碳水化合物、蛋白质、脂肪、维生素及多种微量元素，加上肠道炎症或服用的药物可能造成食欲不佳，因此IBD常伴随着不同程度的营养不良，甚至影响儿童正常的生长发育。
            </div>
            <div class="header-point">预防</div>
            <div class="content-box">
                在生活中应尽量做到均衡营养、少食多餐，面对压力时放松心情；另外，适当运动可以缓解焦虑，调节免疫系统，有效减轻疾病症状。

            </div>
            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1.Paramsothy,S.,Kamm,M.A.,Kaakoush,N.O.,etal.(2017).Multidonorintensivefaecalmicrobiotatransplantationforactiveulcerativecolitis:arandomisedplacebo-controlledtrial.TheLancet,389(10075),1218-1228. 2.Costello,S.P.,Hughes,P.A.,Waters,O.,etal.(2019).Effectoffecalmicrobiotatransplantationon8-weekremissioninpatientswithulcerativecolitis:arandomizedclinicaltrial.JAMA,321(2),156-164. 3.Rossen,N.G.,Fuentes,S.,vanderSpek,M.J.,etal.(2015).Findingsfromarandomizedcontrolledtrialoffecaltransplantationforpatientswithulcerativecolitis.Gastroenterology,149(1),110-118.e4.

            </div>
            <footer-box :data="'30'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page30',
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
    height: 98px;
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