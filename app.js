new Vue({
  el: '#vue-app',
  data: {
    name: 'Graham',
    job: 'Gamer',
    website: 'http://www.tsolron.com',
    websiteTag: '<a href="http://www.tsolron.com">Tsolron\'s website alternate method</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
