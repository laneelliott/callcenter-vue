const admin = {
    namespaced: true,
    state: {
        data: {
            formName: 'default',
            journey: [],
            donorInfo: {
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
    },
    getters: {
        retrieveData: function(state) {
            return state.data
        }
    },
    mutations: {
        addStep: function (state, stepName) {
            state.data.journey.push(stepName)
        }
    },
    actions: {

    }
}

export default admin
