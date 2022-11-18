<template>
    <div>
        <TypeNav />
        <ListContainer />
        <Recommend />
        <Rank />
        <Like />
        <Floor  v-for="(floor,indx) in floorList" :key="floor.id" :list="floor"/>

        <!-- 

            @on @emit 子给福
            $bus 全能
            pubsub-js

            插槽

            vuex

         -->
        <Brand />
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import TypeNav from "@/components/TypeNav";

import { mapState } from "vuex";

export default {
    name: "home",
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
        TypeNav,
    },

    mounted() {
        // 派发action 将数据存储在仓库
        this.$store.dispatch("getFloorList");
    },
    computed: {
        ...mapState({
            floorList: (state) => state.home.floorList,
        }),
    },
};
</script>

<style></style>
