<template>
  <el-container class="home_container">
    <el-header style="padding: 0px">
      <div>
        <span>项目管理平台</span>
      </div>
      <el-button type="info">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">


          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>项目管理</span>
              </template>
              <el-menu-item index="1-1">个人项目进度</el-menu-item>
              <el-menu-item index="1-2">部门项目展示</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-check"></i>
                <span>项目审批</span>
              </template>
              <el-menu-item index="2-1">项目审批</el-menu-item>
            </el-submenu>
          </el-menu>
      </el-aside>
      <el-main style="padding: 0px;display: inline-block">
        <div  style="background-color: rgb(249, 249, 249);padding-left: 0">
          <span class="xm_class" >项目管理</span> <hr style="color: aliceblue">
        </div>

        <div class="btns_class">
          <template>
            &nbsp;
          <span  style="font-size: 13px;margin-top: 4px;margin-bottom: 4px">项目负责人：</span>
          <el-input placeholder="请输入内容" size="mini" style="width: 100px"/>
          </template>
          &nbsp;&nbsp;&nbsp;
          <template>
            <span  style="font-size: 13px;margin-top: 4px;margin-bottom: 4px">项目类别：</span>
            <el-select style="width: 120px" size="mini" v-model="typeValue" placeholder="请选择">
              <el-option
                v-for="item in typeOption"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>&nbsp;&nbsp;&nbsp;

          <template>
            <span  style="font-size: 13px;margin-top: 4px;margin-bottom: 4px">优先级：</span>
            <el-select style="width: 120px" size="mini" v-model="levelValue" placeholder="请选择">
              <el-option
                v-for="item in levelOption"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>&nbsp;&nbsp;&nbsp;

          <template>
            <span  style="font-size: 13px;margin-top: 4px;margin-bottom: 4px">是否为重大项目：</span>
            <el-select style="width: 120px" size="mini" v-model="isImportantValue" placeholder="请选择">
              <el-option
                v-for="item in importantOption"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>&nbsp;&nbsp;&nbsp;

          <template>
            <span  style="font-size: 13px;margin-top: 4px;margin-bottom: 4px">项目进度状态：</span>
            <el-select style="width: 120px" size="mini" v-model="speedValue" placeholder="请选择">
              <el-option
                v-for="item in speedOption"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>&nbsp;&nbsp;&nbsp;

          <div style="margin-left: 30px">
            <el-button size="mini">查询</el-button>
          </div>
        </div>
        <hr>

        <div class="fun_btns">
          <el-button size="mini"  icon="el-icon-circle-plus">录入</el-button>
          <el-button  size="mini" class="el-icon-edit">编辑项目</el-button>
          <el-button  size="mini" icon="el-icon-finished">项目归档</el-button>
          <el-button  size="mini" icon="el-icon-search">查看项目</el-button>
          <el-button  size="mini" icon="el-icon-top">导出项目</el-button>
        </div>
        <el-divider ></el-divider>

<!--        table显示域-->
        <div>
          <template>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              border
              style="width: 100%">
              <el-table-column
                type="selection">
              </el-table-column>
              <el-table-column
                prop="projectId"
                label="项目编号">
              </el-table-column>

              <el-table-column
                prop="projectName"
                label="项目名称">
              </el-table-column>

              <el-table-column
                prop="projectCharger"
                label="项目负责人">
              </el-table-column>

              <el-table-column
                prop="projectType"
                label="项目类别">
              </el-table-column>

              <el-table-column
                prop="projectCreateDate"
                label="项目创建时间">
              </el-table-column>

              <el-table-column
                prop="projectFinishingDate"
                label="项目计划时间">
              </el-table-column>

              <el-table-column
                prop="projectLevel"
                label="优先级">
              </el-table-column>

              <el-table-column
                prop="isImportant"
                label="是否重大项目">
              </el-table-column>

              <el-table-column
                prop="finishedData"
                label="归档资料">
              </el-table-column>

              <el-table-column
                prop="projectCharger"
                label="归档人">
              </el-table-column>
              <el-table-column
                prop="projectCurrentDetail"
                label="当前进度描述">
              </el-table-column>
            </el-table>
          </template>
        </div>


      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            typeValue:'',
            levelValue:'',
            isImportantValue:'',
            speedValue:'',
            typeOption:[
              {
                value:'系统维护类',
                label:'系统维护类'
              },
              {
                value: '系统升级类',
                label: '系统升级类'
              },
              {
                value: '业务流程类',
                label: '业务流程类'
              },
              {
                value: 'ot类',
                label: 'ot类'
              },
              {
                value: '新系统升级类',
                label: '新系统升级类'
              },
              {
                value: '新技术研究类',
                label: '新技术研究类'
              },
              {
                value: '基础拓展类',
                label: '基础拓展类'
              },
              {
                value: '管理类',
                label: '管理类'
              }
            ],

            levelOption:[
              {
              value:'一级',
              label:'一级'
              },
              {
                value: '二级',
                label: '二级'
              },
              {
                value: '三级',
                label: '三级'
              }
            ],

            importantOption:[
              {
                value:'是',
                label:'是'
              },
              {
                value: '否',
                label: '否'
              }
            ],

            speedOption:[
              {
                value:'全部',
                label:'全部'
              },
              {
                value: '已完成',
                label: '已完成'
              },
              {
                value: '未完成',
                label: '未完成'
              }
            ],

            tableData: [ ],
          }
      },
      methods: {

      }
    }
</script>

<style scoped>

  .el-header {
    background-color: rgb(67,142,185);
    display: flex;
    justify-content: space-between;
    /*padding-left: 30px;*/
    align-items: center;
    color: #fff;
    font-size: 20px;
  }
  .el-aside {
    background-color: #333744;
  }

  .home_container {
    margin-top: -50px;
    height: 100%;
  }
  .el-main {
    display: flex;
  }
  .xm_class {
    padding-left: -100px;
  }

  .btns_class {
    display: flex;
    justify-content: flex-start;
  }
  .hr {
    background-color: aliceblue;
  }

  .fun_btns{
    display: flex;
    justify-content: flex-start;
    padding-left: 5px;
  }


</style>
