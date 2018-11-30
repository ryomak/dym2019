<template>
    <transition name="modal" >
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                    	誇れること
                    </div>
                    <div class="modal-body">
                            {{boast}}
                    </div>
                     <div class="modal-header">
                    	DYMに決めた理由
                    </div>
                    <div class="modal-body">
                            {{reason}}
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
 
export default {
	props:['boast','reason','showing'],
	methods:{
		imgSrc(index){
			return require("../assets/future-employ/employee"+(index+1)+".jpg")
		}
	}
}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(256, 256, 256, .9);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 80vw;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        border:solid 2px #141b3d;
        transition: all .3s ease;
        word-wrap: break-word;
        font-size: 1rem;
    }

    .modal-header {
        margin-top: 0;
        font-size:1.3rem;
        font-weight: bold;
    }

    .modal-img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .modal-close{
        width: 80px;
        height: auto;
        float:right;
    }

    .modal-body {
        margin: 1vw 0;
    }

    .modal-default-button {
        float: right;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>