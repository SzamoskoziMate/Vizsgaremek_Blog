<template>
    <section class="container">
        <h2>Bejelentkezés</h2>
        <div class="container-fluid">
          <div>
                    <p>Jelentkezz be meglévő felhasználói fiókodba!</p>
                <form>
                      <div class="input-group-sm">
                        <label for="Email1" class="input-group-text">Email cím</label>
                        <Field type="text" class="form-control" id="Email1" rules="required|email"/>
                        <ErrorMessage name="email" as="div" class="alert alert-danger m-1"/>
                      </div>
                      <div class="input-group-sm">
                        <label for="Password1" class="input-group-text">Jelszó</label>
                        <Field type="password" class="form-control" id="Password1" rules="required|min:12"/>
                        <ErrorMessage name="password" as="div" class="alert alert-danger m-1"/>
                    </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="Check1">
                        <label class="form-check-label" for="Check1">Emlékezz rám</label>
                      </div>
                      <button type="submit" class="btn btn-success">Belépés</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { Form as VForm, Field, ErrorMessage } from 'vee-validate';
export default{
  name: 'LoginView',
  components:{
    VForm,
    Field,
    ErrorMessage
  }
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