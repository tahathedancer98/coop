<template>
  <div>
    <div class="form">
        <h2><strong>CONNEXION / INSCRIPTION</strong></h2>
      <div class="thumbnail">
        <img src="https://istsansilvestre.com/wp-content/uploads/2020/11/1111.png"/>
      </div>
      <form class="login-form" @submit.prevent="seConnecter">
        <input v-model="email" type="text" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Mot de passe" />
        <button>Se connecter</button>
        <u><p class="message"><router-link to="/creer-compte">Créer compte</router-link></p></u>
      </form>
    <p id="error"><sui-icon name="close red" link />Mot de passe incorrect</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    seConnecter() {
      //Pour récuperer les données et les envoyé afin de checker la connexion (on appel setMembre et setToken)
      //Si la connexion est correct on envoie vers la vue Conversations
      api
        .post("members/signin", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$store.commit('setMembre', response.data.member);
          this.$store.commit('setToken', response.data.token);
          console.log(response.data.token);
          this.$router.push('/conversations');
        })
        .catch((error) => {
          var error = document.getElementById("error").style.display= "block";
        });
    },
  },
};
</script>

<style lang="scss">
h2{
    font-family: 'Impact';
}
.form {
  box-shadow: 0.5px 5px 20px 5px rgba(78, 37, 37, 0.062);
  position: relative;
  z-index: 1;
  background: #645252;
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
  align-items: center;
}
.form input {
  outline: 0;
  background: #679199;
  color:white;
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
.form input:hover{
  background: black;
  color:white;
}
.form button {
  outline: 0;
  background: #679199;
  color: #ffffff;
  width: 100%;
  border: 0;
  padding: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover{
  background: black;
  color:white;
}

.form .message {
  margin: 15px 0 0;
  color: #21ac99;
  font-size: 12px;
   cursor: pointer;
}
.form .register-form {
  display: none;
}

body {
  background: rgb(156, 143, 235);
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
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
}
u{
  background: #679199;
  color: #ffffff;

}
.message:hover{
  background: black;
  color:white;
}
h2{
  background: black;
  color:white;
}
#error{
  display: none;
  color: rgb(207, 9, 9);
}
</style>
