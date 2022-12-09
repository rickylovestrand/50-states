<template>
    <div>
        <div id="navigation-links">
            <span class="nav-link">
                <router-link to="/">Home</router-link>
            </span>
            <span class="nav-link">
                <router-link to="/about">About this site</router-link>
            </span>
            <span class="nav-link">
                <router-link to="/myVisitedStates">My visited states</router-link>
            </span>


        </div>
        <p>Header image by 
            <a href="https://unsplash.com/photos/gtCWBwbZNpM">@mrrrk_smith at Unsplash</a>
        </p>
        <p><a target="_blank" href="https://icons8.com/icon/345/map-marker">Map Marker</a> 
            icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
</template>

<script>

export default {
    name: 'PageFooter'
}

</script>

<style scoped>

.nav-link {
    margin: 1rem;
}

</style>
