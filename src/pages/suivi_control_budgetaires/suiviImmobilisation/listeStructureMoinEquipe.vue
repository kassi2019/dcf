
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          
       <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Structures moin équipés"
            :data="afficheStructureMoinEquipe"
            name="Liste des Structures moin équipés"
          >
            <i title="Exporter en excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
           

            <br>
             
              
             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste structures plus équipé</h5>
              
                 
            </div>
            <div class="table-responsive text-nowrap" v-if="familles.length && services.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>type Unité Administrative</th> 
                    <th>Unité Administrative</th> 
                    <th>type equipement</th> 
                    <th>Designation</th>
                    <th>Quantité Prévue</th>
                    <th>Quantité Réalisé</th>
                    <th>Quantité Restant</th>
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in afficheStructureMoinEquipe" :key="immobilisat.id">
                   
                    <td
                      
                    >{{immobilisat.typeUniteAdministrative.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.uniteAdminist.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.famille.reletion__equipement.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.famille.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.qte_reel}}</td>
                    <td
                      
                    >{{immobilisat.qte_affecte}}</td>
                    <td
                      
                    >{{immobilisat.qte_actuel}}</td>
                    
                  
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
              <p style="text-align:center;font-size:20px;color:red;">Pas de structure Equipé pour le moment</p>
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
import { formatageSomme } from "../../../Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
   components: {
    ModelListSelect
  },
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
      json_fields: {
        TYPE_IMMOBILISATION: "type_immo",
        FAMILLE: "BesoinImmobilisation.famille.reletion__equipement.libelle",
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdministrative.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        NUMERO_IDENTIFICATION: "identification",
        ETAT_IMMOBILISATION: "etat_immobilisation",
        DATE_ACQUISITION: "date_acquisition",
        DATE_MISE_SERVICE: "date_mise_service",
        NUMERO_FACTURE: "numero_facture",
        QUANTITE_REEL: "qte_reel",
        QUANTITE_AFFECTE: "qte_affecte",
        QUANTITE_ACTUEL: "qte_actuel",
        PRIX_UNITAIRE: "prixUnitaire",
        TOTAL_ACTUEL: "total_actuel",
        TOTAL_REEL: "total_reel",
        DUREE: "duree",
        NUMERO_CC: "numero_CC",
        MATRICULE_ACTEUR: "acteurDepense.matricule",
        ANNEE_BUDGETAIRE: "exoBudgetaire.annee",
        SERVICE: "serviceImmo.libelle",
        NATURE_BIEN: "nature_bien",
        NATURE_ENTRE: "nature_dentree",
        MONTANT_EVALUATION: "montant_evaluation",
        DATE_EVALUATION: "date_evaluation",
        MONTANT_CESSION: "montant_cession",
        DATE_CESSION: "date_cession",
        CAUSE_INACTIVITE: "cause_inactivite",
        TVA: "TVA_id",
        MONTANT_AMORTISSEMENT: "montant_amortissement_anterieur",
        DATE_AORTISSEMENT: "date_amortissement_anterieur"
      },
      formData: {},

      editImmobilisation: {},

      search: "",
      typeUniteAdmin_id: "",
      uniteadmin_id:"",
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
      "afficheStructureMoinEquipe"
      // "getPersonnaliseImmobilisation",
     
      // "getPersonnaliseSuivImmo"
    ]),
     ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
     ...mapGetters("uniteadministrative", ["uniteAdministratives"]),


  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllImmobilisation",

      "supprimerImmobilisation"
    ]),

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
<style>
.deplaceCarre{
  margin: 0 250px;
}
</style>
