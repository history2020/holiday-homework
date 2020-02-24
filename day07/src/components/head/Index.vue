<template>
	<div>
		<div class="fl">
			<el-button @click="handleClick" icon="el-icon-s-fold" />
		</div>
		<div>
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>查看</el-dropdown-item>
					<el-dropdown-item>新增</el-dropdown-item>
					<el-dropdown-item>删除</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span>王小虎</span>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	name: 'Index',
	methods: {
		...mapMutations(['setCollapse']),
		handleClick() {
			this.setCollapse()
		}
	}
}
</script>

<style>
</style>