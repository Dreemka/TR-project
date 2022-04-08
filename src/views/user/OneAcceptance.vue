<template>
    <div class="one-acceptance">
        <div class="back-tech-wrp" ui-sref="tech.taking_over" @click="goToList()">
            <i style="color: #1a3761;" class="transporter-Back-arrow"></i>
            К списку приемок
        </div>
        <div class="title-wrapper">
            <h2 class="list-h">Приемка №{{idPage}}</h2>
        </div>
        <div class="display-flex-start">
                <btn-sec title="Принять к осмотру" type="accept-bg" @click.native="goToList()" class="mr-2"></btn-sec>
                <btn-sec title="Отклонить" type="cancel-bg" class="mr-2"></btn-sec>
                <btn-sec title="Редактировать" type="todo-bg" icon="transporter-Edit" ></btn-sec>
        </div>

        <div class="mt-2" v-if="Object.keys(ReportData).length !== 0" >
         <div class="tech-info-wrap">
             <div class="left-tech-info">
                 <h4>Общая информация</h4>
                 <div class="left-tech-info-wrap">
                     <div class="left-tech-info-block">
                         <ul>
                             <li><span>Тип:</span><span>{{ReportData.id}}</span></li>
                             <li><span>Статус:</span>
                                 <span>
                                 <!-- <mark class="tech-mark" ng-class="{'tech-mark-pink' : vm.itemTakingOver.type === 'Горит' , 'tech-mark-yelow' : vm.itemTakingOver.type === 'Новая' , 'tech-mark-green' : vm.itemTakingOver.type === 'Ожидает проверки', 'tech-mark-grey' : vm.itemTakingOver.type === 'Ожидает ответственного'}">{{ReportData.status}}
                                     <i ng-if="vm.itemTakingOver.type === 'Горит'" style="color: #d60000;" class="transporter-Fire text-16" ></i>
                                 </mark> -->
                                 <UiMark :title="ReportData.status | lang('ru')"
                                    :icon="iconChoise(ReportData)" 
                                    :styleChoise="styleChoise(ReportData)"
                                    class="mr-1"
                                 />

                                 <UiMark :title="ReportData.references.hot.name | lang('ru')"
                                    :icon="iconData.hot"
                                    :styleChoise="colorStatus.hot"
                                    v-if="ReportData.references.hot.type"
                                />
                                 </span></li>
                             <li><span>Создана:</span><span>{{ReportData.created_at | date('date')}}</span></li>
                             <li><span>Обновлена:</span><span>{{ReportData.updated_at | date('date')}}</span></li>
                         </ul>
                     </div>
                     <div class="left-tech-info-block">
                         <ul>
                             <li><span>Дата и время:</span><span>{{ReportData.due_date | date('datetime')}}</span></li>
                             <li><span>Продолжительность:</span><span>{{ReportData.duration}}</span></li>
                             <li><span>Была не в работе:</span><span>{{ReportData.id}}</span></li>
                         </ul>
                     </div>
                 </div>
             </div>

             <div class="right-tech-info">
                 <h4>Ответственные</h4>
                 <div class="right-tech-info-wrap">
                     <div class="full-tech-info-block">
                         <ul>
                             <li><span>Компания-исполнитель:</span><span>{{ReportData.id}}</span></li>
                             <li><span>Руководитель строительства:</span><span>{{ReportData.id}}</span></li>
                             <li><span>Генеральный подрядчик:</span><span>{{ReportData.id}}</span></li>
                             <li><span>Инженер технического надзора:</span><span>{{ReportData.id}}</span></li>
                             <li><span>Создатель приёмки:</span><span><a class="tech-a">{{ReportData.id}}</a></span></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>

        <div class="tech-info-wrap">

            <div class="outer-grid">
                <div>
                    <div class="outer-grid-title-wrap">
                        <h4>Сдаваемые работы</h4>
                        <!-- <div class="tech-button-blue-abris unselectable">
                            <a ui-sref="tech.tech_taking_over_item({takingOverNumber: item.number})" class="text-in-button"><span class="text-in-button">Посмотреть на BIM модели</span></a>
                        </div> -->
                         <btn-sec title="Посмотреть на BIM модели" 
                            type="todo" 
                            @click.native="searchStart(searchRequest)" 
                          />
                    </div>
                </div>
                <div>
                    <div class="left-tech-info-title-wrap">
                        <h4>Место предъявления работ</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="tech-work-type-block">
                            <ul>
                                <li><span>Вид работ:</span><span>{{ReportData.id}}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="left-tech-info-wrap">
                        <div class="full-tech-info-block">
                            <ul>
                                <li><span><b>{{ReportData.id}}</b></span></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="inner-grid">
                    <div class="row-grid-work">
                        <div>Подвиды работ:</div>
                    </div>
                    <div>
                    <div ng-repeat="item in vm.itemTakingOver.work_subtype" class="list-subwork-grid">
                    <div>{{ReportData.id}}</div>
                    <div>{{ReportData.id}}</div>
                    <div>{{ReportData.id}}</div>
                    <div></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tech-work-process">
            <div class="left-tech-info">
                <h4>Процесс работы по приемке</h4>
                <hr>
                <div class="tech-work-process-wrap">
                    <div class="tech-work-process-block">
                        <ul>
                            <li ng-repeat="work in vm.itemTakingOver.log_process_work"><span>{{ReportData.id}}</span><br><span class="span-tech-author"><a class="tech-a">{{ReportData.id}}</a></span><span><b>{{ReportData.id}}</b></span></li>
                            <li ng-repeat="work in vm.itemTakingOver.commit_process_work"><span>{{ReportData.id}}</span><br>
                                <span class="span-tech-author"><a class="tech-a">{{ReportData.id}}</a></span><span><b>{{ReportData.id}}</b></span><br><br>
                                <span><b>Коментарий:</b></span><br><br>
                                <span><b><i>{{ReportData.id}}</i></b></span></li>
                           <!-- <li><span>Создана:</span><span>{{vm.itemTakingOver.date_create}}</span></li>
                           <li><span>Обновлена:</span><span>{{vm.itemTakingOver.date_update}}</span></li> -->
                        </ul>
                    </div>
                </div>
                <div class="drop-back">
                <div class="drop">
                </div>
                </div>
                <br>
                <br>

                <br>

            </div>
    </div>
    </div>
    </div>
