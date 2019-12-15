<template>
  <div>
    <span>子组件: {{ childNumber }}</span>
    <button @click="add">
      增加
    </button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      childNumber: this.parentNumber
    }
  },
  props: {
    parentNumber: {
      type: Number,
      default: 0
    }
  },
  methods: {
    add () {
      this.childNumber++
      this.$emit('getNumber', this.childNumber)
    }
  }
}
</script>

<style scoped>

</style>
