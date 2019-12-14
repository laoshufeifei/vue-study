<template>
  <div>
    <h1>This is an test page </h1>

    <button @click="counter += 1">
      Add 1
    </button>
    <p>The button above has been clicked {{ counter }} times.</p>

    <button @click="greet">
      Greet
    </button>

    <div
      :class="[isBlue ? 'blue' : 'red']"
      @click="changeColor"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      name: 'feifei',
      isBlue: false
    }
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + ', you have click ' + this.counter + ' times!')
      // `event` 是原生 DOM 事件
      if (event) {
        console.log(event.target.tagName)
      }
    },
    changeColor () {
      this.isBlue = !this.isBlue
    }
  }
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
