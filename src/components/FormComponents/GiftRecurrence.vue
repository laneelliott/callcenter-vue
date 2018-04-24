<template>
    <div class="row justify-content-center">
        <div class="col-sm-4">
            <button class="btn btn-primary btn-larg btn-block" value="0" @click="recurrenceCap($event)">AutoGift</button>
        </div>
        <div class="col-sm-4">
            <button class="btn btn-primary btn-larg btn-block" value="1" @click="recurrenceCap($event)">Single Gift</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GiftRecurrence',
    computed: {
        formUpdateObj: function() {
            return {
                checkFlow: ['premium'],
                newStep: 'premium',
                location: 'end'
            }
        }
    },
    methods: {
        recurrenceCap: function(event) {
            this.$store.commit('updateRecurrenceCap', parseInt(event.target.value))
            if (event.target.value === '1') {
                return this.$store.dispatch('updateFormFlow', this.formUpdateObj).then(this.$store.dispatch('advanceStep'))
            } else {
                return this.$store.dispatch('deleteStep', 'premium').then(this.$store.dispatch('advanceStep'))
            }
        }
    }
}
</script>

