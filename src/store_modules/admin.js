const admin = {
    namespaced: true,
    state: {
        data: {
            formName: 'default',
            journey: [],
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
    },
    getters: {
        retrieveData: function(state) {
            return state.data
        }
    },
    mutations: {
        addStep: function (state, step) {
            state.data.journey.push(step)
        },
        deleteStep: function (state, stepIndex) {
            state.data.journey.splice(stepIndex, 1);
        }
    },
    actions: {

    }
}

export default admin
