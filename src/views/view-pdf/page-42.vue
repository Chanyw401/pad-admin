<template>
    <div>
        <div class="car-box">
            <header-one :data="{name:'您的肠道菌群构造',nameEn:'The structure of your gut flora'}"/>
            <header-tow :data="{name:'菌群构成桑基图',nameEn:'The flora constitute the Sankey map'}"/>
            <div ref="sankey" class="sankey"/>
            <footer-box :data="'42'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import * as echarts from "echarts";
import HeaderOne from "components/pdf-common/header-one.vue";

export default {
    components: {HeaderOne, FooterBox, HeaderTow},
    name: 'page42',
    data() {
        return {
            echarts: null,
            // datalist: [
            //     {
            //         name: "公共平台"
            //     },
            //     {
            //         name: "系统0000"
            //     },
            //     {
            //         name: "系统0011"
            //     },
            //     {
            //         name: "系统0022"
            //     },
            //     {
            //         name: "系统0033"
            //     },
            //     {
            //         name: "系统0044"
            //     },
            //     {
            //         name: "系统0055"
            //     }, {
            //         name: "系统11"
            //     },
            //     {
            //         name: "系统22"
            //     },
            //     {
            //         name: "系统33"
            //     },
            //     {
            //         name: "系统44"
            //     },
            //     {
            //         name: "系统55"
            //     },
            //     {
            //         name: "系统66"
            //     },
            //     {
            //         name: "系统77"
            //     },
            //     {
            //         name: "系统88"
            //     },
            //     {
            //         name: "系统99"
            //     }
            // ],
            // linksData: [
            //     {
            //         source: "公共平台",
            //         target: "系统0000",
            //         value: 1044305
            //     },
            //     {
            //         source: "公共平台",
            //         target: "系统0011",
            //         value: 651527
            //     },
            //     {
            //         source: "公共平台",
            //         target: "系统0022",
            //         value: 651527
            //     },
            //     {
            //         source: "公共平台",
            //         target: "系统0033",
            //         value: 486710
            //     },
            //     {
            //         source: "公共平台",
            //         target: "系统0044",
            //         value: 212670
            //     },
            //     {
            //         source: "公共平台",
            //         target: "系统0055",
            //         value: 210400
            //     }, {
            //         source: "系统0011",
            //         target: "系统11",
            //         value: 645246
            //     },
            //     {
            //         source: "系统0022",
            //         target: "系统22",
            //         value: 513275
            //     },
            //     {
            //         source: "系统0011",
            //         target: "系统33",
            //         value: 1111
            //     },
            //     {
            //         source: "系统0011",
            //         target: "系统44",
            //         value: 118655
            //     },
            //     {
            //         source: "系统0022",
            //         target: "系统55",
            //         value: 105989
            //     },
            //     {
            //         source: "系统0022",
            //         target: "系统66",
            //         value: 95100
            //     },
            //     {
            //         source: "系统0033",
            //         target: "系统77",
            //         value: 87796
            //     },
            //     {
            //         source: "系统0044",
            //         target: "系统88",
            //         value: 47658
            //     },
            //     {
            //         source: "系统0055",
            //         target: "系统99",
            //         value: 243660
            //     },
            //
            //
            // ],
            // Color: [
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#61FEFF",
            //     "#937FE6",
            //     "#2B56D3",
            //     "#87E7AA",
            //     "#937FE6",
            //     "#FF9B97",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            // ],
            // Color1: [
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //     "#04E0F3",
            //     "#682EFC",
            //     "#35A7FE",
            //     "#0DC09F",
            //     "#682EFC",
            //     "#ED6663",
            //     "#8f23f5",
            //     "#0576ea",
            //     "#2cb8cf",
            //     "#8A7EE0",
            //     "#2cb8cf",
            //     "#4e70f0",
            //     "#1fa3de",
            //     "#bbc951",
            //     "#FFC14B",
            //     "#b785a6",
            //
            // ],
            // sourceLabel: [
            //     "left",
            //     "left",
            //     "left",
            //     "left",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right",
            //     "right"
            // ],
            itemStyleColor: [],
            labelSource: [],


        }
    },
    mounted() {
        this.$axios.post('/admin/report/abundance', {
            sampleid: this.$route.query.sampleid
        }).then(
            res => {
                console.log(res,'555555555555555555555')
                let datalist = []
                let linksData = res
                linksData.map(i=>{
                    if(i.target =="k_细菌"){
                        i.value =''
                    }
                })
                res.map(i => {
                    // 去重 有重复的不添加
                    if (!datalist.some(item => item.name === i.target)) {
                        datalist.push({
                            name: i.target
                        })
                    }
                })
                let Color = [
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#937FE6",
                    "#2B56D3",
                    "#87E7AA",
                    "#937FE6",
                    "#FF9B97",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",

                ];
                let Color1 = [
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",      "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",
                    "#CA3E54",
                    "#682EFC",
                    "#35A7FE",
                    "#0DC09F",
                    "#682EFC",
                    "#ED6663",
                    "#8f23f5",
                    "#0576ea",
                    "#2cb8cf",
                    "#8A7EE0",
                    "#2cb8cf",
                    "#4e70f0",
                    "#1fa3de",
                    "#bbc951",
                    "#FFC14B",
                    "#b785a6",


                ];
                // let sourceLabel = [
                //     "left",
                //     "right",
                //     "left",
                //     "left",
                //     "left",
                //     "left",
                //     "left",
                //     "right",
                //     "right",
                //     "right",
                //     "right",
                //     "right",
                //     "right",
                //     "right",
                //     "right",
                //     "right"
                // ];
                let itemStyleColor = [];
                let labelSource = [];
                for (let i = 0; i < datalist.length; i++) {
                    datalist[i].label = {
                        normal: {
                            position: "right",
                        }
                    };
                    labelSource.push("right");
                }
                for (let d = 0; d < datalist.length; d++) {
                    datalist[d].itemStyle = {
                        normal: {
                            // color: Color[d]
                            color: {
                                type: "linear",
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: Color[d], // 0% 处的颜色
                                        opacity: .5,
                                    },
                                    {
                                        offset: 0,
                                        color: Color1[d], // 100% 处的颜色
                                        opacity: .5,
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        }
                    };
                    itemStyleColor.push(datalist[d]);
                }
                let option = {

                    tooltip: {
                        trigger: "item",
                        triggerOn: "mousemove",
                        formatter: function (params) {
                            if (params.name == "k细菌") {
                                return " k细菌 "
                            } else {
                                let value = params.data.value;
                                if (!value && value !== 0) return 0;
                                let str = value.toString();
                                let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
                                if (params.data.source == "k细菌") {
                                    return params.data.target + " : " + str.replace(reg, "$1,");
                                } else {
                                    return params.data.source + " : " + str.replace(reg, "$1,");
                                }
                            }
                        }
                    },
                    series: [{
                        type: "sankey",
                        layout: "none",
                        top: "4%",
                        bottom: "12%",
                        left: "0",
                        right: "20%",
                        nodeGap: 15,
                        nodeWidth: 25,
                        focusNodeAdjacency: "allEdges",
                        data: itemStyleColor,
                        links: linksData,
                        label: {
                            normal: {
                                color: "#1A356B",
                                fontSize: 10,
                                rich: {
                                    white: {
                                        fontSize: 16,
                                        lineHeight: 30,
                                        padding: [0, 0, 0, -26]
                                    }
                                }
                            }
                        },
                        lineStyle: {
                            normal: {
                                opacity: 0.4,
                                color: '#ACACC1',
                                curveness: 0.5
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: "transparent"
                            }
                        }
                    }]
                };
                this.echarts = echarts.init(this.$refs.sankey);
                this.echarts.setOption(option);
            }
        )
        // let datalist = [
        //     {
        //         name: "公共平台"
        //     },
        //     {
        //         name: "系统0000"
        //     },
        //     {
        //         name: "系统0011"
        //     },
        //     {
        //         name: "系统0022"
        //     },
        //     {
        //         name: "系统0033"
        //     },
        //     {
        //         name: "系统0044"
        //     },
        //     {
        //         name: "系统0055"
        //     },{
        //         name: "系统11"
        //     },
        //     {
        //         name: "系统22"
        //     },
        //     {
        //         name: "系统33"
        //     },
        //     {
        //         name: "系统44"
        //     },
        //     {
        //         name: "系统55"
        //     },
        //     {
        //         name: "系统66"
        //     },
        //     {
        //         name: "系统77"
        //     },
        //     {
        //         name: "系统88"
        //     },
        //     {
        //         name: "系统99"
        //     }
        // ];
        // let linksData = [
        //     {
        //         source: "公共平台",
        //         target: "系统0000",
        //         value: 1044305
        //     },
        //     {
        //         source: "公共平台",
        //         target: "系统0011",
        //         value: 651527
        //     },
        //     {
        //         source: "公共平台",
        //         target: "系统0022",
        //         value: 651527
        //     },
        //     {
        //         source: "公共平台",
        //         target: "系统0033",
        //         value: 486710
        //     },
        //     {
        //         source: "公共平台",
        //         target: "系统0044",
        //         value: 212670
        //     },
        //     {
        //         source: "公共平台",
        //         target: "系统0055",
        //         value: 210400
        //     }, {
        //         source: "系统0011",
        //         target: "系统11",
        //         value: 645246
        //     },
        //     {
        //         source: "系统0022",
        //         target: "系统22",
        //         value: 513275
        //     },
        //     {
        //         source: "系统0011",
        //         target: "系统33",
        //         value: 1111
        //     },
        //     {
        //         source: "系统0011",
        //         target: "系统44",
        //         value: 118655
        //     },
        //     {
        //         source: "系统0022",
        //         target: "系统55",
        //         value: 105989
        //     },
        //     {
        //         source: "系统0022",
        //         target: "系统66",
        //         value: 95100
        //     },
        //     {
        //         source: "系统0033",
        //         target: "系统77",
        //         value: 87796
        //     },
        //     {
        //         source: "系统0044",
        //         target: "系统88",
        //         value: 47658
        //     },
        //     {
        //         source: "系统0055",
        //         target: "系统99",
        //         value: 243660
        //     },
        // ];

    }
}
</script>

<style scoped lang="scss">
.sankey {
  width: 100%;
  height: 84%;

}


</style>

