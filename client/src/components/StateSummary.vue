<template>
    <div>
        <p>There are a total of {{ states.length }} states and the District of Colombia</p>
        <p>You have visited {{ totalVisited }} {{ units }}</p>

        <p id="all-visited-message" v-if="areAllVisited">You have visited all the states and the District of Colombia!</p>
    </div>

</template>

<script>

export default {
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        totalVisited(){
            let visitedCount = 0
            this.states.forEach( state =>{
                if (state.visited){
                    visitedCount++
                }
            })
            return visitedCount
        },
        units(){
            // no () when referring to computed properties
            if (this.totalVisited == 1){
                return 'state'
            } else {
                return 'states'
            }
        },
        areAllVisited(){
            return this.totalVisited === this.states.length
        }
    }
}

</script>

<style>

#all-visited-message{
    color: green;
    font-weight: 400
}

</style>