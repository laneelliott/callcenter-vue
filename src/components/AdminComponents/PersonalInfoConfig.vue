<template>
    <div class="card">
        <h5 class="card-header"  @click.self="toggleEdit"><i class="fas fa-pencil-alt float-left edit-btn" aria-expanded="false"></i>Personal Information<i class="fas fa-plus float-right add-btn" @click="add"></i></h5>
        
        <div class="card-body" v-bind:class="{collapse: edit}">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="allFields" value="name" v-model="selected">
                <label class="form-check-label" for="allFields">All Fields</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="nameOnly" value="name-only" v-model="selected">
                <label class="form-check-label" for="nameOnly">Name Only</label>
            </div>
            <div style="margin-top: 15px;"><i class="fas fa-plus text-center add-btn" @click="add"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PersonalInfoConfig',
    data: function() {
        return {
            edit: true,
            selected: 'name'
        }
    },
    computed: {
        personalInfo: function() {
            if (this.selected === 'name') {
                return {
                    component: 'name',
                    config: 'name',
                    display: 'All Donor Info'
                }
            } else {
                return {
                    component: 'name',
                    config: 'name-only',
                    display: 'Donor Name Only'
                }
            }
        }
    },
    methods: {
        toggleEdit: function() {
            this.edit = !this.edit
        },
        add: function() {
            this.$store.commit('admin/addStep', this.personalInfo)
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


