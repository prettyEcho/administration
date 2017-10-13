<template>
  <!-- WRAPPER -->
  <div id="main" class="main">
    <div class="main-content">
      <div class="container-fluid">
        <div class="auth-box ">
              <div class="left">
                <div class="content">
                  <div class="header">
                    <p class="lead">登录账户</p>
                  </div>
                  <form class="form-auth-small" action="index.php">
                    <div class="form-group">
                      <label for="signin-email" class="control-label sr-only">Email</label>
                      <input type="email" class="form-control" id="signin-email" value="" placeholder="请输入账户">
                    </div>
                    <div class="form-group">
                      <label for="signin-password" class="control-label sr-only">Password</label>
                      <input type="password" class="form-control" id="signin-password" value="" placeholder="请输入密码">
                    </div>
                    <div class="form-group clearfix">
                      <label class="fancy-checkbox element-left">
                        <input type="checkbox">
                        <span>记住我</span>
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg btn-block">登录</button>
                    <div class="bottom">
                      <span class="helper-text"><i class="fa fa-lock"></i> <a href="#">忘记密码？</a></span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="right">
                <div class="overlay"></div>
                <div class="content text">
                  <h1 class="heading">***后台管理系统</h1>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
      </div>
    </div>
  </div>
  <!-- END WRAPPER -->
</template>

<style>

</style>
