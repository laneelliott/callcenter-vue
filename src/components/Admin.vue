<template>
    <div class="container text-center">
        <h1>Admin</h1>
        <hr/>
        <div class="row">
            <div class="col-sm-6">
                <pi-config></pi-config>
                <tender-config></tender-config>
                <gr-config></gr-config>
            </div>
            <div class="col-sm-6">
                <form-item v-for="(item, index) in adminJourney" v-bind:item="item" v-bind:index="index" v-bind:key="item.id">
                    <span slot="title">{{item.display}}</span>
                </form-item>
            </div>
        </div>
        <hr>
        <data-import></data-import>
    </div>
</template>

<script>
import DataImport from './AdminComponents/DataImport'
import PersonalInfoConfig from './AdminComponents/PersonalInfoConfig'
import TenderConfig from './AdminComponents/TenderConfig'
import GiftRecurrenceConfig from './AdminComponents/GiftRecurrenceConfig'
import FormItem from './AdminComponents/FormItem'

export default {
    name: 'Admin',
    components: {
        'data-import': DataImport,
        'pi-config': PersonalInfoConfig,
        'tender-config': TenderConfig,
        'gr-config': GiftRecurrenceConfig,
        'form-item': FormItem
    },
    computed: {
        adminData: function() {
            return this.$store.getters['admin/retrieveData']
        },
        adminJourney: function() {
            return this.adminData.journey
        }
    },
    methods: {
        
    }
}
</script>

<style lang="sass" scoped>

</style>