</template>

<script>
import btnSec from '@/components/ui/BtnSec'
// import {mapGetters , mapActions} from 'vuex'
import UiMark from '@/components/ui/Mark'
import {HTTP} from "@/http-common";

export default {
    name: 'OneAcceptance',
    components: {
        btnSec , UiMark
    },
    computed: {
    },
    methods: {
        iconChoise(item){
            if(item.status === 'new') return
            if(item.status === 'process_ended') return 
        },
        styleChoise(item){
            if(item.status === 'new') return this.colorStatus.new
            if(item.status === 'process_ended') return this.colorStatus.ended
        },
        goToList(){
          console.log(212)
            this.$router.push({ name: 'Acceptance'})
        }
    },
    beforeCreate(){
        let apiData = {
                method: '/api/v2/QAQC/Report.getItem',
                requestData: {
                    id: this.idPage,
                    role: 'contractor',
                    references : ["sector" , 'hot' , 'classifier_code' , 'spec' , 'contractor' , 'project' , 'creator', 'customer', 'head_foreman', 'org']
                },
            }

        HTTP.get('/api/v2/QAQC/Report.getItem',{
          params: apiData.requestData
        })
            .then(response => {
              this.ReportData = response.data.result
              this.ReportData.references.hot = {
                  type: this.ReportData.references.hot,
                  name: 'горячая'
                }
            })
            .catch(e => {
              console.log(e)
              throw e
            })

    },
    data(){
        return {
            idPage: this.$route.params.Id,
            ReportData: {},
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
    }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/one-acceptance.scss';
</style>