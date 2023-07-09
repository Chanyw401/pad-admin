<template>
    <div class="table-page">
        <div class="table-box">
            <div class="table-box-head">
                <div class="table-box-operate">
                    <el-button type="primary" @click="add">
                        新增
                        <i class="btn-icon btn-icon-new-white el-icon--right"></i>
                    </el-button>
                    <el-button @click="delBatch">
                        批量删除
                        <i class="btn-icon btn-icon-delete el-icon--right"></i>
                    </el-button>
                </div>
                <div class="table-box-title">用户列表</div>
            </div>
            <el-table ref="table" :data="tableObj.list" stripe>
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column
                        prop="loginName"
                        label="账号"
                        align="center"
                        show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                        label="账号名称"
                        align="center"
                >
                    <template slot-scope="scope">
                        {{ scope.row.userName ? scope.row.userName : "——" }}
                    </template>
                </el-table-column>
<!--                <el-table-column-->
<!--                        label="账号类型"-->
<!--                        align="center"-->
<!--                >-->
<!--                    <template slot-scope="scope">-->
<!--                        {{ scope.row.userType == 1 ? '超级管理员' : '管理员' }}-->
<!--                    </template>-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="status"-->
<!--                        label="账号状态"-->
<!--                        align="center"-->
<!--                >-->
<!--                    <template slot-scope="scope">-->
<!--                        {{ scope.row.status == 1 ? '启用' : "禁用" }}-->
<!--                    </template>-->
<!--                </el-table-column>-->
                <el-table-column width="160px" label="操作" align="center">
                    <template slot-scope="scope">
<!--                        <i v-if="scope.row.status == 0  && scope.row.userType != 1"-->
<!--                                class="btn-icon el-icon-turn-off"-->
<!--                                title="启用"-->
<!--                                @click="userStatus(scope.row.id,1)"-->
<!--                        ></i>-->
<!--                        <i v-if="scope.row.status == 1  && scope.row.userType != 1"-->
<!--                                class="btn-icon el-icon-open"-->
<!--                                title="禁用"-->
<!--                                @click="userStatus(scope.row.id,0)"-->
<!--                        ></i>-->

                        <i
                            class="btn-icon btn-icon-edit"
                                title="编辑"
                                @click="edit(scope.row)"
                        ></i>
                        <i
                                class="btn-icon btn-icon-delete"
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
                    :change="search"
            ></table-page>
        </div>
        <el-dialog
                :title="uploadBox.title"
                :visible.sync="uploadBox.show"
                :close-on-click-modal="false"
                width="600px"
                @opened="opened"
        >
            <el-form
                    ref="uploadBox"
                    :model="uploadBox.data"
                    :rules="uploadBox.rules"
                    label-width="120px"
            >
                <el-form-item label="账号名称：" prop="userName">
                    <el-input
                        v-model.trim="uploadBox.data.userName"
                        placeholder="请输入"
                        maxlength="100"
                        show-word-limit
                    ></el-input>
                </el-form-item>

                <el-form-item label="账号：" prop="loginName">
                    <el-input
                            v-model.trim="uploadBox.data.loginName"
                            placeholder="请输入"
                            maxlength="100"
                            show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item label="账号密码：" prop="passWord" >
                    <el-input
                            v-model.trim="uploadBox.data.passWord"
                            placeholder="请输入"
                    ></el-input>
                </el-form-item>


            </el-form>
            <div class="tx-center">
                <el-button type="primary" @click="submitUpload">确定</el-button>
                <el-button @click="uploadBox.show = false">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "UserManage",
    computed: {
        ...mapGetters(["userType"])
    },
    data() {
        return {
            searchData: {
                name: "",
                loginName: "",
                status: "",
                type: "",
                pageNum: 1,
                pageSize: 10,
            },
            tableObj: {
                total: 0,
                list: [],
            },
            uploadBox: {
                show: false,
                title: "编辑",
                data: {
                    id: undefined,
                    loginName: "",
                    passWord: "",
                    status: "1",
                    userName: "",
                    userType: ""
                },
                rules: {
                    loginName: [{required: true, message: "账号不能为空！", trigger: 'blur'}],
                    passWord: [{required: true, message: "账号密码不能为空！", trigger: 'blur'}],
                    userName: [{required: true, message: "账号名称不能为空！", trigger: 'blur'}],
                },
            },
            roleType: 0
        };
    },
    created() {
        this.search();
    },
    methods: {
        // 弹框开启后重置校验规则
        opened() {
            this.$refs.uploadBox.clearValidate();
        },
        // 用户启用
        userStatus(id, status) {
            this.$axios
                .post("/admin/user/disable-enabled", {id: id, status: status}, {
                    loading: true,
                })
                .then(() => {
                    this.$tool.msg({
                        type: 'success',
                        message: status ? "启用成功！" : "禁用成功！"
                    });
                    this.search()
                })
        },
        search(type) {
            if (type == "search") {
                this.searchData.pageNum = 1;
            }
            this.$axios
                .post("/admin/user/page", this.searchData, {
                    loading: true,
                })
                .then((res) => {
                    this.tableObj.list = res.list || [];
                    this.tableObj.total = res.total;
                });
        },
        // 提交
        submitUpload() {
            this.$refs.uploadBox.validate((valid, field) => {
                if (valid) {
                    var url = "/admin/user/add";
                    if (this.uploadBox.data.id != undefined) {
                        url = "/admin/user/update";
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
        // 打开新增/编辑弹框
        add() {
            this.uploadBox.title = "新增用户";
            this.uploadBox.show = true;
            this.uploadBox.data.id = undefined;
            Object.assign(this.uploadBox.data, this.$options.data().uploadBox.data)
        },
        edit(row) {
            this.uploadBox.title = "编辑用户";
            this.uploadBox.show = true;
            this.uploadBox.data.id = row.id;
            for (let key in this.uploadBox.data) {
                this.uploadBox.data[key] = row[key]
            }
        },
        // 批量/单个删除
        delBatch() {
            let select = this.$refs.table.selection;
            let selectIds = [];
            let msg = '';
            select.forEach((item) => {
                if (item.userType == 1) {
                    msg = '超级管理员不可删除！'
                }
                selectIds.push(item.id);
            });
            if (msg) {
                this.$tool.msg({
                    type: "error",
                    message: msg,
                });
                return
            }
            this.del(selectIds);
        },
        del(ids) {
            if (ids.length) {
                this.$tool.confirm().then(() => {
                    this.$axios
                        .post(
                            "/admin/user/del",
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

    },
};
</script>

<style lang="scss" scoped>
/deep/ .el-date-editor.el-input,
/deep/ .el-date-editor.el-input__inner {
    width: 100%;
}
</style>
