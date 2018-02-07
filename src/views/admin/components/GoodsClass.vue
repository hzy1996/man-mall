<template>
	<div class="conBox">
		<div class="addClass" v-if="show">
			<div class="name">
				<i>分类名：</i>
				<input type="text" v-model="name">
			</div>
			<div class="url">
				<i>图片url地址：</i>
				<input type="text" v-model="url">
			</div>
			<div class="botBox">
				<button @click="show=!show" class="bto">取消</button>
				<button @click="addClass">提交</button>
			</div>
		</div>
		<div class="topBox">
			<button @click="show=!show">添加分类</button>
		</div>
		<div class="lstBox">
			<li class="lstNav">
				<i>ID</i>
				<i>分类名称</i>
				<i class="go">操作</i>
			</li>
			<li class="lst" v-for="v in goodsclass">
				<i>{{v._id}}</i>
				<i>{{v.name}}</i>
				<i class="go">
											<button class="button2" @click="updateClass(v)">修改</button>
											<button class="button1">删除</button>
										</i>
			</li>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				goodsclass: [{
					_id: "0",
					name: "分类1"
				}],
				show: false,
				name: '',
				url: ''
			};
		},
		methods: {
			async get_goodsclass() {
				let res = await this.$ajax.get('http://localhost:4000/category/public/read')
				console.log(res.data.data)
				this.goodsclass = res.data.data
			},
			async addClass() {
				if (this.name == '') {
					alert('请输入分类名')
				} else {
					console.log(sessionStorage.token)
					let res = await this.$ajax.post('http://localhost:4000/category/create', {
						name: this.name,
						img_url: this.url
					})
					console.log(res)
					this.show = !this.show
				}
			},
			updateClass(v){
				sessionStorage.id = v._id
				this.$router.push({path:'/admin/updateclass'})
			}
		},
		created() {
			this.get_goodsclass()
		}
	};
</script>
<style scoped>
	input {
		width: 300px;
		/* outline: none; */
		height: 35px;
		line-height: 35px;
		padding-left: 10px;
		border: none;
	}
	.addClass {
		width: 500px;
		height: 300px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -250px;
		margin-top: -150px;
		/* transform: translate(-50%,-50%); */
		background: #cccccc36;
		box-shadow: 1px 1px 1px #ccc;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.name,
	.url {
		margin-bottom: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.name i,
	.url i {
		width: 100px;
	}
	button {
		color: #f8f8f8;
		cursor: pointer;
		border: none;
	}
	.conBox {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative
	}
	.topBox {
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.topBox button,
	.botBox button {
		width: 80px;
		height: 30px;
		border: none;
		background: #09C878;
		color: #f8f8f8;
	}
	.bto {
		background: #f90!important;
	}
	.button1,
	.button2 {
		background: #f90;
		margin-left: 10px;
		color: #f8f8f8;
		width: 40px;
		height: 20px;
		;
	}
	.button2 {
		background: #09C878!important;
	}
	.lstBox {
		display: flex;
		flex-direction: column;
	}
	.lstNav {
		width: 100%;
		height: 40px;
		background: #f5f7f9;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.lst {
		width: 100%;
		height: 60px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #f9f9f9;
	}
	.lst:hover {
		box-shadow: 0px 1px 1px #ccc;
		background: #f9f9f9;
	}
	.lst i,
	.lstNav i {
		width: 33%;
		text-align: center;
	}
</style>


