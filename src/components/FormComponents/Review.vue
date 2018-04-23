<template>
    <div>
        <div class="row justify-content-center">
            <h5 v-show="firstName!=='' || lastName!== ''">Name: {{firstName}} {{lastName}}</h5>
        </div>
        <div class="row justify-content-center">
            <h5 v-if="giftRecurrence !== ''">Gift Type: {{giftRecurrence}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Review',
    computed: {
        firstName: {
            get() {return this.$store.state.gift.firstName}
        },
        lastName: {
            get() {return this.$store.state.gift.lastName}
        },
        giftRecurrence: {
            get() {
                console.log(this.$store.state.gift.recurrence_cap)
                if (this.$store.state.gift.recurrence_cap === 0) {
                    return 'AutoGift'
                } else if (this.$store.state.gift.recurrence_cap === 1) {
                    return 'Single Gift'
                } else {
                    return ''
                }
            }
        }
    },
}
</script>

