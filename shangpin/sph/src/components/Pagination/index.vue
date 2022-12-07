<template>
  <div class="pagination">
    <button :disabled="(pageNo == 1)" @click="$emit('pageNoInfo',pageNo - 1)">上一页</button>
    <button  v-if="(pageContinues.start>1)" @click="$emit('pageNoInfo',1)">1</button>
    <button v-if="(pageContinues.start>2)">···</button>

    <button v-for="(pagenum,index) in pageContinues.end" :key="index" :class="{active:pageNo==pagenum}" @click="$emit('pageNoInfo',pagenum)" v-if="pagenum>=pageContinues.start">{{pagenum}}</button>

    <button v-if="(pageContinues.end<totalPage-1)">···</button>
    <button v-if="(pageContinues.end<totalPage)" @click="$emit('pageNoInfo',totalPage)">{{totalPage}}</button>
    <button :disabled="(pageNo == totalPage)">下一页</button>

    <button  style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total","continues" ],
  computed: {
    totalPage(){
      return Math.ceil(this.total / this.pageSize)
    },
    pageContinues() {
      const { pageNo, pageSize, continues, totalPage } = this;
      //       1       3       5          31
      let start = 0,
        end = 0;

      if (continues > totalPage) {
        //连续至少五个，加上 首尾，最少五个
        //total小于等于7
        start = 1;
        end = totalPage;
      } else {
        // totalPage必须大于5
        start = pageNo - (continues - 1) / 2;
        end = pageNo + (continues - 1) / 2;

        //默认start end 都是基于pageNo当前页面

        if(start<1){
            start=1;
            end=continues;
        }

        if(end>totalPage){
          //但pageno 处于最后一个的情况
            end=totalPage;
            start = totalPage- continues;//
        }

        
        /* pageNo  */
      }

      return {
        start: start,
        end: end,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>