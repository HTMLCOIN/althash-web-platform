<template>
  <div>
    <center>
      <p>
        <span class="subheading">
          {{ $t('file_creator.download') }}
        </span>
      </p>
      <p>
        <v-btn :color="color" :download="downloadName" :href="href" @click="doneClick" target="_blank">
          <slot>
            <v-icon>
              cloud_download
            </v-icon>
          </slot>
        </v-btn>
      </p>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    downloadName() {
      return this.download ? this.download : (new Date()).getTime()
    }
  },
  methods: {
    doneClick() {
      this.$emit('click')
    }
  },
  props: ['color', 'download', 'href'],
}
</script>
