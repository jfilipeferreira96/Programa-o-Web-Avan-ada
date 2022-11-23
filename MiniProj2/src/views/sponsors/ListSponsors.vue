<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão de Sponsors" />

      <!--MENU TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link :to="{ name: 'addSponsor' }" tag="button" class="btn btn-outline-success mr-2 mt-2">
            <i class="fas fa-plus-square"></i>
            ADICIONAR SPONSOR
          </router-link>
          <router-link :to="{ name: 'admin' }" tag="button" class="btn btn-outline-info mr-2 mt-2">
            <i class="fas fa-bars"></i>
            MENU PRINCIPAL
          </router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>

      <!-- TABELA -->
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  NOME
                  <i class="fas fa-arrow-up" v-if="sortType === 1" @click="sort()"></i>
                  <i class="fas fa-arrow-down" v-else @click="sort()"></i>
                </th>
                <th scope="col">DOAÇÃO €</th>
                <th scope="col">CONTACTO</th>
                <th scope="col">ANIMAL PATROCIONADO</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sponsor of sponsors" :key="sponsor._id">
                <td class="pt-4">{{ sponsor.name }}</td>
                <td class="pt-4">{{ sponsor.donation }}</td>
                <td class="pt-4">{{ sponsor.contato }}</td>
                <td class="pt-4">{{ sponsor.animal }}</td>
                <td>
                  <router-link :to="{ name: 'editSponsor', params: { sponsorId: sponsor._id } }" tag="button" class="btn btn-outline-success mr-2">
                    <i class="fas fa-edit"></i>
                    EDITAR
                  </router-link>
                  <button @click="viewSponsor(sponsor._id)" type="button" class="btn btn-outline-success mr-2">
                    <i class="fas fa-search"></i>
                    VER
                  </button>
                  <button @click="removeSponsor(sponsor._id)" type="button" class="btn btn-outline-danger mr-2 ">
                    <i class="fas fa-trash-alt"></i>
                    REMOVER
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";
import { FETCH_SPONSORS, REMOVE_SPONSOR } from "@/store/sponsors/sponsor.constants";

export default {
  name: "ManageSponsors",
  components: {
    HeaderPage,
  },
  data: function() {
    return {
      sponsors: [],
      sortType: 1,
    };
  },
  computed: {
    ...mapGetters("sponsor", ["getSponsors", "getMessage"]),
  },
  methods: {
    fetchSponsors() {
      this.$store.dispatch(`sponsor/${FETCH_SPONSORS}`).then(
        () => {
          this.sponsors = this.getSponsors;
        },
        (err) => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    sort() {
      this.sponsors.sort(this.compareNames);
      this.sortType *= -1;
    },
    compareNames(u1, u2) {
      if (u1.name > u2.name) return 1 * this.sortType;
      else if (u1.name < u2.name) return -1 * this.sortType;
      else return 0;
    },

    viewSponsor(id) {
      const sponsor = this.sponsors.find((sponsor) => sponsor._id === id);
      this.$fire({
        title: `<strong>${sponsor.name}</strong>`,
        html: this.generateTemplate(sponsor),
        imageUrl: require(`@/assets/avatars/sponsor.png`),
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Sponsor Logo",
      });
    },

    generateTemplate(sponsor) {
      return `
          <b>Doação:</b><h4>${sponsor.donation} €</h4>
          <p>
          <b>Contacto:</b> ${sponsor.contato}
          <p>
          <b>Animal patrocionado:</b> ${sponsor.animal}
          </p>
        `;
    },
    removeSponsor(id) {
      this.$confirm("Se sim, clique em OK", "Deseja mesmo remover o sponsor?", "warning", { confirmButtonText: "OK", cancelButtonText: "Cancelar" }).then(
        () => {
          this.$store.dispatch(`sponsor/${REMOVE_SPONSOR}`, id).then(() => {
            this.$alert(this.getMessage, "Sponsor removido!", "success");
            this.fetchSponsors();
          });
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
        }
      );
    },
  },
  created() {
    this.fetchSponsors();
    //this.sponsors = [{ id: 1, name: "Antonio", donation: 20, contato: 9178885425, animal: "Urso" }];
  },
};
</script>
