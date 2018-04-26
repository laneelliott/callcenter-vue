<template>
  <div class="container">
        <h1 class="text-center">Component Container</h1>
        <hr>
        <step-nav class="text-center"></step-nav>
        <!-- Wizard Step Components -->
        <component :is="formStepName"></component>
        <!-- End Wizard Step Components -->
        <prev-next></prev-next>
  </div>
</template>

<script>
import StepNavigation from './StepNavigation'
import PrevNext from './PrevNext'
import Name from './FormComponents/Name'
import Tender from './FormComponents/Tender'
import Echeck from './FormComponents/Echeck'
import CreditCard from './FormComponents/CreditCard'
import GiftRecurrence from './FormComponents/GiftRecurrence'
import Premium from './FormComponents/Premium'
import Review from './FormComponents/Review'
import AdminRedirect from './FormComponents/AdminRedirect'

export default {
    components: {
        'step-nav': StepNavigation,
        'prev-next': PrevNext,
        'name': Name,
        'tender': Tender,
        'echeck': Echeck,
        'credit-card': CreditCard,
        'gift-recurrence': GiftRecurrence,
        'premium': Premium,
        'review': Review,
        'admin-redirect': AdminRedirect
    },
    computed: {
        formStepName: function() {
            return this.$store.getters.formStepName
        }
    }
}
</script>

