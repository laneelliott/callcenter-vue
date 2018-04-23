<template>
    <div class="row justify-content-center">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCCname">Name on Card</label>
                    <input type="text" id="inputCCname" class="form-control" placeholder="Dwight L. Moody" ref="ccName" v-model="ccName">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCCNum">Credit Card Number</label>
                    <input type="text" id="inputCCNum" class="form-control" placeholder="1111 2222 3333 4444" ref="ccNumber" v-model="ccNumber">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCCExpire">Expiration Date</label>
                    <input type="text" id="inputCCExpire" class="form-control" placeholder="05/22" ref="ccExpire" v-model="ccExpire">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCCSecurity">Security Code (CVV)</label>
                    <input type="text" id="inputCCSecurity" class="form-control" placeholder="123" ref="ccSecurity" v-model="ccSecurity">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreditCard',
    computed: {
        ccName: {
            get() {
                console.log('get')
                return this.$store.state.gift.ccName
            },
            set(value) {
                console.log('set')
                this.$store.commit('updateCCName', value)
            }
        },
        ccNumber: {
            get() {
                console.log('get')
                return this.$store.state.gift.ccNumber
            },
            set(value) {
                console.log('set')
                this.$store.commit('updateCCNumber', value)
            }
        },
        ccExpire: {
            get() {
                console.log('get')
                return this.$store.state.gift.ccExpire
            },
            set(value) {
                console.log('set')
                this.$store.commit('updateCCExpire', value)
            }
        },
        ccSecurity: {
            get() {
                console.log('get')
                return this.$store.state.gift.ccSecurity
            },
            set(value) {
                console.log('set')
                this.$store.commit('updateCCSecurity', value)
            }
        }
    },
    beforeMount: function() {
        this.$store.commit('updateTenderType', 'OLP')
    },
    mounted: function() {
        this.$refs.ccName.focus()
    }
}
</script>

