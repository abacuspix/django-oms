webpackJsonp([91],{b11G:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=t("Zk8K"),o={data:function(){return{ruleForm:{platform:"",name:"",m_id:"",three:""},rules:{platform:[{required:!0,message:"请选择一个平台",trigger:"change"}],name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],three:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},platforms:[]}},created:function(){this.getPlatforms()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.$emit("formdata",r.ruleForm),r.ruleForm={platform:"",name:"",m_id:"",three:""}})},resetForm:function(e){this.$refs[e].resetFields()},getPlatforms:function(){var e=this;Object(l.i)().then(function(r){e.platforms=r.data})}}},m=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"platform",prop:"platform"}},[t("el-select",{attrs:{placeholder:"请选择平台"},model:{value:e.ruleForm.platform,callback:function(r){e.$set(e.ruleForm,"platform",r)},expression:"ruleForm.platform"}},e._l(e.platforms,function(e){return t("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"商户id",prop:"m_id"}},[t("el-input",{model:{value:e.ruleForm.m_id,callback:function(r){e.$set(e.ruleForm,"m_id",r)},expression:"ruleForm.m_id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"业务经理",prop:"three"}},[t("el-input",{model:{value:e.ruleForm.three,callback:function(r){e.$set(e.ruleForm,"three",r)},expression:"ruleForm.three"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},a=[],u={render:m,staticRenderFns:a},n=u,i=t("VU/8"),s=i(o,n,!1,null,null,null);r.default=s.exports}});