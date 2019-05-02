var one = new Vue({
  el: '#vue-app-one',
  data: {
    output: 'Favorite food'
  },
  methods: {
    readRefs: function() {
      // Contains all refs in Vue instance
      // this.$refs
      this.output = this.$refs.input.value;
    }
  },
  computed: {
    
  }
});
