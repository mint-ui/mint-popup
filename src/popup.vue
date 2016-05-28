<template>
  <div v-show="visible" class="mint-popup" :class="[position ? 'mint-popup-' + position : '']" :transition="popupTransition">
    <slot></slot>
  </div>
</template>

<style>
  @component-namespace mint {
    @component popup {
      position: fixed;
      background: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @descendent top {
        top: 0;
        right: auto;
        bottom: auto;
        left: 50%;
        transform: translate(-50%, 0);
      }

      @descendent right {
        top: 50%;
        right: 0;
        bottom: auto;
        left: auto;
        transform: translate(0, -50%);
      }

      @descendent bottom {
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
      }

      @descendent left {
        top: 50%;
        right: auto;
        bottom: auto;
        left: 0;
        transform: translate(0, -50%);
      }
    }
  }

  .popup-slide-top-transition,
  .popup-slide-right-transition,
  .popup-slide-bottom-transition,
  .popup-slide-left-transition {
    transition: transform .3s ease-out;
  }

  .popup-slide-top-enter,
  .popup-slide-top-leave {
    transform: translate(-50%, -100%);
  }

  .popup-slide-right-enter,
  .popup-slide-right-leave {
    transform: translate(100%, -50%);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave {
    transform: translate(-50%, 100%);
  }

  .popup-slide-left-enter,
  .popup-slide-left-leave {
    transform: translate(-100%, -50%);
  }

  .popup-fade-transition {
    transition: opacity .3s;
  }

  .popup-fade-enter,
  .popup-fade-leave {
    opacity: 0;
  }
</style>

<script type="text/babel">
  import Popup from 'vue-popup';
  require('vue-popup/lib/popup.css');

  export default {
    name: 'mt-popup',

    mixins: [Popup],

    props: {
      modal: {
        default: true
      },

      closeOnClickModal: {
        default: true
      },

      popupTransition: {
        type: String,
        default: 'popup-slide'
      },

      position: {
        type: String,
        default: ''
      }
    },

    compiled() {
      if (this.popupTransition !== 'popup-fade') {
        this.popupTransition = `popup-slide-${ this.position }`;
      }
    }
  };
</script>