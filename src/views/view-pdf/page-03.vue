<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'您的结果总览',nameEn:'OVERVIEW OF YOUR RESULT'}" />
      <div class="car-content1">
        <div class="left">
          <div class="left-item" >菌群健康: <span>{{numberObject.floraHealth}}分</span></div>
          <div class="left-item" >疾病管理: <span style="color: #254A96">{{numberObject.diseaseManagement}}分</span></div>
          <div class="left-item" >营养评估: <span style="color: #254A96">{{ numberObject.nutritionAssessment }}分</span></div>
        </div>
        <div class="right">
          <div class="right-titlt">健康总分</div>
          <div class="echart-box">
            <instrument-panel :number="numberObject.healthScore" v-if="numberObject.healthScore != ''" />
          </div>
        </div>

      </div>
      <!--      <div class="car-header2">-->
      <!--        肠道菌群总体状况 <span class="title-en">OVERALL STATUS OF GUTMICROBIOTA</span>-->
      <!--      </div>-->
      <header-tow :data="{name:'肠道菌群总体状况',nameEn:'OVERALL STATUS OF GUTMICROBIOTA'}"></header-tow>
      <div class="car-content2">
        <div class="car-content2-header">
          <div class="left">肠道预测年龄：</div>
          <div>{{dataInfo.reportTotalTwoDetailVo.age}} </div>
          <div class="right">肠道类型：</div>
          <div>{{ ettypeName(dataInfo.ettype) }} </div>
        </div>
        <div class="content">
          <div class="left">
            <div>
              <div class="item">
                  检测到菌种数量：<span class="number">  {{dataInfo.reportTotalTwoDetailVo.jnum}}</span> <span  class="btn" :class=" dataInfo.reportTotalTwoDetailVo.jnum<800?'btn-warning':'btn-success'">{{dataInfo.reportTotalTwoDetailVo.jnumStr}}</span>
              </div>
              <div class="item">
                  香浓多样性指数：<span class="number"> {{mzsNumber}}  </span>  <span class="btn" :class="mzsNumber<2 || mzsNumber>9  ?'btn-warning':'btn-success'">{{ dataInfo.reportTotalTwoDetailVo.mzsStr }}</span>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="circle" ref="circle"></div>
            <div class="cicle-bg">
              <img src="@/assets/img/car-pdf/circle-bg.png" alt=""></div>
          </div>
        </div>

      </div>
      <header-tow :data="{name:'肠道菌群类型及分散图',nameEn:'TYPE OF OUT MICROBIOTA  '}"></header-tow>
      <div class="car-content3">
          <production-beat :data="tableObj.list" />

      </div>
  <footer-box :data="'03'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import * as echarts from "echarts";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
  components: {FooterBox, ProductionBeat, InstrumentPanel, HeaderOne, HeaderTow},
  name:'pageOne',
  data() {
    return {
        dataInfo:{
            ettype: "ET_P",
            reportTotalTwoDetailVo:{
                age:'',
                jnum:'',
                mzs:'',
                jnumStr:'',
                mzsStr:'',

            },
            reportTypeVos:[],
            totalScore:[]
        },
      tableObj:{
        list:[
        ]
      },
      option : {

        tooltip: {},

        radar: {
          shape: 'circle',
          indicator: [
            { name: '普氏菌型', max: 50},
            { name: '拟杆菌型', max: 50},
            { name: '胃球菌型', max: 50},

          ],
          radius: 80,
          name:{
            color:'rgba(111, 127, 159, 1)'
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(230, 232, 238, .1)',
              shadowBlur: 10
            },
            show:false
          },
          axisLine: {
            lineStyle: {
              color: '#0095B0'
            },
            show:false
          },
          splitLine: {
            lineStyle: {
              color: '#333'
            },
            show:false
          }
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              color: 'rgba(37, 74, 150, .2)',
            },

            emphasis: {
              color: 'rgba(6, 222, 249,0.5)',
            }
          },
          lineStyle: {
            normal: {
              color: 'rgba(37, 74, 150, 1)',
              type: 'solid',
              width: 2
            },
            emphasis: {}
          },
          // areaStyle: {normal: {}},
          data : [
            {
              value : [100, 60, 30],
              name : '预算分配（Allocated Budget）'
            },

          ]
        }]
      },
        echarList:[],
      echart:null,
        numberObject:{
            floraHealth:'',//菌群健康
            diseaseManagement:'',//疾病管理
            nutritionAssessment:'',//营养评估
            healthScore:'',//健康总分
        }
    }
  },
    created() {
    },
    methods: {
        getData(){
            this.$axios.post('/admin/report/report-total-two',{
                sampleid:this.$route.query.sampleid
            }).then(res=>{
                console.log({res})
                this.dataInfo = res

                this.numberObject.floraHealth = res.totalScore.find(item=>item.name=='菌群健康')?.value
                this.numberObject.diseaseManagement = res.totalScore.find(item=>item.name=='慢病管理')?.value
                this.numberObject.nutritionAssessment = res.totalScore.find(item=>item.name=='营养饮食')?.value
                this.numberObject.healthScore = Number(res.totalScore.find(item=>item.name=='健康总分')?.value)

                this.$nextTick(()=>{
                    this.echarList = [res.reportTotalTwoDetailVo.list2.length,res.reportTotalTwoDetailVo.list1.length,res.reportTotalTwoDetailVo.list3.length]

                    this.echarts = echarts.init(this.$refs.circle);
                    this.option.series[0].data[0].value = this.echarList
                    this.option.radar.indicator.map(
                        i=>{
                            // echarList 最大的值
                            i.max = Math.max(...this.echarList)*1.2
                        }
                    )
                    this.echarts.setOption(this.option);
                })
                //肠道菌群类型及分散图
                let list = []
                res.reportTypeVos.map(i=>{
                    let type = 0
                    let btnName= ''
                    if(i.resultVos[0].name == '菌群平衡'){
                        if(i.resultVos[0].valueDecimal <10){
                            type = 0
                            btnName = '严重失调'
                        }
                      if(i.resultVos[0].valueDecimal>=10 && i.resultVos[0].valueDecimal <20){
                          type =0
                          btnName = '中度失衡'
                      }
                        if(i.resultVos[0].valueDecimal>=20 && i.resultVos[0].valueDecimal <30){
                            type =0
                            btnName = '轻度失衡'
                        }
                        if(i.resultVos[0].valueDecimal>=30  ){
                            type =1
                            btnName = '稳定'
                        }



                    }
                    if(i.resultVos[0].name == '菌群多样性'){

                        if(i.resultVos[0].valueDecimal <5){
                            type = 0
                            btnName = '菌群脆弱'
                        }
                        if(i.resultVos[0].valueDecimal>=5 && i.resultVos[0].valueDecimal <15){
                            type =0
                            btnName = '较单一'
                        }
                        if(i.resultVos[0].valueDecimal>=15 && i.resultVos[0].valueDecimal <50){
                            type =0
                            btnName = '多样性较低'
                        }
                        if(i.resultVos[0].valueDecimal>=50  ){
                            type =1
                            btnName = '稳定'
                        }
                    }
                    if(i.resultVos[0].name == '有益菌'){
                        if(i.resultVos[0].valueDecimal <5){
                            type = 0
                            btnName = '过低'
                        }
                        if(i.resultVos[0].valueDecimal>=5 && i.resultVos[0].valueDecimal <20){
                            type =0
                            btnName = '偏低'
                        }

                        if(i.resultVos[0].valueDecimal>=20  ){
                            type =1
                            btnName = '健康'
                        }
                    }
                    if(i.resultVos[0].name == '有害菌控制'){
                        if(i.resultVos[0].valueDecimal <40){
                            type =1
                            btnName = '健康'
                        }
                        if(i.resultVos[0].valueDecimal>=40 && i.resultVos[0].valueDecimal <90){
                            type =0
                            btnName = '偏高'
                        }

                        if(i.resultVos[0].valueDecimal>=90  ){
                            type =0
                            btnName = '过高'
                        }
                    }
                   list.push({
                       num:i.resultVos[0].valueDecimal,
                       name:i.resultVos[0].name,
                       type:type,
                       btnName:btnName
                   })
                })
                this.tableObj.list = list


            })
        },
        ettypeName(e){
            let val =''
            if(e == 'ET_B'){
                val = '拟杆菌型'
            }
            if(e == 'ET_F'){
                val = '厚壁菌型'
            }
            if(e == 'ET_P'){
                val = '普雷沃氏菌型'
            }
            console.log(val,e,'1')
            return val
        }

    },
    computed:{
        mzsNumber(){
          return Number(this.dataInfo.reportTotalTwoDetailVo.mzs).toFixed(2)
          //偏少：低于200/较少：200-800/健康：大于800
      },
       
    },
  mounted() {
      this.getData()
  }
}
</script>

