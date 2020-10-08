<template>
  <div id="app">

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
               <el-menu-item index="1-1" @click="toMain">个人项目展示</el-menu-item>
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
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toMain(){
      this.$router.replace("/main")
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
