new Vue({
  el: '#vue-app',
  data: {
    name: 'Graham',
    job: 'Gamer',
    website: 'http://www.tsolron.com',
    websiteTag: '<a href="http://www.tsolron.com">Tsolron\'s website alternate method</a>',
    age: 26,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    },
    addYear: function(years) {
      this.age += years;
    },
    updateXY: function(event) {
      //console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert('clicked me');
    }
  }
});
