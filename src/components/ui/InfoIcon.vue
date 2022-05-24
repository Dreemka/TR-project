<template>
    <div
        class="info-wrp"
        placement="right"
        :disabled="tooltipExists === false"
        width="500"
        >
        <p class="info-wrp_tooltip" v-html="tooltip"></p>
        <img class="mr-2" src="@/assets/transporter-icon/Icon/tooltip.svg">
    </div>
</template>

<script>
    export default {
        props: {
            tooltip: {
                type: String,
                default: '',
            },
        },
        computed: {
            tooltipExists() {
                return Boolean(this.tooltip) === true;
            },
        },
    };
</script>

<style lang="scss">
    .info-wrp {
        position: relative;
        cursor: help;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
        margin-left: 16px;
        &_icon {
            color: #ccc;
            // @include size(18px);
        }
        &_tooltip {
            margin: 8px;
            word-break: break-word;
            text-align: left;
            display: none;
            position: absolute;
            width: max-content;
            bottom: 33px;
            right: 0;
            padding: 15px;
            background: #fff;
            font-size: 0.6em;
            box-shadow: 0px -6px 17.869px rgba(8, 20, 51, 0.0417275), 0px 6.6501px 5.32008px rgba(8, 20, 51, 0.0282725), 0px 2.76726px 2.21381px rgba(8, 20, 51, 0.0196802);
            code, pre {
                display: block;
                background-color: #ccc;
                padding: 8px;
                border-radius: 4px;
                margin: 6px 0;
                &.-inline {
                    display: inline;
                    padding: 1px 4px;
                }
            }
        }
        &:hover{
            .info-wrp_tooltip {
                display: block;
            }
        }
    }
</style>