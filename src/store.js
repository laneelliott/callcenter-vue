import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formFlow: ['name', 'tenderType', 'giftRecurrence'],
        formStep: 0,
        gift: {
            firstName: '',
            lastName: '',
            tenderType: ''
        }
    },
    getters: {
        formStep: function(state) {
            return state.formStep
        },
        formStepName: function(state) {
            return state.formFlow[state.formStep]
        }
    },
    mutations: {
        updateFirstName: function(state, name) {
            state.gift.firstName = name
        },
        updateLastName: function (state, name) {
            state.gift.lastName = name
        },
        updateTenderType: function (state, type) {
            state.gift.tenderType = type
        },
        advanceStep: function(state) {
            state.formStep++
        },
        previousStep: function(state) {
            state.formStep--
        },
        loadStep: function(state, stepIndex) {
            state.formStep = stepIndex;
        },
        addStep: function (state, formUpdateObj) {
            var flowTempFirst, flowTempLast
            var index = state.formFlow.indexOf(formUpdateObj.location)
            flowTempFirst = state.formFlow.slice(0, index+1)
            flowTempLast = state.formFlow.slice(index+1)
            flowTempFirst.push(formUpdateObj.newStep)
            state.formFlow = flowTempFirst.concat(flowTempLast)
        },
        updateStep: function(state, stepInfo) {
            let index = stepInfo[1]
            console.log(stepInfo)
            state.formFlow[index] = stepInfo[0]
        }
    },
    actions: {
        advanceStep: function(context) {
            context.commit('advanceStep')
        },
        previousStep: function(context) {
            context.commit('previousStep')
        },
        loadStep: function(context, stepIndex) {
            context.commit('loadStep', stepIndex)
        },
        updateFormFlow: function(context, formUpdateObj) {
            let formFlow = this.state.formFlow
            var flowHasStep = false
            var stepInfo = [formUpdateObj.newStep]
            var location = formUpdateObj.location
            console.log(location)
            for (let i=0; i < formUpdateObj.checkFlow.length; i++) {
                if (formFlow.indexOf(formUpdateObj.checkFlow[i]) !== -1 ){
                    stepInfo.push(formFlow.indexOf(formUpdateObj.checkFlow[i]))
                    flowHasStep = true
                    context.commit('updateStep', stepInfo)
                    return flowHasStep
                }
            }
            if (!flowHasStep) {
                context.commit('addStep', formUpdateObj)
            } else {
                console.log('we should have already updated the form flow')
            }
        }
    }
})