<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão de Experts" />

      <!--MENU TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link :to="{ name: 'addUser' }" tag="button" class="btn btn-outline-success mr-2 mt-2">
            <i class="fas fa-plus-square"></i>
            ADICIONAR EXPERT
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
                <th scope="col">CONTACTO</th>
                <th scope="col">ÁREA ESPECIALISTA</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user of users" :key="user._id">
                <td class="pt-4">{{ user.name }}</td>
                <td class="pt-4">{{ user.type === "admin" ? "Administrador" : "Utilizador normal" }}</td>
                <td class="pt-4">{{ formatDate(user.registration_date) }}</td>
                <td>
                  <router-link :to="{ name: 'editUser', params: { userId: user._id } }" tag="button" class="btn btn-outline-success mr-2">
                    <i class="fas fa-edit"></i>
                    EDITAR
                  </router-link>
                  <button @click="viewUser(user._id)" type="button" class="btn btn-outline-success mr-2">
                    <i class="fas fa-search"></i>
                    VER
                  </button>
                  <button @click="removeUser(user._id)" type="button" class="btn btn-outline-danger mr-2 ">
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
import { FETCH_USERS, REMOVE_USER } from "@/store/users/user.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "ManageExperts",
  components: {
    HeaderPage,
  },
  data: function() {
    return {
      users: [],
      sortType: 1,
    };
  },
  computed: {
    ...mapGetters("user", ["getUsers", "getMessage"]),
  },
  methods: {
    fetchExperts() {
      this.$store.dispatch(`expert/${FETCH_USERS}`).then(
        () => {
          this.users = this.getUsers;
        },
        (err) => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    sort() {
      this.users.sort(this.compareNames);
      this.sortType *= -1;
    },
    compareNames(u1, u2) {
      if (u1.name > u2.name) return 1 * this.sortType;
      else if (u1.name < u2.name) return -1 * this.sortType;
      else return 0;
    },

    viewUser(id) {
      const user = this.users.find((user) => user._id === id);
      this.$fire({
        title: user.auth.username,
        html: this.generateTemplate(user),
        imageUrl: require(`@/assets/avatars/${this.getUserLevelByPoints(user.gamification.points).avatar}.png`),
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Imagem desconhecida",
      });
    },

    generateTemplate(user) {
      return `
          <p>${user.description}</p>
          <p>
          <b>Nome:</b> ${user.name} <br>
          <b>Cidade:</b> ${user.location.city}<br>
          <b>País:</b> ${user.location.country}
          </p>
        `;
    },
    removeUser(id) {
      this.$confirm("Se sim, clique em OK", "Deseja mesmo remover o expert?", "warning", { confirmButtonText: "OK", cancelButtonText: "Cancelar" }).then(
        () => {
          this.$store.dispatch(`expert/${REMOVE_USER}`, id).then(() => {
            this.$alert(this.getMessage, "Expert removido!", "success");
            this.fetchExperts();
          });
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
        }
      );
    },
  },
  created() {
    this.fetchExperts();
  },
};
</script>
