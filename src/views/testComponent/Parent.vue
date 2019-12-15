<template>
  <div>
    <span>父组件: {{ number }}</span>
    <child
      :parent-number="number"
      @getNumber="fetchNumber"
    />
  </div>
</template>

<script>
import Child from './Child'
export default {
  data () {
    return {
      number: 233
    }
  },
  components: {
    Child
  },
  methods: {
    fetchNumber (value) {
      this.number = value
    }
  }
}
</script>

<style scoped>

</style>
