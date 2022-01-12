<template>
    <div>
        <span>默认</span>
        <input v-model="text" type="text" id="focus" />
        <button @click="click">12312</button>
        <!-- <div v-drag="drag" class="drag"></div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            drag: {
                x: 10,
                y: 10,
            },
            text: "",
        };
    },
    created() {},
    methods: {
        click() {
            const el = document.getElementById("focus");
            console.log(el.selectionStart);
            const index = el.selectionStart;
            el.focus();
            el.setSelectionRange(index, index);
        },
    },
};
</script>

<style scoped lang="less">
.drag {
    border: 1px solid #000;
    width: 500px;
    height: 500px;
    background: #000;
}
</style>
