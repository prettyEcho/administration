<template>
  <div id="wrapper">
  <!-- navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="brand">
        ***后台管理系统
      </div>
      <div class="container-fluid">
        <div id="navbar-menu">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#"><span class="glyphicon glyphicon-cog"></span> <span>设置</span></a>
            </li>
            <li class="dropdown">
              <a href="#"><span class="glyphicon glyphicon-user"></span> <span>echo</span></a>
            </li>
            <li class="dropdown">
              <a href="#"><span class="glyphicon glyphicon-off"></span> <span>注销</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- sidebar -->
    <div id="sidebar-nav" class="sidebar">
      <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 95%;"><div class="sidebar-scroll" style="overflow: hidden; width: auto; height: 95%;">
        <nav>
          <ul class="nav">
            <li><router-link to="/elements" :class="{ active: isActive == 'elements' }" @click="getItem('elements')"><i class="lnr lnr-code"></i> <span>元素</span></router-link></li>
            <li><router-link to="/nav" :class="{ active: isActive == 'nav' }" @click="getItem('nav')"><i class="lnr lnr-alarm"></i> <span>导航</span></router-link></li>
            <li><router-link to="/panel" :class="{ active: isActive == 'panel' }" @click="getItem('panel')"><i class="lnr lnr-cog"></i> <span>面板</span></router-link></li>
            <li><router-link to="/form" :class="{ active: isActive == 'form' }" @click="getItem('form')"><i class="lnr lnr-license"></i> <span>表单</span></router-link></li>
            <li><router-link to="/table" :class="{ active: isActive == 'table' }" @click="getItem('table')"><i class="lnr lnr-dice"></i> <span>表格</span></router-link></li>
            <li>
              <a href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>二级菜单</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
              <div id="subPages" class="collapse ">
                <ul class="nav">
                  <li><a href="#" class="">啦啦啦</a></li>
                  <li><router-link :class="{ active: isActive == 'login' }" @click="getItem('login')" to="/login" class="">登录</router-link></li>
                  <li><a href="#" class="">噗噗噗</a></li>
                </ul>
              </div>
            </li>
            <li><router-link to="/icons" :class="{ active: isActive == 'icons' }" @click="getItem('icons')"><i class="lnr lnr-linearicons"></i> <span>图标</span></router-link></li>
            <li><router-link to="/grids" class="{ active: isActive == 'grids' }" @click="getItem('grids')"><i class="lnr lnr-apartment"></i> <span>布局</span></router-link></li>
          </ul>
        </nav>
      </div><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 486.621px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
    </div>

    <!-- content -->
    <router-view></router-view>
  </div>


</template>

<script>
export default {
  name: 'app',
  data: function(){
    return{
      isActive: ""
    }
  },
  methods: {
    getItem(flag){
      this.isActive = flag;
    }
  }
}
</script>

<style>

</style>
