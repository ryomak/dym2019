<template>
  <div>
  	<div class="card-group justify-content-center group">
  		<div v-for="(item ,index) in es" :id="index">
    		<div class="card aa" style="setWidth" @click="openModal(item,index)">
	  			<img class="card-img-top" :src="imgSrc(index)" alt="Card image cap">
	  			<div class="card-body" style="font-weight:bold">
	    			{{item.name}}
	  			</div>
			</div>	
		</div>
	</div>
	<employ-modal :reason="modal.reason" :boast="modal.boast" v-show="modal.showing " @close="modal.showing = false"/>
  </div>
</template>
<script>
	import employee from '@/assets/future-employ/employer.js'
	import employModal from './employModal.vue'
	export default{
		name:"Employee",
		components:{
			employModal
		},
		data(){
			return{
				es:employee,
				modal:{
					reason:"",
					boast:"",
					showing:false
				},
				width:window.innerWidth
			}
		},
		methods:{
			imgSrc(index){
				return require("../assets/future-employ/employee"+(index+1)+".jpg")
			},
			openModal(item,index){
				this.modal.reason=item.reason;
				this.modal.boast=item.boast;
				this.modal.showing=true;
			},
			addEmpty(){
				let empty = [];
				for (i=0;i<4;i++){
					empty.push($('<ul>', { class: 'cell is-empty' }));
				}
				this.es.append(empty)
			},
			setWidth(){
				return (this.width < 600)?"{width:50vw}":"{width:18rem}"
			},
			handleResize(){
		        // resizeのたびにこいつが発火するので、ここでやりたいことをやる
		        this.width = window.innerWidth;
		    }
		},
		ready(){
	        window.addEventListener('resize', this.handleResize)
		},
		beforeDestroy() {
		    window.removeEventListener('resize', this.handleResize)
		}
	}
</script>
<style scoped lang="scss">
	.group{
		margin: 0 auto;  
		.aa{
			margin:3px;
		}
	}
	.cell.is-empty {
	  height: 0;
	  padding-top: 0;
	  padding-bottom: 0;
	  margin-top: 0;
	  margin-bottom: 0;
	}
</style>
