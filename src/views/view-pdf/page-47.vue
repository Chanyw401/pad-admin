<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'双歧杆菌/肠杆菌（B/E）',nameEn:'Bifidobacterium/Enterobacterium (B/E)'}"/>
            <div class="header-three">相关信息</div>
            <div class="content-box">
                <div>
                    双歧杆菌属/肠杆菌属比值又称B/E比值，是肠道双歧杆菌属（Bifidobacterium）和肠杆菌属（Enterobacteriaceae）细菌相对丰度的比例，
                    健康肠道的B/E比值一般为大于1，B/E大于1说明肠道菌群处于平衡状态，B/E小于1则表示肠道菌群失衡，
                    肠道定植力受损，当比值低于0.01时提示肠道微生态重度失衡。由于B/E比值受到双歧杆菌属和肠杆菌科相对丰度的影响，
                    因此当比值偏离较大时需要关注具体的相对丰度数值。
                </div>
                <div>
                    肠道菌群平衡对应的异常称为肠道菌群失调，
                    临床上有I度失调和更严重的II度失调。大便常规检查是通过显微镜下观察统计染色细菌中杆菌和球菌以及革兰氏阴性和阳性菌的比值是否超标来判别。
                    其中，致病菌多为球菌和革兰氏阴性菌，而肠道有益菌多为杆菌和阳性菌，因而在传统临床上较为粗放的比较两者的比值评估是否肠道菌群环境出现了紊乱。

                </div>
            </div>
            <div class="header-three">
                检测结果
            </div>
            <div class="content2-box">
                <div class="left">
                    <PieContainerChart :dataList="list"/>
                </div>
                <div class="right">
                    <img src="../../assets/img/bacteria-bg.png" class="bacteria-bg" alt="">
                    <div class="text-bg">RATIO OF <br/> FIRMICUTESTO BACTEROIDER <br/> (E/B) </div>
                    <div class="right-content">
                        <div class="right-header">您的菌群偏向于：  <span class="name-btn">{{ name }}</span></div>
                        <div class="font-title" style="margin-top: 50px">您的厚壁菌/拟杆菌比值为</div>
                        <div class="number-btn"><div>{{ userInfo.bpEpValue }}</div></div>
                        <div class="font-title" style="margin-top: 10px">中国人平均的厚壁菌/拟杆菌比例为</div>
                        <div class="number-btn"><div>{{userInfo.beValue }} </div></div>
                    </div>
                </div>
            </div>

            <footer-box :data="'47'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import PieContainerChart from "@/components/Echart/pieContainerChart.vue";

export default {
    components: {FooterBox, HeaderTow, PieContainerChart},
    name: 'page47',
    data() {
        return {
            tableList: [
                {name: '厚壁菌门 Firmicutes', value: '59.545%', value2: 15},
                {name: '拟杆菌门 Bacteroidetes', value: '59.545%', value2: 35},
                {name: '变形菌门 Proteobacteria', value: '59.545%', value2: 45},
                {name: '放线菌门 Actinobacteria', value: '59.545%', value2: 55},
                {name: '螺旋体 Spirochaetes', value: '59.545%', value2: 100},
            ],
            userInfo:{
                fpbpValue:0,
            },
            name:'',
            colorList: ['#CA3E54', '#475276', '#8989A3', '#2E5CBB', '#E1E4EA'],
            list: [{
                "name": "双歧杆菌",
                "value": 50,
                "number": 100,
                itemStyle: {
                    // 透明度
                    opacity: .8,
                    // 扇形颜色
                    color: '#CA3E54',
                }
            },  {
                "name": "肠杆菌",
                "value": 5,
                "number": 100,
                itemStyle: {
                    // 透明度
                    opacity: .8,
                    // 扇形颜色
                    color: '#475276',
                }
            }]


        }
    },
    created() {
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.post('/admin/report/b-e',  {sampleid:this.$route.query.sampleid}).then(res=>{
                console.log(res,'99999')
                if(res.bp>res.ep){
                    this.name='双歧杆菌'
                }else {
                    this.name='肠杆菌'
                }
                this.list[0].value=res.bp
                this.list[1].value=res.ep

                this.userInfo = res
            })

        }
    }
}
</script>

<style scoped lang="scss">
.theader {
  width: 100%;
  display: flex;
  color: #ffffff;
  background: url(../../assets/img/car-pdf/car-content2-header.png) no-repeat;
  height: 34px;
  line-height: 34px;
  background-size: cover;
  border-radius: 4px;
}

.t-body {
  width: 100%;

  .item {
    display: flex;
    align-content: center;
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #434F65;
    background: #e1e4ea;
    margin: 10px 0;
    border-radius: 4px;

    div {
    }
  }

  .item:nth-child(2n) {
    background: rgba(37, 74, 150, .2);
  }

  ::v-deep.el-progress__text {
    color: #2E5CBB !important;
    font-size: 11px !important;
  }
}

.content-box {
  padding: 20px;
  height: 300px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
  border-radius: 6px 6px 6px 6px;
  margin-bottom: 30px;
  text-align: justify;
  color: #1A356B;

  div {
    text-indent: 32px;
  }


}

.content2-box {
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;

  .left {
    width: 50%;
    height: 100%;
    border-radius: 6px 0 0 6px;
  }

  .right {
    position: relative;
    width: 50%;
    height: 100%;
    //background: #e1e4ea;
    border-radius: 0 6px 6px 0;

    .right-content {
      text-align: right;
    }

    .bacteria-bg {
      position: absolute;
        top: -47px;
        left: -29px;
    }
      .text-bg{
          position: absolute;
          bottom: -146px;
         right: 0;
          width: 150%;
          color: rgba(111, 127, 159, .1);
          text-align: right;
          font-size: 28px;
          white-space: nowrap;
      }
      .name-btn{
          padding: 5px 15px;
          font-size: 28px;
          background: rgba(203, 66, 87, .1);
          color: rgba(202, 62, 84, 1) !important;
          border-radius: 4px;
      }
      .font-title{
          font-size: 18px;
          color: rgba(111, 127, 159, 1);
          margin: 10px 0;
          text-align: left;
          padding-left: 20px;
          line-height: 50px;
      }
      .number-btn{
          font-size: 28px;
          color: rgba(37, 74, 150, 1);
          margin: 10px 0;
          text-align: center;
          padding-left: 20px;
          display: flex;
          justify-content: center;
          div{
              background: rgba(37, 74, 150, .1);
              padding: 3px 10px;
              border-radius: 4px;
              width: 80px;
          }
      }

    .bacteria-text-bg {
      position: absolute;
      bottom: 50px;
      left: 50px;
    }

    .right-header {
      color: #6F7F9F;
      font-size: 24px;
    }

  }
}


</style>

