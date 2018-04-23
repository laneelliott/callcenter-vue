<template>
    <div class="row justify-content-center">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputRoutingNum">Routing Number</label>
                    <input type="text" id="inputRoutingNum" class="form-control" placeholder="Routing Number">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputAccountNum">Account Number</label>
                    <input type="text" id="inputAccountNum" class="form-control" placeholder="Account Number">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Echeck',
    beforeMount: function() {
        this.$store.commit('updateTenderType', 'ECHK')
    }
}
</script>

