<template>
  <div>
  	<h3>~内定者紹介~</h3>
  	<employee />
  </div>
</template>
<script>
	import Employee from '@/components/FutureEmployer.vue'
	export default{
		components:{
			Employee
		}
	}
</script>
<style scoped>
	h3{
		margin: 2vh; 
		font-weight: bold;
	}
</style>
