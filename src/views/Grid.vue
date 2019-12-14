<template>
  <div style="height: 100%;">
    <button @click="refresh">
      开始
    </button>
    <button @click="stop">
      停止
    </button>
    <div class="outside">
      <div class="grid gray">
        <span class="font-grid">{{ numberObj.one }}</span>
      </div>

      <div class="grid blue">
        <span class="font-grid">{{ numberObj.two }}</span>
      </div>

      <div class="grid red">
        <span class="font-grid">{{ numberObj.three }}</span>
      </div>

      <div class="grid yellow">
        <span class="font-grid">{{ numberObj.four }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numberObj: {
        one: 0,
        two: 0,
        three: 0,
        four: 0
      },
      timer: null
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    refresh () {
      if (this.timer) {
        this.stop()
      }

      this.timer = setInterval(() => {
        this.numberObj.one++
        this.numberObj.two += 2
        this.numberObj.three += 3
        this.numberObj.four += 4
      }, 1000)
    },
    stop () {
      clearTimeout(this.timer)
      this.numberObj = {
        one: 0,
        two: 0,
        three: 0,
        four: 0
      }
    }
  }
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
