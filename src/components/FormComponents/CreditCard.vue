<template>
    <div class="row justify-content-center">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCCname">Name on Card</label>
                    <input type="text" id="inputCCname" class="form-control" placeholder="Dwight L. Moody">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCCNum">Credit Card Number</label>
                    <input type="text" id="inputCCNum" class="form-control" placeholder="1111 2222 3333 4444">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCCExp">Expiration Date</label>
                    <input type="text" id="inputCCExp" class="form-control" placeholder="05/22">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCVV">Security Code (CVV)</label>
                    <input type="text" id="inputCVV" class="form-control" placeholder="123">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreditCard',
    beforeMount: function() {
        this.$store.commit('updateTenderType', 'OLP')
    }
}
</script>

