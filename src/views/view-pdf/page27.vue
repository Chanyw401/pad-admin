<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'疾病相关菌',nameEn:'Disease related bacteria'}" />
            <div>
                <div class="theader">
                    <div class="theader_item" style="width: 8%;text-align: center;padding-left: 30px"><div class="theader_text">名称</div></div>
                    <div class="theader_item" style="width: 8%;text-align: center;padding-left: 30px"><div class="theader_text">结果</div></div>
                    <div class="theader_item" style="width: 8%;text-align: center;padding-left: 30px"><div class="theader_text">正常范围</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>
                    <div class="theader_item" style="width: 4%;text-align: center;padding-left: 30px"><div class="theader_text">我是疾病名称</div></div>

                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 40%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 15%;text-align: center ">{{item.value}}</div>
                        <div style="width: 15%;text-align: center ">
                            {{item.state == 0 ?'-': item.state ==1? '↓' : '↑'}}
                        </div>
                        <div style="width: 30%;text-align:center;">
                            {{item.value2}}
                        </div>
                    </div>
                </div>

            </div>
            <footer-box :data="'27'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page27',
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
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'螺旋体 Spirochaetes',value:'59.545%',value2:0.1914-14.598,state: 1},
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:0.1914-14.598,state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:0.1914-14.598,state:0},
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
            ]



        }
    },
}
</script>

<style scoped lang="scss">
.theader{
  width: 100%;
  display: flex;
  color: #434F65;
  height: auto;
  padding-bottom: 10px;
  border-bottom: 2px solid #254A96;
  line-height: 12px;
  font-size: 12px;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 20px;
  // 字体竖排
  .theader_item{
  display: flex;
  justify-content: center;
  align-items: flex-end;
}



}
.t-body{
  width: 100%;

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


}





</style>

