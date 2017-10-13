<template>
  <div class="main" id="main">
    <!-- MAIN CONTENT -->
    <div class="main-content">
      <div class="container-fluid">
        <h3 class="page-title">基本元素</h3>
        <div class="row">
          <div class="col-md-6">
            <!-- BUTTONS -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Buttons</h3>
              </div>
              <div class="panel-body">
                <p class="demo-button">
                  <button type="button" class="btn btn-default">Default</button>
                  <button type="button" class="btn btn-primary">Primary</button>
                  <button type="button" class="btn btn-info">Info</button>
                  <button type="button" class="btn btn-success">Success</button>
                  <button type="button" class="btn btn-warning">Warning</button>
                  <button type="button" class="btn btn-danger">Danger</button>
                </p>
                <br>
                <p class="demo-button">
                  <button type="button" class="btn btn-primary btn-lg">Large Size</button>
                  <button type="button" class="btn btn-primary">Default Size</button>
                  <button type="button" class="btn btn-primary btn-sm">Small Size</button>
                  <button type="button" class="btn btn-primary btn-xs">Extra Small Size</button>
                </p>
                <br>
                <p class="demo-button">
                  <button type="button" class="btn btn-default"><i class="fa fa-plus-square"></i> Default </button>
                  <button type="button" class="btn btn-primary"><i class="fa fa-refresh"></i> Primary</button>
                  <button type="button" class="btn btn-info"><i class="fa fa-info-circle"></i> Info</button>
                  <button type="button" class="btn btn-primary" disabled="disabled"><i class="fa fa-refresh fa-spin"></i> Refreshing...</button>
                </p>
                <br>
                <p class="demo-button">
                  <button type="button" class="btn btn-success"><i class="fa fa-check-circle"></i> Success</button>
                  <button type="button" class="btn btn-warning"><i class="fa fa-warning"></i> Warning</button>
                  <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i> Danger</button>
                  <button type="button" class="btn btn-primary" disabled="disabled"><i class="fa fa-spinner fa-spin"></i> Loading...</button>
                </p>
                <br>
                <p class="demo-button">
                  <button type="button" class="btn btn-primary btn-lg">Large Size</button>
                  <button type="button" class="btn btn-primary">Default Size</button>
                  <button type="button" class="btn btn-primary btn-sm">Small Size</button>
                  <button type="button" class="btn btn-primary btn-xs">Extra Small Size</button>
                </p>
                <br>
                <div class="row">
                  <div class="col-md-6">
                    <button type="button" class="btn btn-primary btn-block">Button Block</button>
                  </div>
                  <div class="col-md-6">
                    <button type="button" class="btn btn-warning btn-block">Button Block</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- END BUTTONS -->
            <!-- MODEL -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Modals Example</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-lg-6 demo-button">
                    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal-lg">
                      Large Modal
                    </button>
                    <div class="modal fade" id="myModal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 class="modal-title" id="myModalLabel">Modal title Here</h4>
                          </div>
                          <div class="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 demo-button">
                    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal-md">
                      Middle Modal
                    </button>
                    <div class="modal fade" id="myModal-md" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                      <div class="modal-dialog modal-md">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 class="modal-title" id="myModalLabel">Modal title Here</h4>
                          </div>
                          <div class="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="col-lg-6 demo-button">
                    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal-sm">
                      Small Modal
                    </button>
                    <div class="modal fade" id="myModal-sm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                      <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 class="modal-title" id="myModalLabel">Modal title Here</h4>
                          </div>
                          <div class="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END MODEL -->
            <!-- ALERT MESSAGES -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Alert Messages</h3>
              </div>
              <div class="panel-body">
                <div class="alert alert-info alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <i class="fa fa-info-circle"></i> The system is running well
                </div>
                <div class="alert alert-success alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <i class="fa fa-check-circle"></i> Your settings have been succesfully saved
                </div>
                <div class="alert alert-warning alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <i class="fa fa-warning"></i> Warning, check your permission settings
                </div>
                <div class="alert alert-danger alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <i class="fa fa-times-circle"></i> Your account has been suspended
                </div>
              </div>
            </div>
            <!-- END ALERT MESSAGES -->
          </div>
          <div class="col-md-6">
            <!-- LABELS -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Labels &amp; Badges</h3>
              </div>
              <div class="panel-body">
                <span class="label label-default">DEFAULT</span>
                <span class="label label-primary">PRIMARY</span>
                <span class="label label-success">SUCCESS</span>
                <span class="label label-info">INFO</span>
                <span class="label label-warning">WARNING</span>
                <span class="label label-danger">DANGER</span>
                <br>
                <br>
                <a href="#">Inbox <span class="badge">42</span></a>
                <br>
                <br>
                <button class="btn btn-primary" type="button">
                  Messages <span class="badge">4</span>
                </button>
              </div>
            </div>
            <div class="panel">
              <div class="panel-heading">
                 <h3 class="panel-title">Button Dropdowns</h3>
              </div>
              <div class="panel-body">
                <div class="demo-button">
                  <div class="btn-group">
                    <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle">Action <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle" aria-expanded="false">Danger <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button data-toggle="dropdown" class="btn btn-warning dropdown-toggle" aria-expanded="false">Danger <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button data-toggle="dropdown" class="btn btn-success dropdown-toggle" aria-expanded="false">Success <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button data-toggle="dropdown" class="btn btn-info dropdown-toggle">Info <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button data-toggle="dropdown" class="btn btn-default dropdown-toggle">Default <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <br>
                <div class="demo-button">
                  <div class="btn-group">
                    <button class="btn btn-primary">Action</button>
                    <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle" aria-expanded="false"><span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button class="btn btn-danger">Danger</button>
                    <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle" aria-expanded="false"><span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button class="btn btn-warning">Warning</button>
                    <button data-toggle="dropdown" class="btn btn-warning dropdown-toggle" aria-expanded="false"><span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button class="btn btn-success">Success</button>
                    <button data-toggle="dropdown" class="btn btn-success dropdown-toggle"><span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button class="btn btn-info">Info</button>
                    <button data-toggle="dropdown" class="btn btn-info dropdown-toggle"><span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <br>
              </div>
            </div>
            <!-- END LABELS -->
            <!-- PROGRESS BARS -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Progress Bars</h3>
              </div>
              <div class="panel-body">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                    <span class="sr-only">60% Complete</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                    <span class="sr-only">60% Complete (warning)</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                    <span class="sr-only">60% Complete (success)</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                    <span class="sr-only">60% Complete (danger)</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
                    75%
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                    <span class="sr-only">20% Complete</span>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                    <span class="sr-only">45% Complete</span>
                  </div>
                </div>
                <div class="progress progress-xs">
                  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                    <span class="sr-only">80% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- END PROGRESS BARS -->
            <!-- PAGE -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Pages</h3>
              </div>
              <div class="panel-body">
                <nav>
                  <Pages curPage="3" showPages="5" allPages="11"></Pages>
                </nav>
              </div>
            </div>
            <!-- END PAGE -->
          </div>
        </div>
        </div>
    </div>
    <!-- END MAIN CONTENT -->
  </div>
</template>

<script>
  import Pages from "./child/page.vue"

  export default {
    name: 'element',
    components:{
      Pages
    }
  }
</script>


