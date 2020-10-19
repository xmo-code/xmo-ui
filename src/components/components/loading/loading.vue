<template>
  <transition name="modal-fade">
    <div class="xmo-loading--wrap">
      <div class="xmo-mask" v-if="fullScreen"></div>
      <div class="xmo-loading"
           :class="[
             {
               'xmo-loading--fullScreen':fullScreen,
               'customize':$slots.cus
             }
           ]"
      >
        <template v-if="!$slots.cus">
          <!--          ripple效果-->
          <!--          <div class="ripple"><div></div><div></div></div>-->
          <span class="xmo-loading--loader"
                :class="[
                  {
                    'xmo-loading--vertical':vertical,
                    'borderRightTransparent':color
                  }
                ]"
                :style="{
            'width':width+'px',
            'height':height+'px',
            'border-color':color,
            'border-width':borderWidth+'px'
                }"></span>
          <span class="xmo-loading--text" v-if="hasText"><slot>加载中...</slot></span>
        </template>
        <slot v-else name="cus"></slot>
        <i class="xmo-icon--close xmo-loading--close" v-if="fullScreen&&closeable" @click="closeAction"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'xmo-loading',
    props: {
      color: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      borderWidth: {
        type: String,
        default: ''
      },
      fullScreen: {
        type: Boolean,
        default: false
      },
      hasText: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      },
      closeable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeAction () {
        this.$emit('close')
      }
    }
  }
</script>
