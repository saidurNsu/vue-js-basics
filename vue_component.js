Vue.component('testcomponent',{
   template : '<div><h1>welcome from vue js component</h1></div>'
});

Vue.component('testcomponentsaidur',{
   template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
   data: function() {
      return {
         name : "sabbir"
      }
   },
   methods:{
      changename : function() {
         this.name = "Sakib Al hassan";
      },
      originalname: function() {
         this.name = "sabbir";
      }
   }
});

var vm0 = new Vue({
   el: '#component_test_saidur'
});


var vm = new Vue({
   el: '#component_saidur'
});
var vm1 = new Vue({
   el: '#component_rahman'
});

var vm2 = new Vue({
   el: '#component_test',
   components:{
      'testcomponent': {
         template : '<div><h1>This is coming from component</h1></div>'
      }
   }
});
