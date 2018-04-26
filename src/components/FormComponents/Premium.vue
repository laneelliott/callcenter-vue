<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-sm-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="checkboxPremium" v-model="premium">
                    <label class="form-check-label" for="checkboxPremium">Would you like to receive this resource?</label>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Premium',
    computed: {
        premium: {
            get() {
                return this.$store.state.formData.donorInfo.premium
            },
            set(value) {
                this.$store.commit('updatePremium', value)
            }
        }
    }
}
</script>

