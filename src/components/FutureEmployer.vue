<template>
  <div>
  	<div class="d-flex flex-row" v-for="(item ,index) in es" :id="index">
    	<div class="card" style="width: 18rem;">
	  		<img class="card-img-top" :src="imgSrc(index)" alt="Card image cap">
	  		<div class="card-body">
	    		{{item.name}}
	  		</div>
		</div>	
	</div>
  </div>
</template>
<script>
	import employee from '@/assets/future-employ/employer.js'
	export default{
		name:"Employee",
		data(){
			return{
				es:employee
			}
		},
		methods:{
			imgSrc(index){
				return require("../assets/future-employ/employee"+(index+1)+".jpg")
			}
		},
		created(){
			console.log(employee)
		}
	}
</script>
<style scoped lang="scss">
	.box{
		display: flex;
	}
</style>
