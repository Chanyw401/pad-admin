<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'属',nameEn:'Belong to'}" />
            <div class="header-three" style="margin: 20px 0"> 检查结果</div>

            <div>
                <div class="theader">
                    <div style="width: 35%;text-align: left;padding-left: 30px">名称</div>
                    <div style="width: 10%;text-align: center ">丰度%</div>
                    <div style="width: 40%;text-align: center "> 人群水平%</div>
                    <div style="width: 10%;text-align:center">%人检出</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList2   " :key="index" class="item">
                        <div style="width: 35%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 10%;text-align: center ">{{item.value}}</div>
                        <div style="width: 40%;text-align: left;   padding-top: 17px;padding-right: 15px;padding-left: 30px ">
                            <el-progress :percentage="item.value2" :stroke-width="8" color="#2E5CBB"></el-progress>
                        </div>
                        <div style="width: 10%;text-align:center;">
                            {{item.value2}}
                        </div>
                    </div>
                </div>
            </div>
            <footer-box :data="52"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page52',
    data() {
        return {
            tableList:[
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'螺旋体 Spirochaetes',value:'59.545%',value2:0.1914-14.598,state: 1},
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:0.1914-14.598,state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:0.1914-14.598,state:0},

            ],
            tableList2:[
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:55,state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:44,state:0},
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:33,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:1,state: 2},
                {name:'螺旋体 Spirochaetes',value:'59.545%',value2:100,state: 1},
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:55,state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:44,state:0},
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:33,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:1,state: 2},
                {name:'螺旋体 Spirochaetes',value:'59.545%',value2:100,state: 1},
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:55,state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:44,state:0},
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:33,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:1,state: 2},
              
            ]



        }
    },
}
</script>

<style scoped lang="scss">
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





</style>

