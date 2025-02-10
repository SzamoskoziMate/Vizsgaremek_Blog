<template>
    <section class="container">
        <h2>Bejelentkezés</h2>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <p>Jelentkezz be meglévő felhasználói fiókodba!</p>
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email cím</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Jelszó</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                      </div>
                      <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Emlékezz rám</label>
                      </div>
                      <button type="submit" class="btn btn-success">Belépés</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: "LoginView",
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