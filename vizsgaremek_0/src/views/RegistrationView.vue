<template>
    <section class="container">
        <h2>Regisztráció</h2>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <p>Regisztrálj még ma!</p>
                    <form>
                        <div class="mb-3">
                        <label for="Username" class="form-label">Felhasználó név</label>
                        <input type="username" class="form-control" id="username">
                      </div>
                      <div class="mb-3">
                        <label for="Email" class="form-label">Email cím</label>
                        <input type="email" class="form-control" id="email">
                      </div>
                      <div class="mb-3">
                        <label for="Password" class="form-label">Jelszó</label>
                        <input type="password" class="form-control" id="password">
                      </div>
                      <div class="mb-3">
                        <label for="Password" class="form-label">Jelszó Megerősítése</label>
                        <input type="password" class="form-control" id="password">
                      </div>
                      <button type="submit" class="btn btn-success">Regisztráció</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: "RegistrationView",
}
</script>

<style scoped>
.container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 33%;
    color: white;
}
h2,p{
    text-align: center;
}
button{
    border: 5px double black;
}
</style>