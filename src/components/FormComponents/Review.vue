<template>
    <div>
        <div class="row justify-content-center text-center">
            <div class="col-sm-6">
                <h5>Personal Info</h5>
                <hr/>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-2">
                <label>First Name:</label>
                <p>{{firstName}}</p>
            </div>
            <div class="col-sm-2">
                <label>Last Name:</label>
                <p>{{lastName}}</p>
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-sm-6">
                <h5>Gift Info</h5>
                <hr/>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-2">
                <label>Gift Type:</label>
                <p>{{giftRecurrence}}</p>
            </div>
            <div class="col-sm-2">
                <label>Tender Type:</label>
                <p>{{tenderType}}</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-2">
                <label>Wants Premium:</label>
                <p>{{premium}}</p>
            </div>
            <div class="col-sm-2">
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-sm-6">
                <hr/>
                <h5>Payment Info</h5>
            </div>
        </div>
        <div v-if="tenderType === 'OLP'">
            <div class="row justify-content-center">
                <div class="col-sm-2">
                    <label>Name on Card:</label>
                    <p>{{ccName}}</p>
                </div>
                <div class="col-sm-2">
                    <label>Credit Card Number:</label>
                    <p>{{ccNumber}}</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-2">
                    <label>Expiration Date:</label>
                    <p>{{ccExpire}}</p>
                </div>
                <div class="col-sm-2">
                    <label>Security Code:</label>
                    <p>{{ccSecurity}}</p>
                </div>
            </div>
        </div>
        <div v-if="tenderType === 'ECHK'">
            <div class="row justify-content-center">
                <div class="col-sm-2">
                    <label>Routing Number:</label>
                    <p>{{routingNumber}}</p>
                </div>
                <div class="col-sm-2">
                    <label>Account Number:</label>
                    <p>{{accountNumber}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Review',
    computed: {
        firstName: {
            get() {return this.$store.state.formData.donorInfo.firstName}
        },
        lastName: {
            get() {return this.$store.state.formData.donorInfo.lastName}
        },
        tenderType: {
            get() {return this.$store.state.formData.donorInfo.tenderType}
        },
        ccName: {
            get() {return this.$store.state.formData.donorInfo.ccName}
        },
        ccNumber: {
            get() {return this.$store.state.formData.donorInfo.ccNumber}
        },
        ccExpire: {
            get() {return this.$store.state.formData.donorInfo.ccExpire}
        },
        ccSecurity: {
            get() {return this.$store.state.formData.donorInfo.ccSecurity}
        },
        routingNumber: {
            get() {return this.$store.state.formData.donorInfo.routingNumber}
        },
        accountNumber: {
            get() {return this.$store.state.formData.donorInfo.accountNumber}
        },
        premium: {
            get() {return this.$store.state.formData.donorInfo.premium}
        },
        giftRecurrence: {
            get() {
                if (this.$store.state.formData.donorInfo.recurrence_cap === 0) {
                    return 'AutoGift'
                } else if (this.$store.state.formData.donorInfo.recurrence_cap === 1) {
                    return 'Single Gift'
                } else {
                    return ''
                }
            }
        }
    },
}
</script>

