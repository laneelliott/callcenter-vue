<template>
    <div>
        <div class="row justify-content-center">
            <button class="btn btn-outline-primary" v-bind:disabled="adminData.journey == ''" @click="sendData">Load Form</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataImport',
    computed: {
        adminData: function() {
            return this.$store.getters['admin/retrieveData']
        },
        containsReview: function() {
            return this.adminData.journey.map(function(e) {return e.component;}).indexOf('review')
        }
    },
    methods: {
        sendData: function() {
            console.log('Data Sent')
            console.log(this.containsReview)
            if (this.containsReview !== -1) {
                console.log('Found Review')
            } else {
                this.$store.commit('admin/addStep', {component:'review', display: 'Review Gift'})
            }
           
            this.$store.commit('importState', this.adminData)
        }
    }
}
</script>

