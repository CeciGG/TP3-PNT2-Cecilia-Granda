export default {
  name: 'Formulario',

  components: {
    // componentes hijos
  },

  data() {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      listaPersonas: []
    };
  },

  computed: {
    errorNombre() {
      let mensaje = ''
      let nombre = this.formData.nombre
      if(!nombre) mensaje = 'Campo requerido'
      else if(nombre.length < 5) mensaje = 'Este campo debe poseer al menos 5 caracteres'
      else if(nombre.length > 15) mensaje = 'Este campo debe poseer como máximo 15 caracteres'

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.nombre,
        ok: mensaje == ''
      }
    },
    errorEdad() {
      let mensaje = ''
      let edad = this.formData.edad
      if(!edad) mensaje = 'Campo requerido'
      else if(edad < 18) mensaje = 'Debe ingresar una edad mayor a 18 años.'
      else if(edad > 120) mensaje = 'Debe ingresar una edad menor a 120 años.'

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.edad,
        ok: mensaje == ''
      }
    },    
    errorEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      let mensaje = ''
      let email = this.formData.email
      if(!email) mensaje = 'Campo requerido'
      else if(!regex.test(email)) mensaje = 'Debe ser un email válido'

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.email,
        ok: mensaje == ''
      }
    },
  },

  methods: {
    getInicialData() {
      return {
        nombre: null,
        apellido: null,
        edad: null
      }
    },
    estadoBotonDeshabilitado() {
      return !this.errorNombre.ok || !this.errorEmail.ok || !this.errorEdad.ok
    },
    enviar() {
      const datos = { ...this.formData }
      this.listaPersonas.push(datos)

      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    }
  },
};
