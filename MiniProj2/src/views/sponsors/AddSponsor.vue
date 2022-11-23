<template>
  <!-- Portfolio Section -->
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Sponsor" />

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
                v-model="animal"
                type="text"
                class="form-control form-control-lg"
                id="txtAnimal"
                placeholder="escreve o nome do animal patrocionado"
                required
              />
            </div>
            <div class="form-group">
               <input
                v-model="donation"
                type="number"
                class="form-control form-control-lg"
                id="donation"
                placeholder="valor em da doação €"
                required
              />
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-plus-square"></i>  ADICIONAR</button>
            <router-link
              :to="{name: 'listSponsors'}"
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
import { ADD_SPONSOR } from "@/store/sponsors/sponsor.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "AddSponsor",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      name: "",
      contato: "",
      animal: "",
      donation: "",
    };
  },
  computed: {
    ...mapGetters("sponsor", ["getMessage"])
  },
  methods: {
    add(){
      this.$store.dispatch(`sponsor/${ADD_SPONSOR}`, this.$data).then(
        () => {
          this.$alert(this.getMessage, "Sponsor adicionado!", "success");
          router.push({ name: "listSponsors" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  }
};
</script>
