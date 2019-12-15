<template>
  <div style="height: 100%;">
    <button @click="startAddCounter">
      开始
    </button>
    <button @click="stopCounter">
      停止
    </button>
    <div class="outside">
      <div class="grid gray">
        <span class="font-grid">{{ getGlobalCounter }}</span>
      </div>

      <div class="grid blue">
        <span class="font-grid">{{ getGlobalCounter }}</span>
      </div>

      <div class="grid red">
        <span class="font-grid">{{ getGlobalCounter }}</span>
      </div>

      <div class="grid yellow">
        <span class="font-grid">{{ getGlobalCounter }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      timer: null
    }
  },
  mounted () {
    // this.startAddCounter()
    console.log('mounted')
  },
  methods: {
    ...mapActions([
      // from store/index.js
      'incrementActions'
    ]),
    startAddCounter () {
      if (this.timer) {
        this.stopCounter()
      }

      this.timer = setInterval(() => {
        this.incrementActions()
      }, 1000)
    },
    stopCounter () {
      clearTimeout(this.timer)
      this.numberObj = {
        one: 0
      }
    }
  },
  computed: mapGetters([
    'getGlobalCounter'
  ])
}
</script>

<style scoped>

.outside {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.grid {
  height: 50%;
  width: 50%;
  display: inline-block;
  border-top: 2px solid black;
  border-left: 2px solid black;
  box-sizing:border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.font-grid {
  font-size: 30px;
}

.gray {
  background: gray;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.yellow {
  background: yellow;
}

</style>