<style scoped lang="scss">
.car-content1{
  display: flex;
  justify-content: space-between;
  height: 200px;
  .left{
    position: relative;
    padding: 20px;
    width: 40%;
    height: 100%;
    color: rgba(111, 127, 159, 1);
    letter-spacing: 2px;
    font-size: 18px;
    .left-item{
      margin-bottom: 29px;


      span{
        color: red;
      }
    }
    &:after{
      position: absolute;
      content: '';
      top:56px;
      right: 0;
      width: 1px;
      height: 60px;
      background: linear-gradient(180deg, rgba(111,127,159,0) 0%, #6F7F9F 49%, rgba(111,127,159,0) 100%);
      border-radius: 0px 0px 0px 0px;
      opacity: 0.5;
    }
  }
  .right{
    width: 60%;
    height: 100%;
    position: relative;
    .right-titlt{
      position: absolute;
      left: 20px;
      width: 78px;
      height: 28px;
      background: #e1e5eb;
      border-radius: 6px 6px 6px 6px;
      position: absolute;
      color: #254A96;
      line-height: 28px;
      text-align: center;
    }
    .echart-box {
      width: 100%;
      height: 100%;
    }
  }
}
.car-content2{
  height: 280px;
  .car-content2-header{
    width: 100%;
    height: 42px;
    border-radius: 4px;
    background: url("../../assets/img/car-pdf/car-content2-header.png")  no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    margin-bottom: 30px;
  }
  .content{
    height: 185px;
    display: flex;
    justify-content: space-between;
    .left{
      width: 50%;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/img/car-pdf/left-bg.png")  no-repeat;
      background-size: cover;
      color: #6F7F9F;
      font-size: 18px;
      background-size: 100% 100%;
      .item{
        margin-bottom: 20px;
        span{
          color: #254A96;
        }
      }
    }
    .right {
      width: 50%;
      position: relative;
      .circle{
        position: absolute;
        width: 300px;
        height: 300px;
        top: -50px;
        left: 50px;
        z-index: 99;
      }
      .cicle-bg{
        position: absolute;
        left: 109px;
        top: 2px;
      }
    }

  }
}
.car-content3{
  height:180px;
}
.btn {
  width: 58px;
  height: 20px;
  border-radius: 63px 63px 63px 63px;
  font-size: 12px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  letter-spacing: 2px;
  margin-left: 5px;
}
.btn-warning {
  background: rgba(202, 62, 84, .2);
  color: #CA3E54 !important;
}
.btn-success {
  background: rgba(37, 74, 150, .2);
  color: #254A96 !important;
}
.number{
  min-width: 40px;
  display: inline-block;
}

</style>

