import Popup from '../src';
new Vue({
  el: '#wrapper',
  components: {
    'popup': Popup
  },

  data() {
    return {
      popupVisible1: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
      popupVisible5: false
    };
  }
});
