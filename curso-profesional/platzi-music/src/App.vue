<template>
  <div id="app">
     <h1>{{ msg }}</h1>
    <div class="contenido" v-show="mostrarContenido"> <!-- display none-->
      <p>{{ 1 + 1 }}</p>
      <p>{{ 'Hola' + 'Mundo'}}</p>
      <p>{{ true ? true : false }}</p>
      <p>{{ person.name }}</p>
      <p>{{ person.name.toUpperCase() }}</p>|
      <p>{{ JSON.stringify(person)}}</p>  
      <p>{{ true ? 'true' : 'false'}}</p>
    </div>
    <p v-if="showValue"> {{ value }}</p>
    <p v-else> {{ 'algo más' }}</p>
    
    <!-- <ul>
      <li v-for="item in items" :key="item">
        {{ item.mensaje }}
      </li>
    </ul> -->

    <br>
    <input ref="entrada"></input>
    <input ref="entrada2"></input>

    <h1>{{ message }}</h1>
  	<button @click="clickedButton">Click Me!</button>


     <v-client-table :data="tableData" :columns="columns"/>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Hello World!',
      msg: 'Hola Vue.js',
      person: {
          name: 'juan'
      },
      mostrarContenido: false,
      showValue: false,
      value : 'algo',
      items: [
        { mensaje: 'Foo' },
        { mensaje: 'Bar' }
      ],
      columns: ['id', 'name', 'age'],
      tableData: [
          { id: 1, name: "John", age: "20" },
          { id: 2, name: "Jane", age: "24" },
          { id: 3, name: "Susan", age: "16" },
          { id: 4, name: "Chris", age: "55" },
          { id: 5, name: "Dan", age: "40" },
      ],
      options: {
          // see the options API
      }
    }
  },
  methods: {
    clickedButton: function() {
			console.log(this.$refs, 'evento click button');
		}
  },
  mounted()
	{
		console.log( this.$refs , 'mounted load $refs ');
	}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
