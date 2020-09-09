# vue-js-basics

- At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax
- Declarative Rendering

> we no longer have to interact with the HTML directly. A Vue app attaches itself to a single DOM element (#app in our case) then fully controls it. The HTML is our entry point, but everything else happens within the newly created Vue instance.
In addition to text interpolation, we can also bind element attributes

- Conditionals and Loops

 > we can bind data to not only text and attributes, but also the structure of the DOM. Moreover, Vue also provides a powerful transition effect system that can automatically apply transition effects when elements are inserted/updated/removed by Vue.

- Handling User Input
> To let users interact with your app, we can use the v-on directive to attach event listeners that invoke methods on our Vue instances

- two way binding V-model
> in this method we update the state of our app without touching the DOM - all DOM manipulations are handled by Vue, and the code you write is focused on the underlying logic.

Vue also provides the v-model directive that makes two-way binding between form input and app state a breeze

Composing with Components


In Vue, a component is essentially a Vue instance with pre-defined options. Registering a component in Vue is straightforward


If there is a component, the data object has to be referred from a function


In case of a component, the data is a function, which is used with Vue.extend
To refer to the data from the component, we need to create an instance of it



vue js template
we can render any html element through  vue js


image src
though V-bind :image src we can render image through vue js


vue js component
we can define customised html elements from vue js components by using vue.component

- Dynamic Components
> by using <component v-bind:is='something'></component> tag  we can display components dynamically 
