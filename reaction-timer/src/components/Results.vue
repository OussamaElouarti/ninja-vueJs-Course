<template>
  <p>reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data () {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 100)
            this.rank = "Nadi..."
        else if (this.score < 250)
            this.rank = "mabikch..."
        else if (this.score < 400) {
            this.rank = 'naqs...'
        }
        else {
            this.rank = '7alazona...'
        }
    }
}
</script>

<style>
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
    button {
        background-color: #0faf87;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        letter-spacing: 1px;
        margin: 10px;
    }
    button[disabled] {
        opacity: 0.2;
        cursor: not-allowed;
    }
</style>