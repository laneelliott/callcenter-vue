<template>
  <div class="container">
      <h1 class="text-center">Component Container</h1>
      <hr>
      <step-nav class="text-center"></step-nav>
      <!-- V-If components Here -->
      <name v-if="formStepName === 'name'"></name>
      <tender v-if="formStepName === 'tenderType'"></tender>
      <echeck v-if="formStepName === 'echeck'"></echeck>
      <credit-card v-if="formStepName === 'creditCard'"></credit-card>
      <gift-recurrence v-if="formStepName === 'giftRecurrence'"></gift-recurrence>
      <!-- End V-If componets -->
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

export default {
    components: {
        'step-nav': StepNavigation,
        'prev-next': PrevNext,
        'name': Name,
        'tender': Tender,
        'echeck': Echeck,
        'credit-card': CreditCard,
        'gift-recurrence': GiftRecurrence
    },
    computed: {
        formStepName: function() {
            return this.$store.getters.formStepName
        }
    }
}
</script>

