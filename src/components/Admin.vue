<template>
    <div class="container text-center">
        <h1>Admin</h1>
        <hr/>
        <div class="row">
            <div class="col-sm-6">
                <pi-config></pi-config>
            </div>
            <div class="col-sm-6">
                <data-import></data-import>
            </div>
        </div>
    </div>
</template>

<script>
import DataImport from './AdminComponents/DataImport'
import PersonalInfoConfig from './AdminComponents/PersonalInfoConfig'

export default {
    name: 'Admin',
    components: {
        'data-import': DataImport,
        'pi-config': PersonalInfoConfig
    }
}
</script>

<style lang="sass" scoped>

</style>


