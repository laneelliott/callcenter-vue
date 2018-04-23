<template>
    <div class="row justify-content-center">
        <div class="col-sm-4">
            <button class="btn btn-primary btn-larg btn-block" value="0" @click="recurrenceCap($event)">AutoGift</button>
        </div>
        <div class="col-sm-4">
            <button class="btn btn-primary btn-larg btn-block" value="1" @click="recurrenceCap($event)">Single Gift</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GiftRecurrence',
    methods: {
        recurrenceCap: function(event) {
            //Set recurrence_cap to event.target.value
            //Advance step
            this.$store.dispatch('advanceStep')
        }
    }
}
</script>

