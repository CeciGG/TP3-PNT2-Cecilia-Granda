<template>
  <nav class="navbar navbar-expand-md navbar-light mb-1" style="background-color: yellowgreen;">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Ejercicio 1</RouterLink>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/api">Ejercicio 2</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar', 
  components: {
  },

  data() {
    return {
    };
  },
};
</script>

<style scoped></style>
