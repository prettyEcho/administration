<template>
	<div class="main">
		<!-- MAIN CONTENT -->
		<div class="main-content">
			<div class="container-fluid">
				<h3 class="page-title">表格</h3>
				<div class="row">
					<div class="col-md-6">
						<!-- BASIC TABLE -->
						<div class="panel">
							<div class="panel-heading">
								<h3 class="panel-title">基础表格</h3>
							</div>
							<div class="panel-body">
								<table class="table">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Steve</td>
											<td>Jobs</td>
											<td>@steve</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Simon</td>
											<td>Philips</td>
											<td>@simon</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Jane</td>
											<td>Doe</td>
											<td>@jane</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- END BASIC TABLE -->
					</div>
					<div class="col-md-6">
					<!-- TABLE HOVER -->
						<div class="panel">
							<div class="panel-heading">
								<h3 class="panel-title">悬浮行</h3>
							</div>
							<div class="panel-body">
								<table class="table table-hover">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Steve</td>
											<td>Jobs</td>
											<td>@steve</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Simon</td>
											<td>Philips</td>
											<td>@simon</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Jane</td>
											<td>Doe</td>
											<td>@jane</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					<!-- END TABLE HOVER -->
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<!-- BORDERED TABLE -->
						<div class="panel">
							<div class="panel-heading">
								<h3 class="panel-title">边框表格</h3>
							</div>
							<div class="panel-body">
								<table class="table table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Steve</td>
											<td>Jobs</td>
											<td>@steve</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Simon</td>
											<td>Philips</td>
											<td>@simon</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Jane</td>
											<td>Doe</td>
											<td>@jane</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- END BORDERED TABLE -->
					</div>
					<div class="col-md-6">
					 	<!--  Context Classes  -->
            <div class="panel">
                <div class="panel-heading">
                    <h3 class="panel-title">内容表格</h3>
                </div>
                <div class="panel-body">
                  <div class="table-responsive">
                      <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="success">
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr class="info">
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr class="warning">
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr class="danger">
                                <td>4</td>
                                <td>John</td>
                                <td>Smith</td>
                                <td>@jsmith</td>
                            </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
            </div>
            <!--  end  Context Classes  -->
					</div>
				</div>
			</div>
		</div>
		<!-- END MAIN CONTENT -->
	</div>
</template>
<script>
  export default {
    name: 'main'
  }
</script>