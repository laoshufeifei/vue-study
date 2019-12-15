
<template>
  <div>
    <h1>This is an test page </h1>

    <button @click="counter += 1">
      Add 1
    </button>
    <p>The button above has been clicked {{ counter }} times.</p>

    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'" />
        below
      </p>
      <el-button @click="greet">
        el-button
      </el-button>
    </div>

    <div
      :class="[isBlue ? 'blue' : 'red']"
      @click="changeColor"
    />

    <div>
      <h1>{{ getGlobalCounter }}</h1>
    </div>
    <button @click="incrementActions">
      Add 1
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      counter: 0,
      name: 'FiFi',
      isBlue: false
    }
  },
  methods: {
    ...mapActions([
      // from store/index.js
      'incrementActions'
    ]),
    greet: function (event) {
      alert('Hello ' + this.name + ', you have click ' + this.counter + ' times!')
      if (event) {
        console.log(event.target.tagName)
      }
    },
    changeColor () {
      this.isBlue = !this.isBlue
    }
  },
  computed: mapGetters([
    'getGlobalCounter'
  ])
}
</script>

<style scoped>

.blue {
  width: 100px;
  height: 100px;
  position: relative;
  left: 200px;
  background: blue;
}

.red {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
