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
      <!-- <div class="t-rr-s-telegram-alert-setting-modul-field">
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
      </div> -->
      <div class="t-rr-s-telegram-alert-setting-modul-field">
        <div class="title">
          <h6>
            {{$t('Settings.telegramText.ChatForAction')}}
          </h6>
        </div>
        <UIinput 
          :mask="null"
          icon='false'
          v-model=" eventChatId"
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
          v-model="logChatId"
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
import QueryMixin from '@/mixins/query-mixin'
// import messages from "@/plugins/utils/messages"

// import tooltipWrapper from '@/components/ui/TooltipWrapper'


export default {
  components: {
    UiButton,
    UIinput,
    // tooltipWrapper,
  },
  mixins: [
    QueryMixin,
  ],
  data() {
    return {
      logChatId: '',
      eventChatId: '',
    }
  },
  mounted() {
    this.postData('/api/v1/Settings.getTelegram', {
    })
    .then((data) => {
      console.log(data)
      this.logChatId = data.log_chat_id
      this.eventChatId = data.event_chat_id
      console.log(this.logChatId)
    });
  },
  methods: {
    action() {
    this.postData('api/v1/Settings.setTelegram', {
      log_chat_id: this.logChatId,
      event_chat_id: this.eventChatId,
    })
    .then((data) => {
      console.log(data)
    });
    }
  }
}
</script>
<style lang="scss">

@import 'src/assets/css/telegram-alert-settings.scss';
</style>
