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
    data() {
        return {
            data: {
                formName: 'test-callcenter1',
                journey: ['name', 'tender', 'review'],
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
            }
        }
    },
    methods: {
        sendData: function() {
            console.log('Data Sent')
            console.log(this.data)
            this.$store.commit('importState', this.data)
        }
    }
}
</script>

