<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>The job id is {{ id }}</p>
        <p>{{ job.details }}</p>
    </div>
    <dir v-else>
        <h1>Loading...</h1>
    </dir>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id )
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err))
    }
}
</script>

<style>

</style>