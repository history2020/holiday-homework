<template>
	<!-- 左侧导航部分 -->
	<!-- 折叠导航 -->
	<el-menu
		unique-opened
		:default-openeds="[]"
		default-active="1"
		class="el-menu-vertical-demo"
		:collapse="isCollapse"
	>
		<!-- 首页嵌套的导航 -->
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-menu"></i>
				<span slot="title">首页</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="1-1">统计</el-menu-item>
				<el-menu-item index="1-2">数据化</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<!-- 购物车 -->
		<el-menu-item index="2">
			<i class="el-icon-setting"></i>
			<span slot="title">购物车</span>
		</el-menu-item>
		<!-- 订单 -->
		<el-menu-item index="3">
			<i class="el-icon-setting"></i>
			<span slot="title">订单</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Aside',
	computed: {
		...mapState(['isCollapse'])
	},
	methods: {}
}
</script>

<style>
/* 只有当展开的时候才宽度200 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
}
.el-menu-vertical-demo {
	min-height: 98vh;
}
</style>