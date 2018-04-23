<template>
    <div class="row justify-content-center">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputRoutingNum">Routing Number</label>
                    <input type="text" id="inputRoutingNum" class="form-control" placeholder="Routing Number" ref="routingNumber" v-model="routingNumber">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputAccountNum">Account Number</label>
                    <input type="text" id="inputAccountNum" class="form-control" placeholder="Account Number" ref="accountNumber" v-model="accountNumber">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Echeck',
    computed: {
        routingNumber: {
            get() {
                return this.$store.state.gift.routingNumber
            },
            set(value) {
                this.$store.commit('updateRoutingNumber', value)
            }
        },
        accountNumber: {
            get() {
                return this.$store.state.gift.accountNumber
            },
            set(value) {
                this.$store.commit('updateAccountNumber', value)
            }
        }
    },
    beforeMount: function() {
        this.$store.commit('updateTenderType', 'ECHK')
    },
    mounted: function() {
        this.$refs.routingNumber.focus()
    }
}
</script>

