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
                  <td>{{immobilisat.TVA_id || 'Non renseigné'}} %</td>
                  <td>{{immobilisat.duree || 'Non renseigné'}} ans</td>
                    <td>{{immobilisat.BesoinImmobilisation.famille.libelle || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(immobilisat.valeurorigine) || 'Non renseigné'}}</td>
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
                  <th>Année</th>
                  <th>Annuité</th>
                   <th>Cumul</th> 
                  <th>Valeur Net Comptable</th>
                  
                  
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="amort in Amortissement" :key="amort.annee">
                  <td>{{amort.annee }}</td> 
                  <td>{{formatageSomme(amort.anuite) }}</td>
                    <td>{{formatageSomme(amort.cumul) }}</td>

                  <td>{{formatageSomme(amort.valeurNette) }}</td>
                  <!-- <td>{{test || 'Non renseigné'}} </td> -->
                   
                  
                </tr>
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
    ...mapGetters("SuiviImmobilisation", ["SuiviImmo"]),

    calculAnnuite(){
      const immobilisat = this.immobilisat
      if(immobilisat != undefined){
        return  parseFloat(immobilisat.valeurorigine) / parseFloat(immobilisat.duree)
      }
      return null
    },

    getAnnee(){
        const immobilisat = this.immobilisat
      if(immobilisat != undefined){
        var annee = new Date(immobilisat.date_mise_service).getFullYear()
        return parseFloat(annee) 
      }
      return null
    },

      getNombreDeMois(){
        const immobilisat = this.immobilisat
      if(immobilisat != undefined){
        var annee = new Date(immobilisat.date_mise_service).getMonth() + 1
        return 13 - parseFloat(annee) 
       
      }
      return null
    },

    Amortissement(){
        const immobilisat = this.immobilisat
      if(immobilisat != undefined){
        var tableauAmortissement = []
        var tailleDuTableau = this.immobilisat.duree
         var valeurNettActuelle = immobilisat.valeurorigine
          var cumulActuel = this.calculAnnuite

        if(this.getNombreDeMois ===12){
              for(var i = 0; i < tailleDuTableau; i++){
            let objet = {
            annee : this.getAnnee + i,
          anuite : this.calculAnnuite,
          valeurNette : parseFloat(valeurNettActuelle) - this.calculAnnuite,
            cumul: cumulActuel
            }
            valeurNettActuelle = objet.valeurNette
            cumulActuel = this.calculAnnuite + objet.cumul
            tableauAmortissement.push(objet)
          // i++

          }
        }else{
                 for(var i = 0; i <= tailleDuTableau; i++){
            let objet = {
            annee : this.getAnnee + i,
          anuite : i == 0 ? ( (valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau : i == tailleDuTableau ? this.calculAnnuite - tableauAmortissement[0].anuite : this.calculAnnuite,
          valeurNette : i == 0 ?  parseFloat(valeurNettActuelle) - ( ((valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau) : i == tailleDuTableau ? 0 : parseFloat(valeurNettActuelle) - this.calculAnnuite,
            cumul: i == 0 ? ( (valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau : i == tailleDuTableau ? immobilisat.valeurorigine : cumulActuel
            }
            valeurNettActuelle = objet.valeurNette
            cumulActuel = this.calculAnnuite + objet.cumul
            tableauAmortissement.push(objet)
          // i++

          }
        }
      

        return tableauAmortissement
      }
      return null

      
    },

 
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