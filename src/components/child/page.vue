<template>
  <ul class="pagination">
    <li @click="curPage-- && goto(curPage)" ><span>&laquo;</span></li>
    <li v-for="index in pages" @click="goto(index)" :class="{'active':curPage == index}" :key="index">
      <span>{{index}}</span>
    </li>
    <li @click="curPage++ && goto(curPage)"><span>&raquo;</span></li>
  </ul>
</template>

<script>
  export default {
    name: "pages",
    props: {
      curPage: String,
      showPages: String,
      allPages: String
    },
    computed:{
      pages:function(){
        let pag = [];
        if( this.curPage < this.showPages ){ //如果当前的激活的项小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          let i = Math.min(this.showPages,this.allPages);
          while(i){
            pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
          let middle = this.curPage - Math.floor(this.showPages / 2 ),//从哪里开始
            i = this.showPages;
          if( middle >  (this.allPages - this.showPages)  ){
            middle = (this.allPages - this.showPages) + 1
          }
          while(i--){
            pag.push( middle++ );
          }
        }
        return pag;
      }
    },
    methods:{
      goto:function(index){
        index = Math.min( this.allPages, index );
        index = Math.max( index, 1 );
        if(index === this.curPage) return;
        this.curPage = index;
        this.callback && this.callback();
      }
    },
  }
</script>

<style>
  .pagination li:hover{
    cursor: pointer;
  }
</style>
