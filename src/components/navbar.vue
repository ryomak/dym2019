<template>
	<div class="head">
		<nav class="navbar navbar-expand-lg back">
			<router-link class="navbar-brand brand" to="/">DYM</router-link>
			<button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				<span style="color:white">open</span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link class="nav-link back" to="/">TOP</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link back" to="/what-dym">DYMの紹介</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link back" to="/future-employer">内定者紹介</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
<script>
	export default{
		name:"NavBar"
	}
</script>
<style scoped lang="scss">
$color:#141b3d;
.head{
	.back{
		background-color:$color;
		color:white;
		.brand{
			font-size:2rem;
			color:white;
			font-weight:bold;
		}
	}
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;..");
}

</style>