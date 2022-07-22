<template>
<div :class="['todo_item', todo.compelted? 'compelted': '']">
    <input class="input" type="checkbox" v-model.lazy="todo.compelted">
    <label  >{{todo.content}}</label>
    <button @click="delItem" class="button"></button>
</div>
  
</template>

<script>
export default {
    name: 'Todoitem',
    props:{
        todo: Object
    },
    methods:{
        //父组件想子组件传值
        delItem(){
            this.$emit('del',this.todo.id)
        }
    }
}
</script>

<style scoped>
.todo_item{
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    border-top: 1px solid rgba(0, 0,0, .1);
}
.todo_item:hover .button::after{
    content: 'x';
    font-size: 24px;
    color: #ef2096;
    font-weight: bold;
}
.todo_item .input{
    width: 50px;
    height: 30px;
    -webkit-appearance: none;
    border: none ;
    outline: none;
}
.todo_item .input::after{
    padding-left: 10px ;
    content: url('~imgs/yuan.svg');
}
.todo_item .input:checked::after{
    content: url('~imgs/check.svg');
}
.todo_item label{
    flex: 1;
    font-style: inherit;
    line-height: 42px ;
    transition: color .4s;
}
.compalted {
    color: #d9d9d9;
    text-decoration: line-through;
}
.todo_item .button{
    width: 40px;
    padding-right: 10px;
    background-color: transparent ;
    -webkit-appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>