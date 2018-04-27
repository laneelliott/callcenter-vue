<template>
<div class="row justify-content-center">
    <div class="col-sm-4">
        <button class="btn btn-primary btn-larg btn-block" value="echeck" @click="updateTender($event)">Echeck</button>
    </div>
    <div class="col-sm-4">
        <button class="btn btn-primary btn-larg btn-block" value="credit-card" @click="updateTender($event)">Credit Card</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Tender',
    computed: {
        formStepName: function() {
            return this.$store.getters.formStepName
        },
        newStepObject: function() {
            if (event.target.value === 'echeck') {
                return {
                    component: 'echeck',
                    display: 'Echeck Account Information'
                }
            } else {
                return {
                    component: 'credit-card',
                    display: 'Credit Card Information'
                }
            }
        }
    },
    methods: {
        updateTender: function(event) {
            var flowUpdateObj = {
                checkFlow: ['echeck', 'credit-card'],
                newStep: this.newStepObject,
                location: this.formStepName
            }
            
            return this.$store.dispatch('updateFormFlow', flowUpdateObj).then(this.$store.dispatch('advanceStep'))
        }
    }
}
</script>

