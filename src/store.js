import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formFlow: ['name', 'giftRecurrence', 'tenderType', 'review'],
        formStep: 0,
        gift: {
            firstName: '',
            lastName: '',
            tenderType: '',
            routingNumber: '',
            accountNumber: '',
            ccName: '',
            ccNumber: '',
            ccExpire: '',
            ccSecurity: '',
            recurrence_cap: '',
            premium: ''
        }
    },
    getters: {
        formStep: function(state) {
            return state.formStep
        },
        formStepName: function(state) {
            return state.formFlow[state.formStep]
        },
        reviewGift: function(state) {
            if (state.formStep == state.formFlow.length-1) {
                return true
            } else {
                return false
            }
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
        updateRoutingNumber: function (state, number) {
            state.gift.routingNumber = number
        },
        updateAccountNumber: function (state, number) {
            state.gift.accountNumber = number
        },
        updateCCName: function (state, name) {
            state.gift.ccName = name
        },
        updateCCNumber: function (state, number) {
            state.gift.ccNumber = number
        },
        updateCCExpire: function (state, date) {
            state.gift.ccExpire = date
        },
        updateCCSecurity: function (state, cvv) {
            state.gift.ccSecurity = cvv
        },
        updateRecurrenceCap: function (state, value) {
            state.gift.recurrence_cap = value
        },
        updatePremium: function (state, value) {
            state.gift.premium = value
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
            var index
            if (formUpdateObj.location === 'end') {
                index = state.formFlow.length-2
            } else {
                index = state.formFlow.indexOf(formUpdateObj.location)
            }
            flowTempFirst = state.formFlow.slice(0, index+1)
            flowTempLast = state.formFlow.slice(index+1)
            flowTempFirst.push(formUpdateObj.newStep)
            state.formFlow = flowTempFirst.concat(flowTempLast)
        },
        deleteStep: function(state, stepName) {
            let index = state.formFlow.indexOf(stepName)
            if (index > -1) {
                state.formFlow.splice(index, 1);
            }
        },
        updateStep: function(state, stepInfo) {
            let index = stepInfo[1]
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
        deleteStep: function(context, stepName) {
            context.commit('deleteStep', stepName)
        },
        updateFormFlow: function(context, formUpdateObj) {
            /* formUpdateObj: {
                checkFlow: [array of formSteps to check and overwrite if they already are in the form flow],
                newStep: 'name of the new component step to add',
                location: 'name of the form step you want to add the new step AFTER'
            }
            */
            var formFlow = this.state.formFlow
            var flowHasStep = false
            var stepInfo = [formUpdateObj.newStep]
            var location = formUpdateObj.location
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
            }
        }
    }
})