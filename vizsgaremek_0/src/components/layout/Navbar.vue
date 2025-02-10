<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Főoldal</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/login">Bejelentkezés</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/registration">Regisztráció</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  <script>
  import { RouterLink } from "vue-router";
  
  export default{
  
      name: "Navbar",
      components:{
          RouterLink
      }
  }
  </script>
  
  <style scoped>
  nav {
    background-color: black !important;
    border: 3px double #00ff2b;
  }
  .nav-link{
    color: #00ff2b;
  }
  .nav-link:hover{
    color: white;
  }
  .nav-link:focus{
    color: #00ff2b;
  }
  </style>