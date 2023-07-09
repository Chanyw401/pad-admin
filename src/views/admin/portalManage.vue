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
                                <el-button @click="delBatch">
                                    批量删除
                                    <i class="btn-icon btn-icon-delete el-icon--right"></i>
                                </el-button>
                            </div>
                            <div class="table-box-title">报告管理</div>
                        </div>
                    <el-table ref="table" :data="tableObj.list" stripe>
                        <el-table-column type="selection" width="100px"></el-table-column>
                        <el-table-column
                            type="index"
                            label="序号"
                            align="center"
                            show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column
                                prop="sampleid"
                                label="样本编号"
                                align="center"
                                show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column
                                prop="sampleusername"
                                label="姓名"
                                align="center"
                                show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column
                                prop="age"
                                align="center"
                                label="年龄"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sex"
                                label="性别"
                                align="center"
                                show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column
                                prop="checker"
                                label="送检方"
                                align="center"
                                show-overflow-tooltip
                        >

                        </el-table-column>
                        <el-table-column
                                prop="samplestatus"
                                label="样本状态"
                                align="center"
                                show-overflow-tooltip
                        >

                        </el-table-column>
                        <el-table-column
                                prop="remark"
                                label="备注"
                                align="center"
                                show-overflow-tooltip
                        >

                        </el-table-column>
                        <el-table-column
                                prop="binddate"
                                label="更新时间"
                                align="center"
                                show-overflow-tooltip
                        >

                        </el-table-column>
                        <el-table-column
                            prop="releaseStatus"
                            label="更新人"
                            align="center"
                            show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column label="操作" width="140px" align="center" fixed="right">
                            <template slot-scope="scope">
                                <i
                                    v-if="scope.row.samplestatus == ''"
                                    class="btn-icon btn-icon-reback"
                                   title="同步"
                                   @click="reback(scope.row)"
                                ></i>
                                <i class="btn-icon btn-icon-down"
                                   title="下载"
                                   @click="pdf(scope.row)"
                                ></i>

                                <i class="btn-icon btn-icon-edit"
                                   title="编辑"
                                   @click="edit(scope.row)"
                                ></i>

                                <i class="btn-icon btn-icon-delete"
                                   title="删除"
                                   @click="del([scope.row.id])"
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
                    :model="uploadBox.data"
                    :rules="uploadBox.rules"
                    label-width="120px">
                <el-form-item label="样本编号：" prop="sampleid">
                    <el-input
                        :disabled="uploadBox.data.id"
                            v-model.trim="uploadBox.data.sampleid"
                            placeholder="请输入"
                            maxlength="100"
                            show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="姓名：" prop="sampleusername">
                    <el-input
                        v-model.trim="uploadBox.data.sampleusername"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="送检方：" prop="checker">
                    <el-input
                        v-model.trim="uploadBox.data.checker"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="备注：" prop="remark">
                    <el-input
                        v-model.trim="uploadBox.data.remark"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>

            </el-form>
            <div class="tx-center">
                <el-button type="primary" @click="submitUpload">确定</el-button>
                <el-button @click="uploadBox = false">取消</el-button>
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
                <el-button type="primary" @click="add">确定</el-button>
                <el-button @click="uploadBox.show = false">取消</el-button>
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
                url:"/admin/sample/import",
                templet:"/static/templet/news.xlsx"
            },
            uploadBox:{
                type:'add',
                title:'新增用户',
                show:false,
                data:{
                    "checker": "",
                    "remark": "",
                    "sampleid": "",
                    "sampleusername": "",
                    id:undefined
                },
                rules:{
                    sampleid: [
                        { required: true, message: '请输入样本编号', trigger: 'blur' },
                    ],
                    sampleusername: [
                        { required: true, message: '请输入样本姓名', trigger: 'blur' },
                    ],
                    checker: [
                        { required: true, message: '请输入检测人', trigger: 'blur' },
                    ],
                    remark: [
                        { required: true, message: '请输入备注', trigger: 'blur' },
                    ],

                }
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
        this.search()
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
        // 批量/单个删除
        delBatch() {
            let select = this.$refs.table.selection;
            let selectIds = [];
            select.forEach((item) => {
                selectIds.push(item.id);
            });
            this.del(selectIds);
        },
        del(ids) {
            if (ids.length) {
                this.$tool.confirm().then(() => {
                    this.$axios
                        .post(

                            "/admin/sample/del",
                            {
                                ids: ids,
                            },
                            {
                                loading: true,
                            }
                        )
                        .then(() => {
                            this.search();
                            this.$tool.msg({
                                type: "success",
                                message: "删除成功",
                            });
                        });
                });
            } else {
                this.$tool.msg({
                    type: "warning",
                    message: "请选择一条或多条数据！",
                });
            }
        },
        search(type){
            if (type == "search") {
                this.searchData.pageNum = 1;
            }
            this.$axios
                .post("/admin/sample/page", this.searchData, {
                    loading: true,
                })
                .then((res) => {
                    this.tableObj.list = res.list || [];
                    this.tableObj.total = res.total;
                });
        },
        add(){
            Object.assign(this.uploadBox.data, {
                "checker": "",
                "remark": "",
                "sampleid": "",
                "sampleusername": "",
                id:undefined
            })
            this.uploadBox.type ='add'
            this.uploadBox.title ='新增'
            this.uploadBox.show =true
            // this.userInfoBox.show =true
        },
        // 提交
        submitUpload() {
            this.$refs.uploadBox.validate((valid, field) => {
                if (valid) {
                    var url = "/admin/sample/add";
                    if (this.uploadBox.data.id != undefined) {
                        url = "/admin/sample/update";
                    }
                    this.$axios
                        .post(url, this.uploadBox.data, {
                            loading: true,
                        })
                        .then(() => {
                            this.uploadBox.show = false;
                            if (!this.uploadBox.data.id) {
                                this.searchData.pageNum = 1;
                            }
                            this.search();
                            this.$tool.msg({
                                type: "success",
                                message: this.uploadBox.data.id ? "修改成功" : "新增成功",
                            });
                        });
                } else {
                    let firstField;
                    for (let key in field) {
                        firstField = field[key];
                        break;
                    }
                    this.$tool.msg({
                        type: "error",
                        message: firstField[0].message,
                    });
                    return false;
                }
            });
        },
        // 重置搜索
        reset() {
            this.searchData.pageNum = 1;
            this.searchData.loginName = "";
            this.searchData.userName = "";
            this.searchData.userType = "";
            this.searchData.status = "";
            this.search();
        },
        pdf(row){
            // window.open(`${window.location.origin}/#/pdf?sampleid=${row.sampleid}&token=${sessionStorage.getItem('token')}`)
            window.open(window.location.origin+'/admin/sample/down-pdf?sampleid='+row.sampleid+'&token='+sessionStorage.getItem('token'))
        },
        reback(row){
            this.$axios.post('/gh/sych',{sampleid:row.id}).then(()=>{
                this.search()
                this.$tool.msg({
                    type: "success",
                    message: "数据同步成功",
                });
            })
        },
        edit(row){
            this.uploadBox.type = "edit";
            this.uploadBox.title = "编辑";
            this.uploadBox.show = true;
            this.uploadBox.data.id = row.id;
            for (let key in this.uploadBox.data) {
                this.uploadBox.data[key] = row[key]
            }
        },



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
