<template>
	<div class="bo">
		<div class="title">{{title}}</div>
		<div class="body">{{body}}</div>
	</div>
</template>
<script>
	export default{
		name:"box",
		props:['title','body']
	}
</script>
<style scoped lang="scss">
	.bo{
		margin: 3rem auto;
		width:70vw;
		.title{
			font-size:1.5rem;
			font-weight: bold;
		}
		.body{

		}
	}
</style>