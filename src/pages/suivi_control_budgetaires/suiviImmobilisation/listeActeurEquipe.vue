
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
                Recherche:
                <input type="search" placeholder="Service ou Matricule" v-model="search" />
              </div>
            </div>

            <div class="table-responsive text-nowrap" v-if="SuiviImmo.length && familles.length && services.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>Matricule</th> 
                       <th>Nom</th>
                     <th>Prenoms</th> 
                       <th>Unite administrative</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in personnaliseActeurDepense" :key="immobilisat.id">
                      
                      <td>{{immobilisat.matricule || 'Non renseigné'}}</td>
                      <td>{{immobilisat.nom || 'Non renseigné'}}</td>
                      <td>{{immobilisat.prenom || 'Non renseigné'}}</td>
                       <td>{{immobilisat.uniteAdmin.libelle || 'Non renseigné'}}</td>
                   
                   
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

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab> -->
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
      "getPersonnaliseImmobilisation"
     
    ]),
    ...mapGetters("personnelUA", ["personnaliseActeurDepense"]),
    filtre_immobilisation() {
      const st = this.search.toLowerCase();
      return this.SuiviImmo.filter(immo => {
        return immo.acteurDepense.matricule.toLowerCase().includes(st) ||
          immo.serviceImmo.libelle.toLowerCase().includes(st);
      });
    },
    
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
 
    
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>

