<template>
  <div>
    <div class="form">
      <h2><strong>CRÉER UN COMPTE</strong></h2>

      <form class="login-form" @submit.prevent="creerCompte">
        <input v-model="fullname" type="text" required placeholder="Nom d'utilisateur">
        <input v-model="email" type="text" required placeholder="Email">
        <input v-model="password" type="password" required placeholder="Mot de passe">
        <input v-model="passwordCheck" type="password" required placeholder="Saisir à nouveau le Mot de passe">
        <button>Créer mon compte</button>
        <u><p class="message"><router-link to="/se-connecter">Retourner</router-link></p></u>
      </form>
      <p id="error"><sui-icon name="close red" link />Compte pas crée</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
    };
  },
  mounted() {},
  methods:{
    creerCompte(){
      // Verification du mot de passe si c'est indentique dans les deux champs de text : 
      if(this.password != this.passwordCheck){
        alert('veuillez saisir le même mot de passe');
      }else{
        // Post avec les données récupérées lors de la création du compte
        api.post('members',{
          fullname:this.fullname,
          email:this.email,
          password:this.password
        }).then(response =>{
          alert('Votre compte a été bien créé');
          // et là on push vers se connecter pour afficher cette vue
          this.$router.push('/se-connecter');
        }).catch(error => {
          var error = document.getElementById("error").style.display= "block";
        });
      }
      
    }
  }
};
</script>

<style lang="scss">
h2{
  font-family: 'Impact';
  margin-bottom: 10%;
}
.form {
  box-shadow: 0.5px 5px 20px 5px rgba(7, 51, 33, 0.062);
  position: relative;
  z-index: 1;
  background: #b6a5a5;
  max-width: 400px;
  margin: 7% auto 100px;
  padding: 30px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  text-align: center;
}
.form .thumbnail {
  width: 150px;
  height: 150px;
  margin: 0 auto 30px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  box-sizing: border-box;
}
.form .thumbnail img {
  display: flex;
  width: 100%;
}
.form input {
  outline: 0;
  background: #755e5e;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  outline: 0;
  background: #4b36a7;
  width: 100%;
  border: 0;
  padding: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .register-form {
  display: none;
}

body {
  background: rgb(32, 39, 24);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body:before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  background: rgba(8, 64, 68, 0.8);
  width: 100%;
  height: 100%;
}

#error{
  display: none;
  color: rgb(109, 23, 23);
}
</style>