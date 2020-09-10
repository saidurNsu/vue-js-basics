var vm = new Vue({
   el: '#classbinding',
   data: {
               title : "This is class binding example",
               isActive : true,
               hasError : true
            }

});

var vm1 = new Vue({
            el: '#classbindingsaidur',
            data: {
               title : "This is class binding example",
               infoclass : 'info',
               errorclass : 'displayError',
               isActive : true,
               haserror : false
            },
            components:{
               'new_component' : {
                  template : '<div class = "info">Class Binding for component</div>'
               }
            }
         });
