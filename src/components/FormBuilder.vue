<template>
    <div class="container text-center">
        <h1>Form Builder</h1>
        <hr/>
        <data-import></data-import>
    </div>
</template>

<script>
import DataImport from './FormBuilderComponents/DataImport'

export default {
    name: 'FormBuilder',
    components: {
        'data-import': DataImport
    }
}
</script>

