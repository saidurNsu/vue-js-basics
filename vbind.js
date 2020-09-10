var vm = new Vue({
   el: '#classbinding',
   data: {
      title : "This is class binding example",
      infoclass : 'info',
      errorclass : 'displayError',
      isActive : false,
      haserror : true
   },
   components:{
      'new_component' : {
         template : '<div class = "info">Class Binding for component</div>'
      }
   }
});
