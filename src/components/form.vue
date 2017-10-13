<template>
	<div class="main" id="main">
		<!-- MAIN CONTENT -->
    <div class="main-content">
      <div class="container-fluid">
        <h3 class="page-title">基本元素</h3>
        <div class="row">
          <div class="col-md-6">
           <!-- INPUTS -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Inputs</h3>
              </div>
              <div class="panel-body">
                <input type="text" class="form-control" placeholder="text field">
                <br>
                <input type="password" class="form-control" value="asecret">
                <br>
                <textarea class="form-control" placeholder="textarea" rows="4"></textarea>
                <br>
                <select class="form-control">
                  <option value="cheese">Cheese</option>
                  <option value="tomatoes">Tomatoes</option>
                  <option value="mozarella">Mozzarella</option>
                  <option value="mushrooms">Mushrooms</option>
                  <option value="pepperoni">Pepperoni</option>
                  <option value="onions">Onions</option>
                </select>
                <br>
                <label class="fancy-checkbox">
                  <input type="checkbox">
                  <span>Fancy Checkbox 1</span>
                </label>
                <label class="fancy-checkbox">
                  <input type="checkbox">
                  <span>Fancy Checkbox 2</span>
                </label>
                <label class="fancy-checkbox">
                  <input type="checkbox">
                  <span>Fancy Checkbox 3</span>
                </label>
                <br>
                <label class="fancy-radio">
                  <input name="gender" value="male" type="radio">
                  <span><i></i>Male</span>
                </label>
                <label class="fancy-radio">
                  <input name="gender" value="female" type="radio">
                  <span><i></i>Female</span>
                </label>
              </div>
            </div>
            <!-- END INPUTS -->           
          </div>         
          <div class="col-md-6">
            <!-- INPUT SIZING -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Input Sizing</h3>
              </div>
              <div class="panel-body">
                <input class="form-control input-lg" placeholder=".input-lg" type="text">
                <br>
                <input class="form-control" placeholder="Default input" type="text">
                <br>
                <input class="form-control input-sm" placeholder=".input-sm" type="text">
                <br>
                <select class="form-control input-lg">
                  <option value="cheese">Cheese</option>
                  <option value="tomatoes">Tomatoes</option>
                  <option value="mozarella">Mozzarella</option>
                  <option value="mushrooms">Mushrooms</option>
                  <option value="pepperoni">Pepperoni</option>
                  <option value="onions">Onions</option>
                </select>
                <br>
                <select class="form-control">
                  <option value="cheese">Cheese</option>
                  <option value="tomatoes">Tomatoes</option>
                  <option value="mozarella">Mozzarella</option>
                  <option value="mushrooms">Mushrooms</option>
                  <option value="pepperoni">Pepperoni</option>
                  <option value="onions">Onions</option>
                </select>
                <br>
                <select class="form-control input-sm">
                  <option value="cheese">Cheese</option>
                  <option value="tomatoes">Tomatoes</option>
                  <option value="mozarella">Mozzarella</option>
                  <option value="mushrooms">Mushrooms</option>
                  <option value="pepperoni">Pepperoni</option>
                  <option value="onions">Onions</option>
                </select>
              </div>
            </div>
            <!-- END INPUT SIZING -->
            <!-- INPUT GROUPS -->
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Input Groups</h3>
              </div>
              <div class="panel-body">
                <div class="input-group">
                  <input class="form-control" type="text">
                  <span class="input-group-btn"><button class="btn btn-primary" type="button">Go!</button></span>
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="button">Go!</button>
                  </span>
                  <input class="form-control" type="text">
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-user"></i></span>
                  <input class="form-control" placeholder="Username" type="text">
                </div>
                <br>
                <div class="input-group">
                  <input class="form-control" placeholder="Username" type="text">
                  <span class="input-group-addon"><i class="fa fa-user"></i></span>
                </div>
                <br>
                <div class="input-group">
                  <span class="input-group-addon">$</span>
                  <input class="form-control" type="text">
                  <span class="input-group-addon">.00</span>
                </div>
              </div>
            </div>
            <!-- END INPUT GROUPS -->
          </div>
        </div>
      </div>
    </div> 
	</div>
</template>

<script>
	export default {
		name: 'form',
	}
</script>