<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'肾病',nameEn:'nephropathy'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                肾病包括慢性肾病、急性肾损伤、肾小球肾炎、肾小管酸中毒、肾囊肿病、肾结石、肾血管性疾病、肾移植后并发症等。引起肾病的原因多种，如高血压、糖尿病、免疫系统疾病、遗传因素、药物等。常见的治疗措施包括药物治疗、控制基础疾病（如糖尿病、高血压）、饮食调整、限制盐分和液体摄入、透析和肾移植等。

            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                常见的肾病症状包括尿液异常（如血尿、蛋白尿、尿量减少）、水肿、疲劳、贫血、高血压、骨质疏松等。通常，当尿液中出现大量泡沫以及尿中见血色或夜尿增多，即尿常规检查尿中出现尿蛋白和红细胞，则可能为肾病早期发生的预警信号。有尿液异常时，建议就医检查诊断。

            </div> <div class="content-header">参考文献</div>
                <div class="content-literature">
                    1.Bian J, Liebert A, Bicknell B, Chen XM, Huang C, Pollock CA. Faecal Microbiota Transplantation and Chronic Kidney Disease. Nutrients. 2022;14(12):2528. Published 2022 Jun 17. doi:10.3390/nu14122528.
                  <br/>  2.Cao C, Zhu H, Yao Y, Zeng R. Gut Dysbiosis and Kidney Diseases. Front Med (Lausanne). 2022;9:829349. Published 2022 Mar 3. doi:10.3389/fmed.2022.829349.

                </div>
                <footer-box :data="'37'"/>
            </div>

        </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page37',
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