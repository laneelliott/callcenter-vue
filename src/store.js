import Vue from 'vue'
import Vuex from 'vuex'
import admin from './store_modules/admin'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        admin: admin
    },
    state: {
        formData: {
            formName: 'default',
            journey: [{component: 'admin-redirect',display: 'NO DATA FOUND'}],
            donorInfo: {
                firstName: '',
                lastName: '',
                email: '',
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
        formStep: 0,
        adminToggle: false
    },
    getters: {
        formStep: function(state) {
            return state.formStep
        },
        formStepName: function(state) {
            return state.formData.journey[state.formStep].component
        },
        componentProps: function(state) {
            return state.formData.journey[state.formStep]
        },
        formStepDisplay: function(state) {
            return state.formData.journey[state.formStep].display
        },
        reviewGift: function(state) {
            if (state.formStep == state.formData.journey.length-1) {
                return true
            } else {
                return false
            }
        },
        adminToggle: function(state) {
            return state.adminToggle
        }
    },
    mutations: {
        updateFirstName: function(state, name) {
            state.formData.donorInfo.firstName = name
        },
        updateLastName: function (state, name) {
            state.formData.donorInfo.lastName = name
        },
        updateEmail: function (state, email) {
            state.formData.donorInfo.email = email
        },
        updateTenderType: function (state, type) {
            state.formData.donorInfo.tenderType = type
        },
        updateRoutingNumber: function (state, number) {
            state.formData.donorInfo.routingNumber = number
        },
        updateAccountNumber: function (state, number) {
            state.formData.donorInfo.accountNumber = number
        },
        updateCCName: function (state, name) {
            state.formData.donorInfo.ccName = name
        },
        updateCCNumber: function (state, number) {
            state.formData.donorInfo.ccNumber = number
        },
        updateCCExpire: function (state, date) {
            state.formData.donorInfo.ccExpire = date
        },
        updateCCSecurity: function (state, cvv) {
            state.formData.donorInfo.ccSecurity = cvv
        },
        updateRecurrenceCap: function (state, value) {
            state.formData.donorInfo.recurrence_cap = value
        },
        updatePremium: function (state, value) {
            state.formData.donorInfo.premium = value
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
                index = state.formData.journey.length-2
            } else {
                index = state.formData.journey.map(function (e) { return e.component; }).indexOf(formUpdateObj.location)
            }
            flowTempFirst = state.formData.journey.slice(0, index+1)
            flowTempLast = state.formData.journey.slice(index+1)
            flowTempFirst.push(formUpdateObj.newStep)
            state.formData.journey = flowTempFirst.concat(flowTempLast)
        },
        deleteStep: function(state, stepName) {
            let index = state.formData.journey.indexOf(stepName)
            if (index > -1) {
                state.formData.journey.splice(index, 1);
            }
        },
        updateStep: function(state, stepInfo) {
            let index = stepInfo[1]
            state.formData.journey[index] = stepInfo[0]
        },
        importState: function(state, payload) {
            state.formData = payload
        },
        adminToggle: function(state, toggleState) {
            state.adminToggle = !state.adminToggle
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
                newStep: {object of new component to add}
                location: 'name of the form step you want to add the new step AFTER'
            }
            Function lets you find the index of an item nested in an array of objects
            (formFlow.map(function (e) { return e.component; }).indexOf(stepInfo) !== -1 )
            */
            var formFlow = this.state.formData.journey
            var flowHasStep = false
            var stepInfo = [formUpdateObj.newStep]
            var location = formUpdateObj.location
            for (let i=0; i < formUpdateObj.checkFlow.length; i++) {
                if (formFlow.map(function(e) { return e.component; }).indexOf(formUpdateObj.checkFlow[i]) !== -1 ){
                    stepInfo.push(formFlow.map(function (e) { return e.component; }).indexOf(formUpdateObj.checkFlow[i]))
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