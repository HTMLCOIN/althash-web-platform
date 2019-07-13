<template>
  <v-layout>
    <v-flex align-center text-xs-center>
      <v-btn dark @click="clickBtn" :color="color">
        <slot>
          <v-icon>vpn_key</v-icon>
        </slot>
        <input type="file" style="display: none;" @change="handleFiles" ref="input" />
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['color'],
  methods: {
    clickBtn() {
      this.$refs.input.click()
    },
    handleFiles(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      const vue = this
      reader.onload = function() {
        vue.$emit('upload', {
          content: this.result
        })
      }
      reader.readAsText(file)
      this.$refs.input.value = ''
    }
  }
}
</script>
