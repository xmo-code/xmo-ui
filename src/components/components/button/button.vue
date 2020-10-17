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
      }

    }
  };
</script>
