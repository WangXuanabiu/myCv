<template>
	<div class="my-cv">
		<div class="my-cv-head" :class="{'my-cv-head-bottom':!top}" ref="navbar">
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
				Hello, I'm Wang Xuan
			</div>
			<div class="my-cv-page-one-intro">
				一个正在努力学习的前端小白	
			</div>
		</div>
		<div class="info-items base-info">
				<h1>基本资料</h1>
				<div class="base-info-content">
					<div class="base-info-item"  v-for="(item, index) in baseInfos" :key="index">
						<div class="iconfont icon" v-html="item.icon">{{item.icon}}</div>
						<h2>{{item.subTitle}}</h2>
						<p class="base-info-item-decs">{{item.decs}}</p>
					</div>
				</div>
		</div>
		<div class="info-items project-experience">
				<h1>项目经验</h1>
				<div class="project-experience-content">
					<div class="project-experience-item" v-for="(item, index) in perojectInfos" :key="index">
						
					</div>
					
				</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "my-cv",
	data() {
		return {
			top: true,
			baseInfos:[{
				icon: '&#xe743',
				subTitle: '个人信息',
				decs: '年龄：24;性别：女;籍贯：贵州遵义;长居地：重庆'
			},{
				icon: '&#xe754;',
				subTitle: '专业学历',
				decs: '专业：计算机技术；学历：硕士研究生'
			},{
				icon: '&#xe759',
				subTitle: '毕业院校',
				decs: '本硕均为中南财经政法大学'
			},{
				icon: '&#xe75a',
				subTitle: '联系方式',
				decs: 'email：291738158@qq.com'
			}],
			perojectInfos:[{},{},{},{},{},{},{},{}]
		}
	},
	methods: {
		handleScroll(){
			if(document.documentElement.scrollTop === 0){
				this.top = true;
			}else{
				this.top = false;
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
	background: pink;
	min-width: 1200px;
	&-head {
		width: 100%;
		position: fixed;
		top: 0;
		color: #FFF;
		height: 90px;
		z-index: 100;
		background-color: #FFFFFF00;
		transition: all .3s linear;
		&-navbar {
			width: 1200px;
			margin: 0 auto;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			li {
				padding: 0 20px;
				cursor: pointer;
				&:hover{
					color: yellow;
				}
			}
		}
	}
	&-head-bottom {
		background-color: black;
		height: 60px;
		transition: all .3s linear;
	}
	&-page-one {
		height: 100vh;
		width: 100%;
		background: #FFFFFF56 url("../../assets/image/indexBg.jpg") no-repeat scroll center/cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
	.info-items {
		width: 100%;
		padding: 80px 0;
	}
	.base-info {
		background-color: gray;
		&-content {
			display: flex;
			justify-content: center;
		} 
		&-item {
			height: 300px;
			width: 250px;
			display: flex;
			flex-direction: column;
			align-items: center;
			.icon {
				margin: 0 auto;
				background-color: #474b4f;
				width: 150px;
				height: 150px;
				transition: all .3s linear;
				font-size: 80px;
				line-height: 150px;
				text-align: conter;
				border-radius: 75px;
				margin: 25px;
				&:hover {
					transform: scale(1.2);
					color: #FFA;
				}
			}
			&-decs{
				width: 200px;
			}
		}
	}
	.project-experience {
		&-content {
			margin: 0 auto;
			display: flex;
			width: 1000px;
			flex-wrap: wrap;
			justify-content: center;
		}
		&-item {
			margin: 20px;
			width: 200px;
			height: 200px;
			background-color: gray;
			transition: all .3s linear; 
			&:hover {
				width: 240px;
				height: 240px;
				margin: 0;
				transition: all .3s linear; 
			}
		}
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
</style>
