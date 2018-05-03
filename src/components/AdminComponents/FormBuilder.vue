<template>
    <div>
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
import DataImport from './DataImport'
import PersonalInfoConfig from './PersonalInfoConfig'
import TenderConfig from './TenderConfig'
import GiftRecurrenceConfig from './GiftRecurrenceConfig'
import FormItem from './FormItem'

export default {
    name: 'FormBuilder',
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
