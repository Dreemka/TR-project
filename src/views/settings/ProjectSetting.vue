<template>
<section class="t-rr-s-project-setting-wrapper">
  <div class="t-rr-s-project-setting-header">
    <div class="t-rr-s-project-setting-header-title">
      <h5>{{$t('Settings.Project')}}</h5>
    </div>
    <div class="t-rr-s-project-setting-header-setting">
        <DropDownSt
          :title="$t('download')"
          :dropDownData="dataProjectList"
          :mask="$t('to_choise')"
          iconAfter="transporter-cloud_outline"
          :disabled="false"
          class="mr-20" />
        <UIinput 
          :mask="$t('search')"
          icon='transporter-Search_tiny'
          v-model="filterData"/>
        <UiButton 
          :title="$t('Settings.project.UpdateProjectList')"
          iconAfter="false"
          :disabled="false"
          class="mr-20"
          @click="download()" />
    </div>
  </div>
  <div class="t-rr-s-project-setting-body">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">
          {{$t('Settings.project.ProjectTitle')}}
        </th>
        <th scope="col">
          {{$t('Settings.project.Synchronization')}}
        </th>
        <th scope="col">
          {{$t('Settings.project.LastDetour')}}
        </th>
        <th scope="col">
          {{$t('Settings.project.Progress')}}
        </th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
</template>
<script>
import UiButton from '@/components/ui/Button'
import UIinput from '@/components/ui/Input'
import DropDownSt from '@/components/ui/DropDownSt';

// import btnSec from '@/components/ui/BtnSec'
// import UiMark from '@/components/ui/Mark'
// import UiTabs from '@/components/ui/Tabs'
// import {HTTP} from "@/http-common";

export default {
  components: {
    UiButton,
    UIinput,
    DropDownSt
  },
  data() {
    return {
      filterData: '',
    }
  },
}
</script>
<style lang="scss">

@import 'src/assets/css/project-settings.scss';
</style>
