<template>
    <div>
        <div class="car-box">
            <header-one :data="{name:'您的检测报告总览',nameEn:'Overview of your test report',No:'NO:'+userInfo.sampleid,date:''}"/>
            <div class="content-box">
                <div class="content-header">基本信息</div>
                <div class="content">
                    <div class="left">
                        <div><span>姓名：</span> {{userInfo.sampleusername}}</div>
                        <div><span>年龄：</span> {{userInfo.age}}</div>
                        <div><span>性别：</span> {{userInfo.sex}}</div>
                    </div>
                    <div class="right">
                        <div><span>样本编号：</span> {{ userInfo.sampleid }}</div>
                        <div><span>报告日期：</span> NO:{{ userInfo.reportdate }}</div>
                        <div><span>备注：</span> {{ userInfo.comment }}</div>
                    </div>
                    <div class="bg">
                        <img src="../../assets/img/car-pdf/Basicinformation.png" alt="">
                    </div>
                </div>

            </div>
            <header-tow :data="{name:'报告总结',nameEn:'Report Summary'}"/>
            <div class="content2-box"
            >
                <div class="li-item">
                    <div class="number-btn">1</div>
                    <div class="li-content">
                        {{t1}}
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">2</div>
                    <div class="li-content">
                        {{t2}}
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">3</div>
                    <div class="li-content">
                        {{t3}}
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">4</div>
                    <div class="li-content">
                        {{t4}}
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">5</div>
                    <div class="li-content">
                        {{t5}}
                    </div>
                </div>

            </div>


            <footer-box :data="'02'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, HeaderOne, HeaderTow},
    name: 'page0',
    data() {
        return {
            userInfo:{

            },
            t1:'',
            t2:'',
            t3:'',
            t4:'',
            t5:'',



        }
    },
    created() {
    },
    mounted() {
        this.getData()

    },
    methods: {
    getData(){
        this.$axios.post('/admin/report/report-total',{
            sampleid:this.$route.query.sampleid
        }).then(res=>{

            this.userInfo = res.sampleinfoVo
            this.t1 = res.t1
            this.t2 = res.t1
            this.t3 = res.t3
            this.t4 = res.t4
            this.t5 = res.t5

            this.$EventBus.$emit('userInfo',this.userInfo)

        })
    }
        },
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
    font-family: YouShe;
  height: 200px;
  margin-bottom: 60px;

  .content-header {
    color: #1A356B;
    font-size: 24px;
    font-family: Fotor HelloFont GongYiTi-Regular, Fotor HelloFont GongYiTi;
    letter-spacing: 4px;
    padding-bottom: 10px;

  }

  .content {
    position: relative;
    height: 210px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
    border-radius: 6px 6px 6px 6px;;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    color: #434F65;

    span {
      color: #8989A3;
      letter-spacing: 4px;
    }

    div {
      padding: 10px 0;
    }

    .left {
      width: 50%;
      height: 100%;
      border-radius: 6px 0 0 6px;
      padding: 0 20px;

    }

    .right {
      width: 50%;
      height: 100%;
      padding: 0 20px;
    }

    .bg {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 160px;

      img {
        width: 100%;
        height: 100%;
      }
    }


  }

}

.content2-box {
    font-family: YouShe;
  width: 100%;

  .li-item {
    display: flex;
    justify-content: space-between;
      padding: 20px 0;
  }

  .number-btn {
    width: 33px;
    height: 33px;
    background: #254A96;
    border-radius: 4px 4px 4px 4px;
    color: #ffffff;
    line-height: 32px;
    text-align: center;
  }

  .li-content {
    width: 600px;
    background: rgba(37, 74, 150, 0.05);
    border-radius: 4px 4px 4px 4px;
    line-height: 33px;
    padding: 0 10px;
    color: #353F51;
  }

}


</style>

