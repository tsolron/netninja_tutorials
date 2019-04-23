new Vue({
  el: '#vue-app',
  data: {
    age: 26,
    a: 0,
    b: 0
    //name: '',
    /*job: 'Gamer',
    website: 'http://www.tsolron.com',
    websiteTag: '<a href="http://www.tsolron.com">Tsolron\'s website alternate method</a>',
    x: 0,
    y: 0*/
  },
  methods: {
    mounted: function () {
      window.setInterval(() => {
        this.countUp();
      },1000);
    },
    countUp: function() {
      this.a++;
    }
    /*logName: function() {
      console.log('you entered your name')
    },
    logAge: function() {
      console.log('you entered your age')
    },*/
    /*greet: function(time) {
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
    }*/
  },
  computed: {
    addToA: function() {
      return this.a + this.age;
    },
    addToB: function() {
      return this.b + this.age;
    },
    testMath: function() {
      return math.multiply(this.a,this.b);
    }
  }
});
