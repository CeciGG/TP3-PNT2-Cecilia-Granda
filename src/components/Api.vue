<template>
  <section class="card">
    <div class="card-header">
        <h3>Ejercicio 2</h3>
    </div>

    <div class="card-body">
      <table class="table table-success table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Edad</th>
                <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(persona, index) in listaPersonas" :key="index">
                <td>{{ persona.id }}</td>
                <td>{{ persona.name }}</td>
                <td>{{ persona.email }}</td>
                <td>{{ persona.tel }}</td>
              </tr>
            </tbody>
        </table>

    </div>
  </section>
</template>

<script>
import ServicioUsuarios from '@/servicios/usuarios';

export default {
  name: 'Api',

  data() {
    return {
      servicioUsuarios: new ServicioUsuarios(),
      listaPersonas: [],
    };
  },

  methods: {
    async obtener() {
      const personas = await this.servicioUsuarios.getAll()
      console.log(personas)
      this.listaPersonas = personas
    },
  },

  mounted() {
    this.obtener()
  },
};
</script>

<style scoped>
.card-header {
    background-color: seagreen;
    color: white;
}
.table th {
  text-transform: uppercase;
  font-size: 1.1em;
}
label {
  text-transform: capitalize;
  font-style: italic;
}
</style>
