<template>
  <div id="app" v-if="apiOk">
    <router-view />
  </div>
  <div v-else>Impossible de joindre l'APPI</div>
</template>


<script>
export default {
  data() {
    return {
      apiOk: false,
    };
  },
  mounted() {
    console.log("L'app a commencé");

    api
      .get("ping")
      .then((reponse) => {
/*        if (this.$store.state.token) {
          api.get("members/:id/signedin").catch((error) => {
            this.$store.commit("setMembre");
            this.$store.commit("setToken");
            this.$router.push("/se-connecter");
          });
        }*/
        this.apiOk = true;
        console.log("L'api est fonctionnelle");

        if (!this.$store.state.membre || !this.$store.state.token) {
          if (
            this.$route.path != "/se-connecter" &&
            this.$route.path != "/creer-compte"
          ) {
            this.$router.push("/se-connecter");
          }
        } else {
          this.$router.push("/conversations");
        }
        //this.$router.push('/se-connecter');
      })
      .catch((error) => {
        console.log("L'api ne marche pas");
      });
  },
  methods: {},
};
</script>

<style lang="scss">
body {
  background-color: white;
}
</style>
