<template>
    <div style="padding-bottom: 30px">
        <h5>Step Navigation</h5>
        <div class="row justify-content-center">
            <div class="btn-group" role="group">
                <button class="btn btn-outline-primary" v-bind:class="[formStep == index ? selectedStep : '']" v-for="(step, index) in formFlow" :value="index" :key="step.id" @click="loadStep($event)">{{step}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepNavigation',
    data() {
        return {
            selectedStep: 'selectedStep'
        }
    },
    computed: {
        formStep: function() {
            return this.$store.state.formStep
        },
        formStepName: function() {
            return this.$store.getters.formStepName
        },
        formFlow: function() {
            return this.$store.state.formFlow
        }
    },
    methods: {
        loadStep: function(event) {
            return this.$store.dispatch('loadStep', parseInt(event.target.value))
        }
    }
}
</script>

