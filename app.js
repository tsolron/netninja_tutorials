new Vue({
  el: '#vue-app',
  data: {
    name: 'Graham',
    job: 'Gamer'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
