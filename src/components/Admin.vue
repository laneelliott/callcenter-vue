<template>
    <div class="container text-center">
        <h1>Admin</h1>
        <hr/>
        <component :is="currentComponent"></component>
        <button class="btn btn-outline-primary" style="margin-bottom: 40px; margin-top: 40px;" @click="decreaseAdminStep" v-if="adminStep !== 0">Previous</button>
        <button class="btn btn-outline-primary" style="margin-bottom: 40px; margin-top: 40px;" @click="advanceAdminStep" v-if="currentComponent !== 'form-builder'">Next</button>
    </div>
</template>

<script>
import FormBuilder from './AdminComponents/FormBuilder'
import CodeConfiguration from './AdminComponents/CodeConfiguration'

export default {
    name: 'Admin',
    components: {
        'form-builder': FormBuilder,
        'code-configuration': CodeConfiguration
    },
    data() {
        return {
            components: ['code-configuration', 'form-builder'],
            adminStep: 0
        }
    },
    computed: {
        currentComponent: function() {
            return this.components[this.adminStep]
        }
    },
    methods: {
        advanceAdminStep: function() {
            return this.adminStep++
        },
        decreaseAdminStep: function() {
            return this.adminStep--
        }
    }
}
</script>

<style lang="sass" scoped>

</style>


