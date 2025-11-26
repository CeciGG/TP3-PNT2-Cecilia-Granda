<template>
  <section class="card">
    <div class="card-header">
        <h3>Componente Api</h3>
    </div>

    <div class="card-body">

      <!-- -------- formulario de ingreso de productos --------- -->
      <form @submit.prevent="enviar">
        <!-- campo nombre -->
        <div class="form-group">
          <label for="nombre">nombre</label>
          <input type="text" id="nombre" class="form-control" 
            v-model.trim="producto.nombre"
            @input="productoDirty.nombre = true"
          >
          <!-- cartel validación -->
          <div v-if="!producto.nombre && productoDirty.nombre" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- campo precio -->
        <div class="form-group">
          <label for="precio">precio</label>
          <input type="number" id="precio" class="form-control" 
            v-model.number="producto.precio"
            @input="productoDirty.precio = true"
          >
          <!-- cartel validación -->
          <div v-if="!producto.precio && productoDirty.precio" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- campo stock -->
        <div class="form-group">
          <label for="stock">stock</label>
          <input type="number" id="stock" class="form-control" 
            v-model.number="producto.stock"
            @input="productoDirty.stock = true"
          >
          <!-- cartel validación -->
          <div v-if="!producto.stock && productoDirty.stock" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- campo marca -->
        <div class="form-group">
          <label for="marca">marca</label>
          <input type="text" id="marca" class="form-control" 
            v-model.trim="producto.marca"
            @input="productoDirty.marca = true"
          >
          <!-- cartel validación -->
          <div v-if="!producto.marca && productoDirty.marca" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- campo categoria -->
        <div class="form-group">
          <label for="categoria">categoría</label>
          <input type="text" id="categoria" class="form-control" 
            v-model.trim="producto.categoria"
            @input="productoDirty.categoria = true"
          >
          <!-- cartel validación -->
          <div v-if="!producto.categoria && productoDirty.categoria" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- campo detalles -->
        <div class="form-group">
          <label for="detalles">detalles</label>
          <input type="text" id="detalles" class="form-control" 
            v-model.trim="producto.detalles"
            @input="productoDirty.detalles = true"
          >
          <!-- cartel validación -->
          <div v-if="!producto.detalles && productoDirty.detalles" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- campo foto -->
        <div class="form-group">
          <label for="foto">foto</label>
          <input type="text" id="foto" class="form-control" 
            v-model.trim="producto.foto"
            @input="productoDirty.foto = true"
          >
          <!-- cartel validación -->
          <div v-if="!producto.foto && productoDirty.foto" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </div>

        <!-- campo envio -->
        <div class="form-check my-3">
          <input type="checkbox" id="envío" class="form-check-input" 
            v-model="producto.envio"
          >
          <label for="envio">envio</label>
        </div>

        <!-- botón de envío -->
         <button class="btn btn-success my-3" :disabled="algunCampoNoValido">Enviar</button>
      </form>

      <hr>

      <button class="btn btn-primary my-3 me-2" @click="obtener">Obtener</button>
      <button class="btn btn-danger my-3" @click="productos=[]">Borrar</button>

      <!-- <pre><p>{{ productos }}</p></pre> -->

      <div v-if="productos.length">
        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>precio</th>
                <th>stock</th>
                <th>marca</th>
                <th>categoría</th>
                <th>detalles</th>
                <th>foto</th>
                <th>envío</th>
                <th>acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(producto, index) in productos" :key="index">
                <td>{{ producto.id }}</td>
                <td>{{ producto.nombre }}</td>
                <td>{{ producto.precio }}</td>
                <td>{{ producto.stock }}</td>
                <td>{{ producto.marca }}</td>
                <td>{{ producto.categoria }}</td>
                <td>{{ producto.detalles }}</td>
                <td>
                  <img :src="producto.foto" height="100" :alt=producto.nombre >
                </td>
                <td>{{ producto.envio? 'Si' : 'No' }}</td>
                <td>
                  <button class="btn btn-warning my-1 me-2" @click="editar(producto.id)">Editar</button>
                  <button class="btn btn-danger my-1 me-2" @click="borrar(producto.id)">Borrar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h4 v-else class="alert alert-info">Pedir los productos a través del botón Obtener</h4>

    </div>
  </section>
</template>

<script>
import ServicioUsuarios from '@/servicios/usuarios';

export default {
  name: 'Api', // cambiá el nombre si querés

  // Registrar componentes hijos
  components: {
    // Ej: HijoComponente
  },

  // Propiedades que recibe el componente
  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  // Estado local
  data() {
    return {
      servicioUsuarios: new ServicioUsuarios(),
      producto: this.iniForm(), 
      productoDirty: this.iniForm(), 
      productos: [/* {
        nombre: "Bacon",
        precio: "590.79",
        stock: 48,
        marca: "Outdoors",
        categoria: "Ergonomic Rubber Chicken",
        detalles: "Ergonomic Hat made with Wooden for all-day colorless support",
        foto: "https://avatars.githubusercontent.com/u/14487899",
        envio: true,
        id: "1"
      },
      {
        nombre: "Mesa",
        precio: "435.85",
        stock: 20,
        marca: "Jewelry",
        categoria: "Ergonomic Concrete Chicken",
        detalles: "The Polly Tuna is the latest in a series of admired products from Leuschke - Gerlach",
        foto: "https://avatars.githubusercontent.com/u/5664561",
        envio: false,
        id: "2"
      },
      {
        nombre: "Shirt",
        precio: "919.29",
        stock: 50,
        marca: "Grocery",
        categoria: "Handcrafted Silk Shirt",
        detalles: "Discover the horse-like agility of our Cheese, perfect for super users",
        foto: "https://avatars.githubusercontent.com/u/15515039",
        envio: false,
        id: "3"
      } */],
    };
  },

  // Propiedades computadas
  computed: {
    // ejemplo: doble() { return this.contador * 2; }
    algunCampoNoValido() {
      return Object.entries(this.producto).filter(e => e[0]!='envio'? !e[1] : false).length
    }
  },

  // Observadores
  watch: {
    // ejemplo: contador(nuevo, viejo) { /* ... */ }
  },

  // Métodos
  methods: {
    iniForm() {
      return {
        nombre: null,
        precio: null,
        stock: null,
        marca: null,
        categoria: null,
        detalles: null,
        foto: null,
        envio: false,
      }
    },

    /* ------------ Métodos para consumir la API Restful ------------- */
    // GET
    async obtener() {
      const productos = await this.servicioProductos.getAll()
      //console.log(productos)
      this.productos = productos
    },
    // POST
    async enviar() {
      const producto = {...this.producto}
      console.log(producto)

      // agrego un producto en el recurso remoto
      const productoGuardado = await this.servicioProductos.post(producto)
      console.log(productoGuardado)

      // agrego un producto en el recurso local
      this.productos.push(productoGuardado)

      this.producto = this.iniForm()
      this.productoDirty = this.iniForm()
    },
    // PUT
    editar(id) {
      console.log('editar',id)
    },
    // DELETE
    borrar(id) {
      console.log('borrar',id)
    }
  },

  mounted() {
    console.log('Api -> mounted')

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
