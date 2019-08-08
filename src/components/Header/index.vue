<template>
    <div class="headercss">
        <div class="col-md-2"><slot name="left" /></div>
        
        <div  class="col-md-8">{{title}}</div>
        <div  class="col-md-2"><slot name="right"/></div>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:["title"],

}
</script>

<style>
.headercss{
background-color: green;
color: white;
display: flex;
height: 50px;
padding-top:10px;
white-space: nowrap;
overflow: hidden;
align-items: center;
text-align: center;
}
</style>
