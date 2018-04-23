<template>
    <div class="row justify-content-center">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFirstName">First Name</label>
                    <input type="text" id="inputFirstName" class="form-control" placeholder="First name" ref="firstName" v-model="firstName">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLastName">Last Name</label>
                    <input type="text" id="inputLastName" class="form-control" placeholder="Last name" ref="lastName" v-model="lastName">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Name',
    computed: {
        firstName: {
            get() {
                console.log('get')
                return this.$store.state.gift.firstName
            },
            set(value) {
                console.log('set')
                this.$store.commit('updateFirstName', value)
            }
        },
        lastName: {
            get() {
                console.log('get')
                return this.$store.state.gift.lastName
            },
            set(value) {
                console.log('set')
                this.$store.commit('updateLastName', value)
            }
        }
    },
    mounted: function() {
        this.$refs.firstName.focus();
    }
}
</script>

