<template>
    <div class="row justify-content-center" style="padding-top: 30px;">
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-primary" v-bind:disabled="formStep == 0" @click="previousStep">Prev</button>
            <button type="button" class="btn btn-outline-primary" @click="advanceStep">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrevNext',
    computed: {
        formStep: function() {
            return this.$store.state.formStep
        }
    },
    methods: {
        advanceStep: function() {
            this.$store.dispatch('advanceStep')
        },
        previousStep: function() {
            this.$store.dispatch('previousStep')
        }
    }
}
</script>
