<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Immobilisations</h5>
          </div>

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Classe</th>
                  <th>type equipement</th>
                  <th>Designation</th>
                  <th>Quantité Réel</th>
                  <th>Quantité afféctée</th>
                  <th>Quantité actuel</th>
                  <th>Prix Unitaire</th>
                  <th>Total Actuel</th>
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td>{{immobilisat.familleImmo.code || 'Non renseigné'}}</td>
                  <td>{{immobilisat.familleImmo.reletion__equipement.libelle || 'Non renseigné'}}</td>
                  <td>{{immobilisat.familleImmo.libelle || 'Non renseigné'}}</td>
                  <td>{{immobilisat.qte_reel || 'Non renseigné'}}</td>
                  <td>{{immobilisat.qte_affecte || 'Non renseigné'}}</td>
                  <td>{{immobilisat.qte_actuel || 'Non renseigné'}}</td>
                  <td>{{immobilisat.prixUnitaire || 'Non renseigné'}}</td>
                  <td>{{immobilisat.total_actuel || 'Non renseigné'}}</td>
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// DEUXIEME PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Type immobilisation</th>
                  <th>Service</th>
                  <th>Durée</th>
                  <th>Numero CC</th>

                  <th>Acteur Depense</th>

                  <th title="Exercice Budgetaire">Exercice Budget</th>
                  <th>Nature de Bien</th>
                  <th>Nature Entrée</th>
                  <!-- <th>Unite</th> -->
                  <th>Tva</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td v-if="immobilisat.type_immo">Corporelle</td>
                  <td v-else>Incorporelle</td>
                  <td>{{immobilisat.serviceImmo.libelle || 'Non renseigné'}}</td>
                  <td>{{immobilisat.duree || 'Non renseigné'}}</td>
                  <td>{{immobilisat.numero_CC || 'Non renseigné'}}</td>

                  <td>{{immobilisat.acteurDepense.matricule|| 'Non renseigné'}}</td>

                  <td>{{immobilisat.exoBudgetaire.annee || 'Non renseigné'}}</td>
                  <td>{{immobilisat.nature_bien || 'Non renseigné'}}</td>
                  <td>{{immobilisat.nature_dentree || 'Non renseigné'}}</td>

                  <!-- <td>{{immobilisat.unitePara.libelle || 'Non renseigné'}}</td> -->
                  <td>{{immobilisat.TVA_id || 'Non renseigné'}}</td>
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// troisieme PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Montant Evaluation</th>
                  <th>Date Evaluation</th>
                  <th>Montant Cession</th>
                  <th>Date Cession</th>

                  <th>Cause Inactive</th>

                  <th title="montant amortissement anterieur">Montant Amorti Anteri</th>
                  <th title="date amortissement anterieur">Date Amort Anter</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td>{{immobilisat.montant_evaluation || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immobilisat.date_evaluation) || 'Non renseigné'}}</td>
                  <td>{{immobilisat.montant_cession || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immobilisat.date_cession) || 'Non renseigné'}}</td>

                  <td>{{immobilisat.cause_inactivite || 'Non renseigné'}}</td>

                  <td>{{formaterDate(immobilisat.montant_amortissement_anterieur) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(formaterDate(immobilisat.date_amortissement_anterieur)) || 'Non renseigné'}}</td>
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
export default {
  data() {
    return {
      immobilisat: undefined
    };
  },
  created() {
    this.immobilisat = this.SuiviImmo.find(
      immobilisat => immobilisat.id == this.$route.params.id_immobilisation
    );
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", ["SuiviImmo"])
  },
  methods: {
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>