<style scoped>
.article-container {
  width: 50vw;
  margin: 0 auto;
  padding: 50px;
}
.has-addons {
  display: flex;
}
.input-control {
  width: 100%;
}
.input {
  font-size: xx-large;
}
.is-large {
  height: 72px!important;
}
p {
  font-size: 2em;
}
.media {
  padding: 20px;
}
</style>
<template>
  <div>
    <div class="article-container">
      <div class="field has-addons">
        <p class="control input-control">
          <input class="input" v-model="query" type="text" placeholder="Find a Chuck Norris Quote">
        </p>
        <p class="control">
          <a class="button is-large is-info" @click="requestTest()">
            Search
          </a>
        </p>
      </div>
      <p v-if="response.length === 1">Found {{ response.length }} Result!</p>
      <p v-if="response.length > 1">Found {{ response.length }} Results!</p>
      <article class="media" v-for="item in response">
        <figure class="media-left">
          <p class="image is-256x256">
            <img :src="item.icon_url">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Chuck Norris</strong>
              <br>
              {{ item.value }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// import keys from '../keys.json'
export default {
  name: 'landing',
  mounted () {
    this.requestTest()
  },
  data () {
    return {
      query: '',
      response: {}
    }
  },
  methods: {
    requestTest () {
      this.$http.get('https://api.chucknorris.io/jokes/search', {params: {
        query: this.query
      }}).then(response => {
        this.response = response.body.result
        console.log(response)
      }, response => {
        // error
        console.log(response)
      })
    }
  }
}
</script>
