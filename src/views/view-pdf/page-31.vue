<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'肺部疾病',nameEn:'Thyroid disease'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                目前发现肺部疾病可导致肠道菌群的独特变化，基于我们大规模的样本检测分析发现可能是通过血氧浓度的变化影响的肠道菌群。实践检测发现包括肺炎部分肺癌、肺部结节或肺气肿以及肺结核均会影晌肠道菌群，本检测指标的风险变化可以较好的指示肺部疾病的风险。
            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                肺炎是由细菌、病毒、衣原体和支原体等多种微生物所引起的。主要临床症状是咳嗽、伴或不伴咳痰和胸疼，前驱症状主要有鼻炎样症状或上呼吸道感染的症状，如鼻塞、鼻流清涕、喷嚏、咽干、咽痛、咽部异物感、声音嘶哑、头痛、头昏、眼睛热胀、流泪及轻度咳嗽等。
            </div>
                <div class="content-header">参考文献</div>

            <div class="content-literature">
                1. Chakradhar S. A curious connection: Teasing apart the link between gut microbes and lung disease[J]. 2017.
              <br/>  2. Gray J Oehrle K Worthen G et al. Intestinal commensal bacteria mediate lung mucosal immunity and promote resistance of new born mic to infection[l Science translational medicine, 2017, 9(376): eaaf9412.

            </div>
            <footer-box :data="'31'"/>
        </div>

    </div>

</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page31',
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