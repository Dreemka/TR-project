<template>
    <section class="acceptance unselectable">
    <div class="title-wrapper">
      <h2 class="list-h">Приемки</h2>
      <UiButton :title="title"></UiButton>
    </div>
    <div class="tabs-search-wrapper">
        <UiTabs :getDataTabs="dataTabs" @tab-idx="tabIdx"/> 
    <div class="search-wrapper">
        <UiInput mask="Поиск" 
                 icon="transporter-Search_tiny" 
                 v-model.trim="searchRequest" 
                 class="mr-3" 
                 @keyup.enter.native="searchStart(searchRequest)" 
                 style="margin-bottom: 0px"/>

        <btn-sec title="Найти" 
                 type="todo" 
                 @click.native="searchStart(searchRequest)" />
    </div>
    </div>

    <div class="wrap">
        <div v-for="(item , idx) in ListReportDataChanges"
            :key="idx" class='element-tech-wrap'>
                <div class='element-tech' >
                    <div class="title-tech-wrp">
                        <h4>Приемка № {{item.id}}</h4>
                        <UiMark :title="item.status | lang('ru')"
                                :icon="iconChoise(item)" 
                                :styleChoise="styleChoise(item)"
                                class="mr-1"
                                 />

                        <UiMark :title="item.references.hot.name | lang('ru')"
                                :icon="iconData.hot"
                                :styleChoise="colorStatus.hot"
                                v-if="item.references.hot.type"
                                />
                    </div>
                    <div class="title-tech-wrp">
                        <UiMark :title="item.due_date | date('date/time')"
                                :styleChoise="styleChoise(item)"
                                style="opacity: 0.6"/>
                    </div>

                    <div v-if="item.references.classifier">

                        <p>{{item.references.classifier.code}} {{item.references.classifier.title}}</p>
    <!--                    <p>Подвид работ: {{item.references.spec.name}}</p>-->
                        <p>{{item.references.project.name}} , {{item.references.sector.name}} , {{item.references.place.name}}</p>
                        <p>{{item.references.org.name}}</p>
                    </div>


                    <div class="tech-button-wrap">
                        <btn-sec title="Открыть" type="todo" @click.native="goToElement(item)"></btn-sec>
                        <btn-sec title="Принять к осмотру" type="accept"></btn-sec>
                        <btn-sec title="Отклонить" type="cancel"></btn-sec>
                    </div>
                </div>
        </div>
    </div>
  </section>
</template>
<script>
import UiButton from '@/components/ui/Button'
import UiInput from '@/components/ui/Input'
import btnSec from '@/components/ui/BtnSec'
import UiMark from '@/components/ui/Mark'
import UiTabs from '@/components/ui/Tabs'
import {HTTP} from "@/http-common";

export default {
    name: "Acceptance",
    components: {
        UiButton , UiTabs , UiMark , btnSec, UiInput
    },
    data() {
        return {
            title : 'Создать приемку',
            data : null,
            ListReportData: [],
            ListReportDataChanges: [],
            errors : [],
            tabNum: 0,
            searchRequest: '',
            iconData: {
                new : '',
                ended : 'transporter-users',
                hot : 'transporter-Fire'
            },
            colorStatus: {
                new : {
                    background : '#FFC107',
                },
                ended : {
                    background: '#D4EDDA',
                    color: '#155724'
                },
                hot : {
                    background: '#F8D7DA',
                    color: '#721C24'
                }
            },
            dataTabs : [
                {
                    title: 'Все',
                },
                {
                    title: 'На сегодня',
                },
                {
                    title: 'Горящие',
                    icon: 'transporter-Fire',
                    icon_color: '#d60000',

                },
                {
                    title: 'Гибкий график',
                    icon: 'transporter-Filter_add',

                },
            ]
        }
    },
    beforeCreate(){
      let apiData = {
        method: '/api/v2/QAQC/Report.getList',
        requestData: {
          role: 'contractor',
          references : ["sector" , 'hot' , 'classifier_code' , 'spec' , 'contractor' , 'project' , 'creator', 'customer', 'head_foreman', 'org' , 'place']
        },
      }

      HTTP.get(apiData.method,{
        params: apiData.requestData
      })
          .then(response => {
            this.ListReportData = response.data.result
            this.ListReportDataChanges = this.ListReportData
            this.ListReportDataChanges.map(one => {
              return one.references.hot = {
                type: one.references.hot,
                name: 'горячая'
              }
            })
            this.ListReportDataChanges.map(one => {
              if(one.due_date === null) return one.due_date = 'Время не назначено'
            })
          })
          .catch(e => {
            console.log(e)
            throw e
          })

    },
    methods: {
        tabIdx(value){
            console.log(value);
            this.tabNum = value
        },
        iconChoise(item){
            if(item.status === 'new') return
            if(item.status === 'process_ended') return 
        },
        styleChoise(item){
            if(item.status === 'new') return this.colorStatus.new
            if(item.status === 'process_ended') return this.colorStatus.ended


        },
        searchStart(request = ''){
          let apiData = {
            method: '/api/v2/QAQC/Report.getList',
            requestData: {
              find: request,
              role: 'contractor',
              references : ["sector" , 'hot' , 'classifier_code' , 'spec' , 'contractor' , 'project' , 'creator', 'customer', 'head_foreman', 'org' , 'place']
            },
          }

          HTTP.get(apiData.method,{
            params: apiData.requestData
          })
              .then(response => {
                this.ListReportData = response.data.result
                this.ListReportDataChanges = this.ListReportData
                this.ListReportDataChanges.map(one => {
                  return one.references.hot = {
                    type: one.references.hot,
                    name: 'горячая'
                  }
                })
                this.ListReportDataChanges.map(one => {
                  if(one.due_date === null) return one.due_date = 'Время не назначено'
                })
                this.tabsLogic()
              })
              .catch(e => {
                console.log(e)
                throw e
              })
        },
        tabsLogic(){
          if(this.tabNum === 2) this.ListReportDataChanges = this.ListReportData.filter(one => {
            return one.references.hot.type
          })
          if(this.tabNum !== 2) this.ListReportDataChanges = this.ListReportData
        },
        goToElement(item){
            if (item.id) this.$router.push({ name: 'OneAcceptance', params: { Id: item.id, status: item.status } })
        }
    },
    watch: {
        tabNum: function(){
          this.tabsLogic()
        }
    },
}
</script>
<style scoped lang="scss">
@import '/src/assets/css/acceptance.scss';
</style>
