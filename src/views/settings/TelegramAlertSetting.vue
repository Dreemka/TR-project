<template>
<section class="t-rr-s-telegram-alert-setting-wrapper">
  <div class="t-rr-s-telegram-alert-setting-header">
    <div class="t-rr-s-telegram-alert-setting-header-title">
      <h5>{{$t('Settings.TelegramAlert')}}</h5>
    </div>
  </div>
  <div class="t-rr-s-telegram-alert-setting-body">
    <h5>{{$t('Settings.telegramText.TelegramBot')}}</h5>
    <div class="t-rr-s-telegram-alert-setting-modul">
      <div class="t-rr-s-telegram-alert-setting-modul-field">
        <div class="title">
          <h6>
            {{$t('Settings.telegramText.Token')}}
          </h6>
        </div>
        <UIinput 
          :mask="null"
          icon='false'
          v-model="inputData"
          class="fz-14 input"/>
        <tooltip-wrapper slot="label" :tooltip="$t('Settings.telegramText.Token')"></tooltip-wrapper>  
      </div>

      <div class="t-rr-s-telegram-alert-setting-modul-field">
        <div class="title">
          <h6>
            {{$t('Settings.telegramText.ChatForAction')}}
          </h6>
        </div>
        <UIinput 
          :mask="null"
          icon='false'
          v-model="inputData"
          class="fz-14 input"/>
      </div>

      <div class="t-rr-s-telegram-alert-setting-modul-field">
        <div class="title">
          <h6>
            {{$t('Settings.telegramText.TechnicalChat')}}
          </h6>
        </div>
        <UIinput 
          :mask="null"
          icon='false'
          v-model="inputData"
          class="fz-14 input"/>
      </div>
      <div class="t-rr-s-telegram-alert-setting-modul-field">
        <div></div>
        <UiButton 
          :title="$t('Save')"
          :disabled="false"
          class="fz-14"
          @click="action()" />
      </div>
    </div>
  </div>
</section>
</template>
<script>
import UiButton from '@/components/ui/Button'
import UIinput from '@/components/ui/Input'
import tooltipWrapper from '@/components/ui/TooltipWrapper'
// import btnSec from '@/components/ui/BtnSec'
// import UiMark from '@/components/ui/Mark'
// import UiTabs from '@/components/ui/Tabs'
// import {HTTP} from "@/http-common";

export default {
  components: {
    UiButton,
    UIinput,
    tooltipWrapper,
    // DropDownSt,
    // Toogle
  },
  data() {
    return {
      inputData: ''
    }
  },
  methods: {
    action() {
      console.log(444);
    }
  }
}
</script>
<style lang="scss">

@import 'src/assets/css/telegram-alert-settings.scss';
</style>
