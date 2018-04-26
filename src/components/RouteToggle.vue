<template>
    <div class="container">
        <div class="row justify-content-end">
            <div>
                <a><i class="fab fa-vuejs toggle" v-bind:class="{admintoggle: toggleState}" @click="toggleRoute"></i></a>
                <!-- <router-link to="/admin"><i class="fab fa-vuejs toggle"></i></router-link> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RouteToggle',
    computed: {
        toggleState: function() {
            return this.$store.getters.adminToggle
        }
    },
    methods: {
        toggleRoute: function() {
            if(this.toggleState) {
                this.$router.push('/')
            } else {
               this.$router.push('/admin') 
            }
            this.$store.commit('adminToggle', this.toggleState)
        }
    },
    mounted() {
        var path = this.$router.resolve(location)
        if (path.location.path == '/admin') {
            this.$store.commit('adminToggle', this.toggleState)
        }
    }
}
</script>

<style scoped>
.fab.toggle {
    font-size: 3rem;
    color: #2EB987;
    transition: .2s;
    cursor: pointer;
}
.admintoggle {
    transform: rotate(180deg);
}
</style>


