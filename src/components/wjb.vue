<template>
    <div class="wjb">
        <span>
            baidtuole
        </span>
    </div>
</template>
<script>
export default {
    created() {
        console.log("hello")
    }
}
</script>
<style lang="scss" scoped>
@import '../css/helpers/_functions.scss';
.wjb {
    width: 100%;
    height: 100%;
    background: gray;
    position: absolute;
    top: 0px; 
    // width: rem(640);
    span {
        display: inline-block;
        background: red;
        font-size: 14px;
        color: white;
        width:100%;
    }
}
</style>