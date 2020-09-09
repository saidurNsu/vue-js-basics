var vm = new Vue({
   el: '#computed_props',
   data: {
      firstname :"",
      lastname :"",
      birthyear : ""
   },
   computed :{
      getfullname : function(){
         return this.firstname +" "+ this.lastname;
      }
   }
});

var vm1 = new Vue({
            el: '#saidur_computed',
            data: {
               name : "helloworld"
            },
            methods: {
               getrandomno1 : function() {
                  return Math.random();
               }
            },
            computed :{
               getrandomno : function(){
                  return Math.random();
               }
            }
         });

         var vm9 = new Vue({
            el: '#computed_props1',
            data: {
               firstName : "Terry",
               lastName : "Ben"
            },
            methods: {
            },
            computed :{
               fullname : {
                  get : function() {
                     return this.firstName+" "+this.lastName;
                  },
                  set : function(name) {
                    var fname = name.split(" ");
                    this.firstName = fname[0];
                    this.lastName = fname[1]
                 }
               }
            }
         });
