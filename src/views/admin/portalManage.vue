<template>
    <div class="container">

        <!--  新闻列表展示      -->
            <div class="table-page">
                <div class="table-search-box">
                    <el-form :inline="true" :model="searchData" @submit.native.prevent>
                        <el-form-item label="样本编号：">
                            <el-input
                                v-model="searchData.title"
                                placeholder="请输入"
                                maxlength="100"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="姓名：">
                            <el-input
                                v-model="searchData.title"
                                placeholder="请输入"
                                maxlength="100"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="送检方：">
                            <el-input
                                v-model="searchData.title"
                                placeholder="请输入"
                                maxlength="100"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="样本状态：">
                            <el-select v-model="searchData.bannerStatus"
                                       placeholder="请选择" clearable="">
                                <el-option label="未设置" value="0"></el-option>
                                <el-option label="已设置" value="1"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="search()">查 询</el-button>
                            <el-button @click="resetNews">重 置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="table-box">
                        <div class="table-box-head">
                            <div class="table-box-operate">
                                <el-button type="primary" @click="importBox.show=true">
                                    批量导入
                                    <i class="btn-icon btn-icon-import-white el-icon--right"></i>
                                </el-button>

                                <el-button type="primary"  @click="add()">
                                    新增
                                    <i class="btn-icon btn-icon-new-white el-icon--right"></i>
                                </el-button>
                                <el-button @click="delNewsBatch">
                                    批量删除
                                    <i class="btn-icon btn-icon-delete el-icon--right"></i>
                                </el-button>
                            </div>
                            <div class="table-box-title">{{queryNewsTitle}}</div>
                        </div>
                    <el-table ref="table" :data="tableObj.list" stripe>
                        <el-table-column type="selection" width="100px"></el-table-column>
                        <el-table-column
                            prop="index"
                            label="序号"
                            align="center"
                            show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column
                                prop="title"
                                label="样本编号"
                                align="center"
                                show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column
                                prop="menuName"
                                label="姓名"
                                align="center"
                                show-overflow-tooltip
                                width="80px"
                        ></el-table-column>
                        <el-table-column
                                prop="coverUrl"
                                align="center"
                                label="年龄"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="source"
                                label="性别"
                                align="center"
                                show-overflow-tooltip
                                width="110px"
                        ></el-table-column>
                        <el-table-column
                                prop="releaseStatus"
                                label="送检方"
                                align="center"
                                show-overflow-tooltip
                                width="80px"
                        >

                        </el-table-column>
                        <el-table-column
                                prop="topStatus"
                                label="样本状态"
                                align="center"
                                show-overflow-tooltip
                                width="80px"
                        >
                            <template slot-scope="scope">
                                <span style='color: #a9a7a7' v-if="scope.row.topStatus === 0">未置顶</span>
                                <span style='color: green' v-if="scope.row.topStatus === 1">已置顶</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="bannerStatus"
                                label="备注"
                                align="center"
                                show-overflow-tooltip
                                width="80px"
                        >
                            <template slot-scope="scope">
                                <span style='color: #a9a7a7' v-if="scope.row.bannerStatus === 0">未设置</span>
                                <span style='color: green' v-if="scope.row.bannerStatus === 1">已设置</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="releaseTime"
                                label="更新时间"
                                align="center"
                                width="160px"
                                show-overflow-tooltip
                        >
                            <template slot-scope="scope">
                                {{ scope.row.releaseTime.replace("T", " ") }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="releaseStatus"
                            label="更新人"
                            align="center"
                            show-overflow-tooltip
                            width="80px"
                        >
                        </el-table-column>
                        <el-table-column label="操作" width="100px" align="center" fixed="right">
                            <template slot-scope="scope">

                                <i class="btn-icon btn-icon-edit"
                                   title="编辑"
                                   @click="edit"
                                ></i>

                                <i class="btn-icon btn-icon-edit"
                                   title="删除"
                                   @click="delNews([scope.row.id])"
                                ></i>
                            </template>
                        </el-table-column>
                    </el-table>
                    <table-page
                            :current-page.sync="searchData.pageNum"
                            :page-size.sync="searchData.pageSize"
                            :total="tableObj.total"
                            layout="total, prev, pager, next"
                            :change="search"
                    ></table-page>
                </div>
            </div>

        <!-- 介绍操作弹出层      -->
        <el-dialog
                :title="uploadBox.title"
                :visible.sync="uploadBox.show"
                :close-on-click-modal="false"
                width="600px">
            <el-form
                    ref="uploadBox"
                    :model="uploadBox"
                    label-width="120px">
                <el-form-item label="样本编号：" prop="title">
                    <el-input
                            v-model.trim="uploadBox.title"
                            placeholder="请输入"
                            maxlength="100"
                            show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="姓名：" prop="title">
                    <el-input
                        v-model.trim="uploadBox.title"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="送检方：" prop="title">
                    <el-input
                        v-model.trim="uploadBox.title"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="备注：" prop="title">
                    <el-input
                        v-model.trim="uploadBox.title"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>

            </el-form>
            <div class="tx-center">
                <el-button type="primary" @click="submitIntroduceInfo">确定</el-button>
                <el-button @click="introduceInfoShow = false">取消</el-button>
            </div>
        </el-dialog>
        <el-dialog
            :title="userInfoBox.title"
            :visible.sync="userInfoBox.show"
            :close-on-click-modal="false"
            width="800px">
            <el-form
                ref="uploadBox"
                :model="uploadBox"
                label-width="120px">
                <div class="line-title">基本消息</div>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="姓名：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="样本编号：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="年龄：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="报告日期：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="性别：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="备注：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="line-title">报告总结</div>
                <el-form-item label="" prop="title">
                    <el-input
                        type="textarea"
                        v-model.trim="uploadBox.title"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <div class="line-title">您的结果预览</div>
                <el-form-item label="菌群健康：" prop="title">
                <el-input
                    v-model.trim="uploadBox.title"
                    placeholder="请输入"
                    maxlength="100"
                    show-word-limit
                ></el-input>
                </el-form-item>
                <el-form-item label="疾病管理：" prop="title">
                    <el-input
                        v-model.trim="uploadBox.title"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="营养评估：" prop="title">
                    <el-input
                        v-model.trim="uploadBox.title"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <div class="line-title">肠道菌群总结状况</div>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="检测到菌种数量：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="肠道类型：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="line-title">肠道菌群类型及分散图</div>
                <el-row :gutter="20">
                    <el-col :span="4">
                        菌群平衡：
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="进度条：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="评分：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="状态：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        菌群多样性：
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="进度条：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="评分：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="状态：" prop="title">
                            <el-input
                                v-model.trim="uploadBox.title"
                                placeholder="请输入"
                                maxlength="100"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>




            </el-form>
            <div class="tx-center">
                <el-button type="primary" @click="submitIntroduceInfo">确定</el-button>
                <el-button @click="introduceInfoShow = false">取消</el-button>
            </div>
        </el-dialog>


        <import-templet
            v-model="importBox.show"
            :url="importBox.url"
            :file="importBox.templet"
            :on-success="onSuccessImport"
        ></import-templet>

    </div>
</template>
<script>


export default {
    components: {
    },
    data() {
        return {
            tableObj: {
                total: 0,
                list: [],
            },
            searchData: {
                title: "",
                releaseStatus: null,
                bannerStatus: null,
                menuId: null,
                pageNum: 1,
                pageSize: 10,
            },
            importBox:{
                show:false,
                url:"/admin/news/import",
                templet:"/static/templet/news.xlsx"
            },
            uploadBox:{
                title:'新增用户',
                show:false,
                data:{
                    menuId:null,
                    title:null,
                    source:null,
                    releaseTime:null,
                    coverUrl:null,
                    content:null,
                },
                },
            userInfoBox:{
                title:'用户详情',
                show:false,
                data:{
                    menuId:null,
                    title:null,
                    source:null,
                    releaseTime:null,
                    coverUrl:null,
                    content:null,
                },
            }

        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        onSuccessImport(res){
            if (!res) {
                this.$tool.msg({
                    type: 'success',
                    message: '部分导入成功,部分账号格式不对无法导入'
                });
            }
            this.searchData.pageNum = 1;
            this.search();
        },

        // 重置新闻搜索
        resetNews() {
            this.searchData.pageNum = 1;
            this.searchData.loginName = "";
            this.searchData.title = "";
            this.searchData.releaseStatus = null;
            this.searchData.bannerStatus = null;
        },
        delNewsBatch(){},
        search(){

        },
        add(){
            // this.uploadBox.show =true
            this.userInfoBox.show =true
        }



    }
};
</script>

<style scoped>
.container {
    height: 100%;
    border-right: 1px solid #e6e6e6;
    margin-top: 30px;
    width: 99%;
}


.left {
    float: left;
    width: 15%;
}

.right {
    float: right;
    width: 85%;
}

.avatar-uploader {
    border: 1px dashed #d9d9d9;
    width: 80px;
    height: 80px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
}

.avatar {
    width: 150px;
    height: 80px;
    display: block;
}
.line-title{
    font-weight: bold;
    font-size: 20px;
    margin: 15px 0;
}
</style>
