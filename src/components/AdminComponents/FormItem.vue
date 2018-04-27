<template>
   <div class="card">
        <h5 class="card-header">
            <i class="fas fa-bars float-left move-btn"></i>
            <slot name="title"></slot>
            <i class="fas fa-minus float-right remove-btn" @click="remove"></i>
        </h5>
    </div>
</template>

<script>
export default {
    name: 'FormItem',
    props: ['index'],
    methods: {
        remove: function() {
            console.log('removed')
            this.$store.commit('admin/deleteStep', this.index)
        }
    }
}
</script>

<style lang="sass" scoped>
.remove-btn {
    font-weight: 900;
    font-size: 1.25rem;
    cursor: pointer;
    &:hover{
        color: red;
    }
}
</style>


