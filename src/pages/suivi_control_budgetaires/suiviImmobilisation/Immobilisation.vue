
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
              <h5>Liste des Immobilisations</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="table-responsive text-nowrap" v-if="SuiviImmo.length">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Classe</th>
                    <!-- <th>type equipement</th> -->
                    <th>Designation</th>
                    <th>Quantité Réel</th>
                    <th>Quantité afféctée</th>
                    <th>Quantité actuel</th>
                    <th>Prix Unitaire</th>
                    <th>Total Actuel</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(immobilisat) in SuiviImmo" :key="immobilisat.id">
                    <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.reletion_famille.code || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.reletion_famille.reletion_Equipement.libelle || 'Non renseigné'}}</td>-->
                    <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.reletion_famille.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.qte_reel || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.qte_affecte || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.qte_actuel || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.prixUnitaire || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(immobilisat.id)"
                    >{{immobilisat.total_actuel || 'Non renseigné'}}</td>
                    <td>
                      <router-link
                        :to="{name : 'Detailimmobilisation', params: {id_immobilisation:immobilisat.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                      <button class="btn btn-danger" @click="supprimerFamille(immobilisat.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <div v-if="filtre_immobilisation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Immobilisations</p>
              </div>-->
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Pas d'Immobilisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
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
  mounted() {
    this.formData = this.SuiviImmo.find(
      immobilisat => immobilisat.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "SuiviImmo",
      "familles",
      "services",
      "getPersonnaliseImmobilisation",
      "getPersonnalise"
    ])
    // filtre_immobilisation() {
    //   const st = this.search.toLowerCase();
    //   return this.SuiviImmo.filter(immo => {
    //     return immo.relation_service.libelle.toLowerCase().includes(st);
    //   });
    // }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllImmobilisation",

      "supprimerImmobilisation"
    ]),

    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$router.push({
        name: "formulaireimmobilisation"
      });
    },

    formatageSomme: formatageSomme,
    // fonction pour vider l'input ajouter
    ajouterImmobilisationLocal() {
      this.ajouterImmobilisation(this.formData);

      this.formData = {
        code: "",
        type_immo: "",
        designation: "",
        identification: "",
        etat_immobilisation: "",
        date_acquisition: "",
        date_mise_service: "",
        numero_facture: "",
        quantite: "",
        Prix_unitaire: "",
        famille_id: "",
        valeur_origine: "",
        duree: "",
        numero_CC: "",
        acteur_depense_id: "",
        exercice_budgetaire_id: "",
        service_id: "",
        nature_bien: "",
        nature_dentree: "",
        unite_id: "",
        TVA_id: "",
        montant_evaluation: "",
        date_evaluation: "",
        montant_cession: "",
        date_cession: "",
        cause_inactivite: "",
        montant_amortissement_anterieur: "",
        date_amortissement_anterieur: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierImmobilisation(id) {
      this.$router.push({
        path: "/Modifier_immobilisation/" + id
      });
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>

