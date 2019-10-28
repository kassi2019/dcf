
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Immobilisations Prévues</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <!-- <th>Code</th> -->
                    <th>Type</th>
                    <th>Designation</th>

                    <th>Etat Immo</th>
                    <th>Date Service</th>
                    <th>Date Acquis</th>

                    <th>Service</th>
                    <th title="Quantité">Qte</th>
                    <th>Prix Unitaire</th>
                    <th>Famille</th>
                    <th>Valeur Origine</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immo in filtre_immobilisation" :key="immo.id">
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.type_immo || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.designation || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.etat_immobilisation || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{formaterDate(immo.date_mise_service) || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{formaterDate(immo.date_acquisition) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.relation_service.libelle || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.quantite || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.prix_unitaire || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.reletion_famille.libelle || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.valeur_origine || 'Non renseigné'}}</td>

                    <router-link
                      :to="{name : 'Detailimmobilisation', params: {id_immobilisation:immo.id}}"
                      class="btn btn-default"
                      title="Detail Immobilisation"
                    >
                      <span>
                        <i class="icon icon-folder-open"></i>
                      </span>
                    </router-link>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_immobilisation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun "immobilisations"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      formData: {},

      editImmobilisation: {},

      search: ""
    };
  },
  // mounted() {
  //   this.formData = this.listeImmoRealise.find(
  //     immo => immo.id == this.$route.params.id
  //   );

  //console.log(this.$router);
  // },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "listeImmoPrevue",
      "familles",
      "services"
    ]),
    filtre_immobilisation() {
      const st = this.search.toLowerCase();
      return this.listeImmoPrevue.filter(immo => {
        return (
          immo.relation_service.libelle.toLowerCase().includes(st) ||
          immo.reletion_famille.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", ["getAllImmobilisation"]),

    // afficher modal de modification
    afficherModalModifierImmobilisation(id) {
      this.$router.push({
        path: "/Voir_immo/" + id
      });
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>

