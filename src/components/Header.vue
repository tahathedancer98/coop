<template>
  <header>
    <sui-menu class="ui menu" id="header" attached="top">
      <sui-menu-menu>
        <a class="item">COOP</a>
        <router-link to="/conversations" class="item">Conversations</router-link>
        <router-link to="/membres" class="item">Membres</router-link>
      </sui-menu-menu>
      <sui-menu-menu position="right">
        <sui-menu-item>
          <sui-icon name="users" circular /> Bienvenue {{fullname}}
        </sui-menu-item>
        <sui-menu-item right>
          <div class="item">
            <a class="ui teal button" @click="seDesconnecter">Se déconnecter</a>
          </div>
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>
  </header>
</template>


<script>
export default {
  name: 'Header',
  data() {
    return {
      fullname : this.$store.state.membre.fullname
    };
  },
  mounted() {
  },
  methods: {
    seDesconnecter(){
      this.$store.commit('setMembre');
      this.$store.commit('setToken');
      this.$router.push('/se-connecter');
    }
  },
};
</script>


<style>
#header{
    background-color: rgb(173, 72, 150);
}
#header .item:hover{
  background: black;
  color:white;
}
#headerBottom{
    text-align: center;
    background-color: #303030;
    color: white;
}
</style>