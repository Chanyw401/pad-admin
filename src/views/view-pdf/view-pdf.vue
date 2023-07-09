<template>
  <div>
      <page-instructions/>
      <page0/>
    <page-one />
    <page-two />
    <page-thre />
      <page6 />
      <page07/>
      <Page08/>
      <page09/>
      <page10 :listInfo="listInfo" v-if="age>=30" />
      <page11 v-if="age>=30" />
      <page12 :listInfo="listInfo"/>
      <page13/>
      <page14 :listInfo="listInfo"/>
      <page15/>
      <page16 :listInfo="listInfo" />
      <page17 />
      <page18 :listInfo="listInfo" v-if="age>=15"/>
      <page19  v-if="age>=15"/>
      <page20 :listInfo="listInfo" v-if="age>=25"/>
      <page21 v-if="age>=25"/>
      <page22 v-if="age>=15" :listInfo="listInfo"/>
      <page23 v-if="age>=15"/>
      <page24 v-if="age>=21" :listInfo="listInfo"/>
      <page25 v-if="age>=21"/>
      <page26 v-if="age>=21" :listInfo="listInfo"/>
      <page27  v-if="age>=21"/>
      <page28  v-if="age>=1" :listInfo="listInfo"/>
      <page29  v-if="age>=1"/>
      <page30 :listInfo="listInfo"/>
      <page31/>
      <page32 :listInfo="listInfo"  v-if="age>=6"/>
      <page33  v-if="age>=6"/>
      <page34  v-if="age<=15" :listInfo="listInfo"/>
      <page35  v-if="age<=15"/>
      <page36  v-if="age>=21" :listInfo="listInfo"/>
      <page37  v-if="age>=21"/>
      <page38  v-if="age>=5" :listInfo="listInfo"/>
      <page39  v-if="age>=5"/>
      <page40  v-if="age>=56" :listInfo="listInfo"/>
      <page41  v-if="age>=56"/>
      <page42/>
      <page43/>
      <page44/>
      <page45/>
      <page46/>
      <page47/>
      <page48/>
      <page49/>
      <page50/>
      <page51/>
      <page52/>
      <page53/>
      <page54/>
      <page55/>
      <page56/>
      <page57/>






  </div>
</template>

<script>
import PageOne from "@/views/view-pdf/page-03.vue";
import PageTwo from "@/views/view-pdf/page-04.vue";
import PageThre from "@/views/view-pdf/page-05.vue";
import Page6 from "@/views/view-pdf/page-06.vue";
import Page22 from "@/views/view-pdf/page-22.vue";
import Page0 from "@/views/view-pdf/page-02.vue";
import page10 from "@/views/view-pdf/page-10.vue";
import Page08 from "@/views/view-pdf/page-08.vue";
import PageInstructions from "@/views/view-pdf/page-01.vue";
import Page07 from "@/views/view-pdf/page-07.vue";
import Page09 from "@/views/view-pdf/page-09.vue";
import Page11 from "@/views/view-pdf/page-11.vue";
import Page12 from "@/views/view-pdf/page-12.vue";
import Page13 from "@/views/view-pdf/page-13.vue";
import Page14 from "@/views/view-pdf/page-14.vue";
import Page15 from "@/views/view-pdf/page-15.vue";
import Page16 from "@/views/view-pdf/page-16.vue";
import Page17 from "@/views/view-pdf/page-17.vue";
import Page18 from "@/views/view-pdf/page-18.vue";
import Page19 from "@/views/view-pdf/page-19.vue";
import Page20 from "@/views/view-pdf/page-20.vue";
import Page21 from "@/views/view-pdf/page-21.vue";
import Page23 from "@/views/view-pdf/page-23.vue";
import Page24 from "@/views/view-pdf/page-24.vue";
import Page25 from "@/views/view-pdf/page-25.vue";
import Page26 from "@/views/view-pdf/page-26.vue";
import Page27 from "@/views/view-pdf/page-27.vue";
import page29 from "@/views/view-pdf/page-29.vue";
import page28 from "@/views/view-pdf/page-28.vue";
import page30 from "@/views/view-pdf/page-30.vue";
import Page31 from "@/views/view-pdf/page-31.vue";
import Page32 from "@/views/view-pdf/page-32.vue";
import Page33 from "@/views/view-pdf/page-33.vue";
import Page34 from "@/views/view-pdf/page-34.vue";
import Page35 from "@/views/view-pdf/page-35.vue";
import Page36 from "@/views/view-pdf/page-36.vue";
import Page37 from "@/views/view-pdf/page-37.vue";
import Page38 from "@/views/view-pdf/page-38.vue";
import Page39 from "@/views/view-pdf/page-39.vue";
import Page40 from "@/views/view-pdf/page-40.vue";
import Page41 from "@/views/view-pdf/page-41.vue";
import Page42 from "@/views/view-pdf/page-42.vue";
import Page43 from "@/views/view-pdf/page-43.vue";
import Page44 from "@/views/view-pdf/page-44.vue";
import Page45 from "@/views/view-pdf/page-45.vue";
import Page46 from "@/views/view-pdf/page-46.vue";
import Page47 from "@/views/view-pdf/page-47.vue";
import Page48 from "@/views/view-pdf/page-48.vue";
import Page49 from "@/views/view-pdf/page-49.vue";
import Page50 from "@/views/view-pdf/page-50.vue";
import Page51 from "@/views/view-pdf/page-51.vue";
import Page52 from "@/views/view-pdf/page-52.vue";
import Page53 from "@/views/view-pdf/page-53.vue";
import Page54 from "@/views/view-pdf/page-54.vue";
import Page55 from "@/views/view-pdf/page-55.vue";
import Page56 from "@/views/view-pdf/page-56.vue";
import Page57 from "@/views/view-pdf/page-57.vue";

