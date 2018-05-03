<template>
    <div class="card">
        <h5 class="card-header" @click.self="toggleEdit">Gift Recurrence<i class="fas fa-plus float-right add-btn" @click="add"></i></h5>
        
        <div class="card-body" v-bind:class="{collapse: edit}">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="allFields" value="choice" v-model="selected">
                <label class="form-check-label" for="allFields">Donors Choice</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="nameOnly" value="single" v-model="selected">
                <label class="form-check-label" for="nameOnly">Single Only</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="PersonalInfoOptions" id="nameOnly" value="monthly" v-model="selected">
                <label class="form-check-label" for="nameOnly">AutoGift Only</label>
            </div>
            <div style="margin-top: 15px;"><i class="fas fa-plus text-center add-btn" @click="add"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GiftRecurrenceConfig',
    data: function() {
        return {
            edit: true,
            selected: 'choice'
        }
    },
    computed: {
        giftRecurrence: function() {
            if (this.selected === 'single') {
                return {
                    component: 'gift-recurrence',
                    config: 1,
                    display: 'Single Gift'
                }
            } else if (this.selected === 'monthly') {
                return {
                    component: 'gift-recurrence',
                    config: 0,
                    display: 'AutoGift'
                }
            } else {
                return {
                    component: 'gift-recurrence',
                    config: '',
                    display: 'Gift Type'
                }
            }
        }
    },
    methods: {
        toggleEdit: function() {
            this.edit = !this.edit
        },
        add: function() {
            this.$store.commit('admin/addStep', this.giftRecurrence)
        }
    }
}
</script>

<style lang="sass" scoped>
.card-header {
    cursor: pointer;
}
.add-btn {
    font-weight: 900;
    font-size: 1.25rem;
    cursor: pointer;
    &:hover{
        color: #00BB8A;
    }
}
</style>


