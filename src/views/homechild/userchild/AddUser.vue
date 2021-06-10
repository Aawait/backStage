<template>
    <el-row :gutter="24">
        <el-col :span="20">
            <el-form :model="addUserForm"  label-width="80px" :rules="rules">
                <el-form-item label="id" prop="id">
                    <el-input placeholder="请输入身份id" prefix-icon="el-icon-key" v-model.number="addUserForm.id"/>
                </el-form-item>
                <el-form-item label="用户名" prop="UserName">
                    <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="addUserForm.UserName"/>
                </el-form-item>
                <el-form-item label="密码" prop="Password">
                    <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="addUserForm.Password"/>
                </el-form-item>
                <el-form-item label="手机号" prop="Mobile">
                    <el-input placeholder="请输入手机号" prefix-icon="el-icon-mobile" v-model.number="addUserForm.Mobile"/>
                </el-form-item>
                <el-form-item label="电子邮箱" prop="Email">
                    <el-input placeholder="请输入电子邮箱" prefix-icon="el-icon-message" v-model="addUserForm.Email"/>
                </el-form-item>
                <el-form-item label="职位">
                    <el-input placeholder="请输入职位" prefix-icon="el-icon-suitcase" v-model="addUserForm.RoleName"/>
                </el-form-item>
                <el-form-item label="状态">
                    <el-input placeholder="请输入状态" prefix-icon="el-icon-s-opportunity" v-model="addUserForm.MgState"/>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-input  prefix-icon="el-icon-alarm-clock" :value="formatTime"  disabled/>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>


<script>
import rules from './UserRules'
export default {
    name: "AddUser",
    data(){
        return {
             addUserForm: {
                     id: '',
                     UserName: '',
                     Password: '',
                     Mobile: '',
                     Email: '',
                     RoleName: '',
                     CreateTime: '',
                     MgState: '' 
               },
               rules
        }
    },
    computed: {
        formatTime(){
            const time = new Date().toLocaleString()
            const fulltime = time.replace(/\//g,'-')  
            return fulltime
        }
    }
}
</script>