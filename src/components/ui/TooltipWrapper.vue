<template>
    <div class="tooltip-wrapper">
        <slot></slot>
        <info-icon :tooltip="tooltip"/>
    </div>
</template>

<script>
    import infoIcon from '@/components/ui/InfoIcon'

    export default {
        components: {
            infoIcon
        },
        props: {
            tooltip: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style lang="scss" scoped>
    .tooltip-wrapper {
        display: flex;
        align-items: center;
    }
</style>