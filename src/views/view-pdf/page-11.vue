<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'结直肠癌',nameEn:'Colorectal cancer'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                结直肠癌是消化道恶性肿瘤，主要发生在结肠和直肠，多发生在50至70岁，其发病率和病死率在消化系统恶性肿瘤中仅次于胃癌、食管癌和原发性肝癌。
            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                临床上，结直肠癌的症状包括持续或间歇性的便秘或腹泻、粪便中出现鲜红色或黑色的血液、持续或加重的腹部疼痛或胀痛、触摸腹部时可能感觉到硬块、经常感觉需要排便但实际上并不需要、未作任何努力而出现的明显体重减轻、长时间感觉疲惫或虚弱以及由于慢性出血引起的贫血
            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1. Arthur, Janelle C, et al. "Intestinal inflammation targets cancerinducing activity of the microbiota. science 338.6103(2012): 120-123.
                <br/>2. Rowland, Ian R."The role of the gastrointestinal micro biota inutical design 15.13(2009): 1524.
                <br/> 3. Flemer Burkhardt et al. "Tumour-associated and non-tumourassociated microbiota in colorectal cancer." Gut(2016): gutjnI-2015.
                <br/>4. Konstantinov, Sergey R, Ernst J. Kuipers, and Maikel P. PeppelenboschNature Reviews Gastroenterology Hepatology 10.12 (2013): 741-745.

            </div>
            <footer-box :data="'11'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page11',
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