<template>
  <div>
    <p>
        {{keyword}}

    search params:{{$route.params.keyword}}


    </p>
    <p>

    search query:{{$route.query.k}}

    </p>
  </div>
</template>

<script>
export default {
    name:'',
    props:['keyword']
}
</script>

<style>

</style>