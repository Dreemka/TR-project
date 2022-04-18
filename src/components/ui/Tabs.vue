<template>
    <div class="tabs-wrapper">
            <div v-for="(itemTabs , idx) in getDataTabs" 
            :key="idx" class="item-tabs" 
            @click="swithTabs = idx; sendData(swithTabs)" 
            :class="{active : swithTabs === idx}" >
                <i  :style="{color: itemTabs.icon_color}" class="text-16" :class="[itemTabs.icon]"></i>{{itemTabs.title}}
            </div>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    data() {
        return {
            swithTabs: 0
        }
    },
    props: {
        getDataTabs: {
            type : Array
        }
    },
    emits: ['tab-idx'],
    methods: {
        sendData(swithTabs){
            // console.log(swithTabs);
            

            this.$emit('tab-idx' , swithTabs)
        }
    },
}
</script>

<style lang="scss" scoped>
@import '/src/assets/css/tabs.scss';
</style>
