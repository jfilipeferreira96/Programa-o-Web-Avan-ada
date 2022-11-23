<template>
  <section class="page-section">
     <b-container>
      <HeaderPage title="Editar Utilizador"/>
   
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="escreve nome"
                required
              />
            </div>
            <div class="form-group">
               <input
                v-model="contato"
                type="number"
                class="form-control form-control-lg"
                id="txtContato"
                placeholder="escreve contato telefonico"
                maxlength="9"
                required
              />
            </div>
            <div class="form-group">
               <input
                v-model="especialidade"
                type="text"
                class="form-control form-control-lg"
                id="txtEspecialidade"
                placeholder="escreve a àrea de especialidade"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="links[0].url"
                type="url"
                class="form-control form-control-lg"
                id="txtPhoto"
                placeholder="link da foto da especialidade"
                required
              />
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-edit"></i> ATUALIZAR</button>
            <router-link
              :to="{name: 'listExperts'}"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            ><i class="fas fa-window-close"></i> CANCELAR</router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
     </b-container>
  </section>
</template>

<script>
import { EDIT_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue"
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "EditExpert",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      expert: {}
    };
  },
  computed: {
    ...mapGetters("expert", ["getExpertById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`expert/${EDIT_EXPERT}`, this.$data.expert).then(
        () => {
          this.$alert(
            this.getMessage,
            "Expert atualizado!",
            "success"
          );
          router.push({name: 'listExperts'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.expert = this.getExpertById(this.$route.params.expertId);
  }
};
</script>
