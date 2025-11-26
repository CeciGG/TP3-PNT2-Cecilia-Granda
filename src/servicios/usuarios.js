import axios from "axios"

class ServicioUsuarios {
    #url = ''

    constructor() {
        this.#url = 'https://6926405226e7e41498f9d08f.mockapi.io/usuarios/users'
    }

    getAll = async () => {
        try {
            console.log("getAll")
            const { data:usuarios } = await axios.get(this.#url)
            
            return usuarios
        }
        catch(error) {
            console.error('Error usuarios GET', error.message)
        }
    }
}

export default ServicioUsuarios