export default {
  components: {
      Page57,
      Page56,
      Page55,
      Page54,
      Page50,
      Page51,
      Page52,
      Page53,
      Page49,
      Page48,
      Page47,
      Page46,
      Page45,
      Page44,
      Page43,
      Page42,
      Page41,
      Page40,
      Page39,
      Page38,
      Page37,
      Page36,
      Page35,
      Page34,
      Page33,
      Page32,
      Page31,
      page29,
      page28,
      page30,
      Page27,
      Page26,
      Page25,
      Page24,
      Page23,
      Page21,
      Page20,
      Page19,
      Page18,
      Page17,
      Page16,
      Page15,
      Page14,
      Page13,
      Page12,
      Page11,
      Page09,
      Page07,
      PageInstructions,
      Page08,
      page10,
      Page0,
      Page22,
    Page6,
    PageThre,
    PageTwo,
    PageOne,
  },

  data() {
    return {
        age:'',
        listInfo: [],
    };
  },
    created() {
      sessionStorage.setItem('token', this.$route.query.token)



    },
    mounted() {
        this.$axios.post('/admin/report/disease', {
            sampleid: this.$route.query.sampleid
        }).then(res => {
            let list =[]
            res.resultVos.map(i => {
                let type =0 // 0 为eroor 1 为正常
                let btnName = '低风险'
                if(i.valueDecimal<0.3){
                    type = 1
                    btnName = '低风险'
                }
                if(i.valueDecimal>=0.3 && i.valueDecimal<0.5){
                    type = 0
                    btnName = '注意'
                }
                if(i.valueDecimal>=0.5 && i.valueDecimal<0.7){
                    type = 0
                    btnName = '中等风险'
                }
                if(i.valueDecimal>=0.7){
                    type = 0
                    btnName = '高风险'
                }
                list.push({
                    num:i.valueDecimal.toFixed(2),
                    name:i.name,
                    type:type,
                    btnName:btnName
                })
            })
            this.listInfo = list
        })
      this.$axios.post('/admin/report/report-total',{
          sampleid:this.$route.query.sampleid
      }).then(res=>{
          // age 去掉岁 并转化成数字

          this.age = res.sampleinfoVo.age.replace(/岁/g,'')
          this.$nextTick(()=>{
              const footer = document.querySelectorAll('.footer-text')
              // 变量给 footer赋值

              footer.forEach((item,index)=>{

                  item.innerHTML = index<9 ?'0'+ (index+1) : index+1
              })

          })


      })
    }

};
</script>

<style scoped lang="scss">
//.car-content1{
//  display: flex;
//  justify-content: space-between;
//  height: 200px;
//  .left{
//    position: relative;
//    padding: 20px;
//    width: 40%;
//    height: 100%;
//    color: rgba(111, 127, 159, 1);
//    letter-spacing: 2px;
//    font-size: 18px;
//    .left-item{
//      margin-bottom: 29px;
//
//      span{
//        color: red;
//      }
//    }
//    &:after{
//      position: absolute;
//      content: '';
//      top:56px;
//      right: 0;
//      width: 1px;
//      height: 60px;
//      background: linear-gradient(180deg, rgba(111,127,159,0) 0%, #6F7F9F 49%, rgba(111,127,159,0) 100%);
//      border-radius: 0px 0px 0px 0px;
//      opacity: 0.5;
//    }
//  }
//  .right{
//    width: 60%;
//    height: 100%;
//    position: relative;
//    .right-titlt{
//      position: absolute;
//      left: 20px;
//      width: 78px;
//      height: 28px;
//      background: #e1e5eb;
//      border-radius: 6px 6px 6px 6px;
//      position: absolute;
//      color: #254A96;
//      line-height: 28px;
//      text-align: center;
//    }
//    .echart-box {
//      width: 100%;
//      height: 100%;
//    }
//  }
//}
//.car-content2{
//  height: 280px;
//  .car-content2-header{
//    width: 100%;
//    height: 42px;
//    border-radius: 4px;
//    background: url("../../assets/img/car-pdf/car-content2-header.png")  no-repeat;
//    background-size: cover;
//    display: flex;
//    align-items: center;
//    justify-content: space-around;
//    color: #ffffff;
//    margin-bottom: 30px;
//  }
//  .content{
//    height: 185px;
//    display: flex;
//    justify-content: space-between;
//    .left{
//      width: 50%;
//      padding: 20px;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      background: url("../../assets/img/car-pdf/left-bg.png")  no-repeat;
//      background-size: cover;
//      color: #6F7F9F;
//      font-size: 18px;
//      .item{
//        margin-bottom: 20px;
//        span{
//          color: #254A96;
//        }
//      }
//    }
//    .right {
//      width: 50%;
//    }
//
//  }
//}
//.car-content3{
//  height:180px;
//}
//.btn {
//  width: 58px;
//  height: 20px;
//  border-radius: 63px 63px 63px 63px;
//  font-size: 12px;
//  display: inline-block;
//  text-align: center;
//  line-height: 20px;
//  letter-spacing: 2px;
//  margin-left: 5px;
//}
//.btn-warning {
//  background: rgba(202, 62, 84, .2);
//  color: #CA3E54 !important;
//}
//.btn-success {
//  background: rgba(37, 74, 150, .2);
//  color: #254A96 !important;
//}
</style>

