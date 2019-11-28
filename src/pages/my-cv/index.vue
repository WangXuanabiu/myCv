<template>
	<div class="my-cv">
		<div class="my-cv-head" :class="{'my-cv-head-top':top,'my-cv-head-bottom':noTop}" ref="navbar">
			<ul class="my-cv-head-navbar" >
				<li>基本资料</li>
				<li>项目经验</li>
				<li>专业技能</li>
				<li>工作经历</li>
				<li>自我评价</li>
			</ul>
		</div>
		<div class="my-cv-page-one">
			<div class="my-cv-page-one-name">
				Hello, I'm cat
			</div>
			<div class="my-cv-page-one-intro">
				介绍介绍介绍介绍介绍
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "my-cv",
	data() {
		return {
			top: false,
			noTop: false,
		}
	},
	methods: {
		handleScroll(){
			if(document.documentElement.scrollTop === 0){
				this.top = true;
				this.noTop = false;
			}else{
				this.top = false;
				this.noTop = true;
			}
		}
	},
	mounted() {
		window.addEventListener("scroll",this.handleScroll,false)
	}
};
</script>

<style lang="scss">
.my-cv {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 1200px;
	background: pink;
	&-head {
		width: 100%;
		position: fixed;
		top: 0;
		color: #FFF;
		height: 90px;
		&-navbar {
			width: 1200px;
			margin: 0 auto;
			height: 100%;
			background-color: #FFFFFF00;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			li {
				padding: 0 20px;
			}
		}
	}
	&-head-top {
		animation: navbarAni .5s linear;
		animation-fill-mode: forwards;
	}
	&-head-bottom {
		animation: navbarTop .5s linear;
		animation-fill-mode: forwards;
	}
	&-page-one {
		height: 100vh;
		width: 100%;
		background: #FFFFFF56 url("../../assets/image/indexBg.jpg") no-repeat scroll center/cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		aligin-items: center;
		text-align: center;
		color: #FFF;
		&-name {
			font-size: 70px;
			margin-bottom: 30px;
			animation: levelUp .5s linear;
			animation-fill-mode: forwards;
			position: relative;
		}
		&-intro {
			animation: levelUp .5s linear 1s;
			animation-fill-mode: forwards;
			position: relative;
			top: -1000px;
			font-size: 30px;
		}
	}
}
@keyframes navbarAni{
	0% {
		background-color: black;
		height: 60px;
	}
	100% {
		background-color: #FFFFFF00;
		height: 90px;
	}
}
@keyframes navbarTop{
	0% {
		background-color: #FFFFFF00;
		height: 90px;
	}
	100% {
		background-color: black;
		height: 60px;
	}
}
@keyframes levelUp {
	from {
		top: 80px;
	}
	to {
		top: 0;
	}
}
@keyframes sizeChange {
	from {
		font-size: 0
	}
	to {
		font-size: 30px;
	}
}
</style>
