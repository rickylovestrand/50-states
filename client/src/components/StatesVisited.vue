<template>
    <div>
        <h2>You've visited these states:</h2>
        <ul>
            <li v-for="visitedState in visitedStates">
                {{ visitedState.name }}
            </li>
        </ul>
    </div>

</template>

<script>

export default {
    name: 'StatesVisited', 
    data(){
        return {
            visitedStates: []
        }
    },
    mounted() {
        this.getVisitedStates()
    }, 
    methods: {
        getVisitedStates(){
            this.$stateService.getVisitedStates().then( myVisitedStates =>{
                this.visitedStates = myVisitedStates
            })
        }
    }
}
</script>

<style scoped>

ul {
    list-style: none;
}

li {
    font-size: large;
}

</style>