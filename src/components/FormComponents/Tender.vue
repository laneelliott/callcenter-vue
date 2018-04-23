<template>
<div class="row justify-content-center">
    <div class="col-sm-4">
        <button class="btn btn-primary btn-larg btn-block" value="echeck" @click="updateTender($event)">Echeck</button>
    </div>
    <div class="col-sm-4">
        <button class="btn btn-primary btn-larg btn-block" value="creditCard" @click="updateTender($event)">Credit Card</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Tender',
    computed: {
        formStepName: function() {
            return this.$store.getters.formStepName
        }
    },
    methods: {
        updateTender: function(event) {
            var flowUpdateObj = {
                checkFlow: ['echeck', 'creditCard'],
                newStep: event.target.value,
                location: this.formStepName
            }
            
            return this.$store.dispatch('updateFormFlow', flowUpdateObj).then(this.$store.dispatch('advanceStep'))
        }
    }
}
</script>

