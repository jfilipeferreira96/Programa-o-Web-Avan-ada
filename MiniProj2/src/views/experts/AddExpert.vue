<template>
  <!-- Portfolio Section -->
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Expert" />

      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col>
          <form @submit.prevent="add">
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
              <i class="fas fa-plus-square"></i>  ADICIONAR</button>
            <router-link
              :to="{name: 'listExperts'}"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            ><i class="fas fa-window-close"></i>  CANCELAR</router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { ADD_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "AddExpert",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      name: "",
      contato: "",
      especialidade: "",
      links: [
        { types: "photo", url: "" }
      ]
    };
  },
  computed: {
    ...mapGetters("expert", ["getMessage"])
  },
  methods: {
    add(){
      this.$store.dispatch(`expert/${ADD_EXPERT}`, this.$data).then(
        () => {
          this.$alert(this.getMessage, "Expert adicionado!", "success");
          router.push({ name: "listExperts" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  }
};
</script>
