<template>
    <div id="qianKun">
        <el-menu router mode="horizontal">
            <!-- 自己的路由 -->
            <el-menu-item index="/">Home</el-menu-item>
            <!-- 其他子应用 -->
            <el-menu-item index="/qiankun_base/dist/vue">vue</el-menu-item>
            <el-menu-item index="/qiankun_base/dist/react">react</el-menu-item>
        </el-menu>
        <router-view></router-view>
        <div id="vue"></div>
        <div id="react"></div>
    </div>
</template>

<script>
export default {
    name: "qianKun",
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
</style>
