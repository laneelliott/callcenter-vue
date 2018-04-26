<template>
    <div>
        <div class="row justify-content-center">
            <button class="btn btn-outline-primary" @click="sendData">Send Data</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataImport',
    computed: {
        adminData: function() {
            return this.$store.getters['admin/retrieveData']
        }
    },
    // data() {
    //     return {
    //         data: {
    //             formName: 'test-callcenter1',
    //             journey: ['tender'],
    //             donorInfo: {
    //                 firstName: '',
    //                 lastName: '',
    //                 tenderType: '',
    //                 routingNumber: '',
    //                 accountNumber: '',
    //                 ccName: '',
    //                 ccNumber: '',
    //                 ccExpire: '',
    //                 ccSecurity: '',
    //                 recurrence_cap: '',
    //                 premium: ''
    //             }
    //         }
    //     }
    // },
    methods: {
        sendData: function() {
            console.log('Data Sent')
            console.log(this.adminData)
            this.$store.commit('importState', this.adminData)
        }
    }
}
</script>

