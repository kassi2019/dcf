<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
         

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Annee budgetaire</th>
                  <th>Taux</th>
                  <th>Duree</th>
                  <th>Designation</th>
                  <th>Valeur Origine</th>
                  <th>Date de mise en service</th>
                  
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td>{{immobilisat.exoBudgetaire.annee || 'Non renseigné'}}</td> 
                  <td>{{immobilisat.TVA_id || 'Non renseigné'}}</td>
                  <td>{{immobilisat.duree || 'Non renseigné'}}</td>
                    <td>{{immobilisat.BesoinImmobilisation.famille.libelle || 'Non renseigné'}}</td>
                  <td>{{immobilisat.valeurorigine || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immobilisat.date_mise_service) || 'Non renseigné'}}</td>
                 
                  
                </tr>
              </tbody>
            </table>
             <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Amortissement</h5>
          </div>
          <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Periode</th>
                  <th>Taux</th>
                  <th>Annuité</th>
                  <th>Cumul</th>
                  <th>Valeur Net Comptable</th>
                  
                  
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
         
         
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  data() {
    return {
      immobilisat: undefined
    };
  },
  created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
    ...mapGetters("SuiviImmobilisation", ["SuiviImmo"])
  },
  methods: {
    getDetail(){
        this.immobilisat = this.SuiviImmo.find(
      immobilisat => immobilisat.id == this.$route.params.id
    );
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
       formatageSomme: formatageSomme,
  }
};
</script>