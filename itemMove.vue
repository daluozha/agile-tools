<template>
  <div class="move-container">
    <img alt="Vue logo" src="../assets/logo.png"
      class="move"
      style="position:absolute;">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return { 
      dragging:false,//是否激活拖拽状态
      tLeft: 0,
      tTop: 0,//鼠标按下时相对于选中元素的位移
      originX: 0,
      originY: 0,
      left: 0,
      top: 0,
    }
  },
  methods: {},
  mounted() {
    var moveElem = document.querySelector(".move"); //待拖拽元素
    //监听鼠标按下事件
    document.addEventListener("mousedown", (e) => {
      e.preventDefault()
      if (e.target == moveElem) {
        this.dragging = true; //激活拖拽状态
        // var moveElemRect = moveElem.getBoundingClientRect(); // 实际dom 的起始x、y坐标
        // this.tLeft = e.clientX - moveElemRect.left; //鼠标按下时和选中元素的坐标偏移:x坐标
        // this.tTop = e.clientY - moveElemRect.top; //鼠标按下时和选中元素的坐标偏移:y坐标
        
        var moveElemRect = moveElem.getBoundingClientRect();
        this.left = moveElemRect.left
        this.top = moveElemRect.top
        this.originX = e.clientX
        this.originY = e.clientY
      }
    });
    //监听鼠标移动事件
    document.addEventListener("mousemove", (e) => {
      if (this.dragging) {
        // var moveX = e.clientX - this.tLeft,
        //     moveY = e.clientY - this.tTop;
        var moveX = e.clientX - this.originX + this.left,
            moveY = e.clientY - this.originY + this.top;

        moveElem.style.left = moveX + "px";
        moveElem.style.top = moveY + "px";
      }
    });

    //监听鼠标放开事件
    document.addEventListener("mouseup", () => {
      this.dragging = false;
    });

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
