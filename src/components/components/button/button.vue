<template>
  <button
    class="xmo-btn"
    @click="handleClick"
    :style="{backgroundColor:bgColor,color:color,'border-color':borderColor}"
    :class="[
      'xmo-btn--'+type,
      {
        'is-plain':plain,
        'is-round':round,
        'is-long':long,
        'xmo-btn--block':block,
        'no-radius':noRadius
      },
      iconClass
    ]"
    :disabled="disabled"
  >
    <i class="icon" v-if="icon"></i>
    <i class="xmo-icon--loading" v-if="loading&&!icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'xmo-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      loading: {
        type: Boolean,
        default: false
      },
      noRadius: {
        type: Boolean,
        default: false
      },
      bgColor: {
        type: String,
        default: ''
      },
      borderColor: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      block: Boolean,
      disabled: Boolean,
      plain: Boolean,
      round: Boolean
  },
    methods: {
      handleClick (event) {
        if (this.disabled) return
        this.$emit('click', event)
      }
    },
    computed: {
      iconClass () {
        if (this.icon !== '') return 'xmo-hasIconBtn'
      }
    }
  }
</script>
