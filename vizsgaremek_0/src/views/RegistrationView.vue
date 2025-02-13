<template>
    <section class="container">
        <h2>Regisztráció</h2>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <p>Regisztrálj még ma!</p>
                    <form>
                        <div class=" input-group-md">
                        <label for="Username" class="input-group-text">Felhasználó név</label>
                        <Field type="username" class="form-control" id="username" rules="required|max:64"/>
                        <ErrorMessage name="username" as="div" class="alert alert-danger m-1"/>
                      </div>
                      <div class=" input-group-md">
                        <label for="Email" class="input-group-text">Email cím</label>
                        <Field type="email" class="form-control" id="email" rules="required|email"/>
                        <ErrorMessage name="email" as="div" class="alert alert-danger m-1"/>
                      </div>
                      <div class=" input-group-md">
                        <label for="Password" class="input-group-text">Jelszó</label>
                        <Field type="password" class="form-control" id="password" rules="required|min:12"/>
                        <ErrorMessage name="password" as="div" class="alert alert-danger m-1"/>
                      </div>
                      <div class=" input-group-md">
                        <label for="PasswordConfirm" class="input-group-text">Jelszó Megerősítése</label>
                        <Field type="password" class="form-control" id="passwordConfirm"/>
                        <ErrorMessage name="username" as="div" class="alert alert-danger m-1"/>
                      </div>
                      <button type="submit" class="btn btn-success">Regisztráció</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Form as VForm, Field, ErrorMessage } from 'vee-validate';
export default{
    name: "RegistrationView",
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