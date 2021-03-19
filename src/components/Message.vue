<template>
  <div class="ui raised grid container segment" id="main" v-if="messageText">  
    <sui-menu-menu class="fourteen wide column">
      <sui-input placeholder="Message" v-model="messageText" v-if="modify"/>
      <strong v-else>
        <div>
          {{membre.fullname}}
          {{message.message}} 
        </div>
      </strong>
    </sui-menu-menu>
    <sui-menu-menu class="two wide column" id="modMessage" v-if="access">
      <div v-if="modify">
        <sui-button icon color="green" @click="modifierMessage">
          <sui-icon name="save" />
        </sui-button>
        <sui-button icon color="red" @click="setModify">
          <sui-icon name="close icon" />
        </sui-button>
      </div>
      <div v-else>
        <sui-button icon color="blue" @click="setModify">
          <sui-icon name="pencil" />
        </sui-button>
        <sui-button icon color="red" @click="effacerMessage">
          <sui-icon name="trash" />
        </sui-button>
      </div>
    </sui-menu-menu>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  components: { Header },
  name: "Message",
  props : ['message'],
  data(){
    return{
      messageText: this.message.message,
      access: false,
      modify: false,
      membre : false
    }
  },
  mounted() {
    // boucle sur tous les membres qui dans le store
    // mettre dans this.membre celui qui a pour id this.message.member_id
  if(this.message.member_id === this.$store.state.membre.id){
      this.access = true;
    }
  },
  methods:{
    // Pour modifier un message spécifique
    modifierMessage(){
      // on utilise api.put pour renvoyer les données afin de modifier ce qu'il y avait avant.
      api.put('channels/'+ this.message.channel_id +'/posts/'+this.message.id,{
        message: this.messageText
      }).then(response => {
        alert('Message modifié correctement');
        this.$bus.$emit('charger-conversation');
        this.setModify();
      }).catch(error =>{
        alert('Error : '+error);
      })
    },
    // Effacer un message
    effacerMessage(){
      if(this.access){
        // on utilise api.delete pour supprimé le message choisi.
        api.delete('channels/'+ this.message.channel_id +'/posts/'+this.message.id).then(response => {
          alert('Message effacé correctement');
          this.$bus.$emit('charger-conversation');
        }).catch(error =>{
          alert('Error : '+error);
        })
      }
    },
    setModify(){
      this.modify = !this.modify;
    }
  }

}
</script>

<style lang="scss">

  #modMessage{
    width: 112.5px;
  }

</style>