
<template>
  <div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <div class="control-group">
        <label class="control-label">Valeur d'origine</label>
        <div class="controls">
          <input type="number" v-model="formData.valeur_origine_annee" class="span" />
        </div>
        <div class="control-group">
          <label class="control-label">Dure</label>
          <div class="controls">
            <input type="number" v-model="editAmortissement.dure_mois" class="span" />
          </div>
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Amortissements</h5>

              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Exercice Budgetaire</th>
                    <th>Valeur Origine</th>
                    <th>Dure</th>
                    <th>Taux</th>
                    <th>Annuité</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
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

      formData: {
        type: "",
        immobilisation_id: "",
        taux_jour: "",
        taux_mois: "",
        taux_annee: "",
        valeur_origine_jour: "",
        valeur_origine_mois: "",
        valeur_origine_annee: "",
        dure_jour: "",
        dure_mois: "",
        dure_annee: "",
        exercice_budgetaire: "",

        annuite: ""
      },
      editAmortissement: {
        type: "",
        immobilisation_id: "",
        taux_jour: "",
        taux_mois: "",
        taux_annee: "",
        valeur_origine_jour: "",
        valeur_origine_mois: "",
        valeur_origine_annee: "",
        dure_jour: "",
        dure_mois: "",
        dure_annee: "",
        exercice_budgetaire: "",

        annuite: ""
      },
      search: "",
      stats: ["Lineaire", "Degressif", "Accelere"]
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", ["amortissements", "immobilisations"]),
    // filtre_amortissement() {
    //   const st = this.search.toLowerCase();
    //   return this.amortissements.filter(amortissement => {
    //     return amortissement.type.toLowerCase().includes(st);
    //   });

    amortissementMois() {
      const val =
        (parseFloat(this.formData.valeur_origine_mois) * 12) /
        parseFloat(this.formData.dure_mois);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    amortissementJours() {
      const val =
        (parseFloat(this.formData.valeur_origine_jour) * 360) /
        parseFloat(this.formData.dure_jour);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    amortissementAnnee() {
      const val =
        (parseFloat(this.formData.valeur_origine_annee) * 1) /
        parseFloat(this.formData.dure_annee);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    tauxAnnee() {
      const val = 1 / parseFloat(this.formData.dure_annee);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    tauxjour() {
      const val = 360 / parseFloat(this.formData.dure_jour);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    tauxmois() {
      const val = 12 / parseFloat(this.formData.dure_mois);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    valeurNette() {
      const val =
        parseFloat(this.formData.valeur_origine_jour) - this.amortissementJours;
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    }
  },

  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllAmortissement",
      "ajouterAmortissement",
      "modifierAmortissement",
      "supprimerAmortissement"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterAmortissementLocal() {
      this.ajouterAmortissement(this.formData);

      this.formData = {
        type: "",
        immobilisation_id: "",
        taux: "",
        valeur_origine: "",
        dure: "",
        exercice_budgetaire: "",
        mois: "",
        jour: "",
        annee: "",
        annuite: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierAmortissement(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAmortissement = this.amortissements[index];
    },
    // fonction pour vider l'input modification
    modifierAmortissementLocal() {
      this.modifierAmortissement(this.editAmortissement);
    },
    alert() {
      console.log("ok");
    },
    // afficher modal de modification
    afficherModalModifierImmobilisation() {
      this.$router.push({
        path: "/amortissement-Lineaire"
      });
    }
  }
};
</script>

<style>
.radi2 {
  float: left;
  margin: 0 20px;
}
.radi {
  float: left;
}
.tailRadio {
  margin: 5px 160px;
}
.modalamorti {
  width: 745px;
  margin: 0 -350px;
}
</style>