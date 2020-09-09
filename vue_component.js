Vue.component('testcomponent',{
   template : '<div><h1>welcome from vue js component</h1></div>'
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
