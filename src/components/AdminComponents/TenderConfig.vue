<template>
    <div class="card">
        <h5 class="card-header"  @click.self="toggleEdit"><i class="fas fa-pencil-alt float-left edit-btn" aria-expanded="false"></i>Tender Type<i class="fas fa-plus float-right add-btn" @click="add"></i></h5>
        
        <div class="card-body" v-bind:class="{collapse: edit}">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="allFields" value="all" v-model="selected">
                <label class="form-check-label" for="allFields">Both (User Choice)</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="nameOnly" value="credit" v-model="selected">
                <label class="form-check-label" for="nameOnly">Credit Card Only</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="nameOnly" value="echeck" v-model="selected">
                <label class="form-check-label" for="nameOnly">Echeck Only</label>
            </div>
            <div style="margin-top: 15px;"><i class="fas fa-plus text-center add-btn" @click="add"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TenderConfig',
    data: function() {
        return {
            edit: true,
            selected: 'all'
        }
    },
    computed: {
        tenderInfo: function() {
            if (this.selected === 'echeck') {
                return {
                    component: 'echeck',
                    config: '',
                    display: 'Echeck Information'
                }
            } else if (this.selected === 'credit') {
                return {
                    component: 'credit-card',
                    config: '',
                    display: 'Credit Card Information'
                }
            } else {
                return {
                    component: 'tender',
                    config: '',
                    display: 'Select Tender Type'
                }
            }
        }
    },
    methods: {
        toggleEdit: function() {
            this.edit = !this.edit
        },
        add: function() {
            this.$store.commit('admin/addStep', this.tenderInfo)
        }
    }
}
</script>

<style lang="sass" scoped>
.card-header {
    cursor: pointer;
}
.add-btn, .edit-btn {
    font-weight: 900;
    font-size: 1.25rem;
    cursor: pointer;
    &:hover{
        color: #00BB8A;
    }
}
</style>


