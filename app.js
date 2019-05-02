var varByReference = {
  name: 'ref name'
}

Vue.component('greeting', {
  template: '<p>Greetings, {{ name }} <button v-on:click="changeCompName()">Click to Change Name</button></p>',
  data: function() {
    return {
      name: 'Fancy Name'
    }
    // To use varByReference
    // return varByReference;
  },
  methods: {
    changeCompName: function() {
      this.name = 'New Name';
    }
  }
});

var one = new Vue({
  el: '#vue-app-one',
  data: {

  },
  methods: {

  },
  computed: {

  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods: {

  },
  computed: {

  }
});
