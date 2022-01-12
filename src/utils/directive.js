export default (Vue) => {
    // 拖拽
    Vue.directive('drag', function (el, { value: { left, top, width, draggableWidth, draggableHeight } }) {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        el.style.left = (left && left > 0) ? (left - width) + "px" : '0px';
        el.style.top = top + "px";
        el.style.position = 'fixed';
        el.style.width = width + "px";
        //获取div的位置
        //鼠标按下的时候
        el.onmousedown = function (e) {
            var disX = e.clientX - el.offsetLeft;
            var disY = e.clientY - el.offsetTop;
            if (disX > el.offsetWidth * draggableWidth || disY > draggableHeight) {
                return
            }
            document.onmousemove = function (e) {
                var l = e.clientX - disX;
                var t = e.clientY - disY;
                el.style.left = (w - el.clientWidth > l ? l < 0 ? 0 : l : w - el.clientWidth) + 'px';
                el.style.top = (h - el.clientHeight > t ? t < 0 ? 0 : t : h - el.clientHeight) + 'px';
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    })
}