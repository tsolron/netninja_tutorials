new Vue({
  el: '#vue-app',
  data: {
    age: 26,
    a: 0,
    b: 0,
    error: false,
    success: false
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
