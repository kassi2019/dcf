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
                  <th title="Type Immobilisation">Type Immo</th>
                  <th>Designation</th>
                  <th title="Identification Immobilisation">Identification Immo</th>
                  <th>Etat Immobilisation</th>
                  <th>Date Acquisition</th>
                  <th>Date Service</th>
                  <th>Numero Facture</th>

                  <th title="Quantité">Qte</th>
                  <th>Prix Unitaire</th>

                  <th>Valeur Origine</th>
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td>{{immo.type_immo || 'Non renseigné'}}</td>
                  <td>{{immo.designation || 'Non renseigné'}}</td>
                  <td>{{immo.identification || 'Non renseigné'}}</td>
                  <td>{{immo.etat_immobilisation || 'Non renseigné'}}</td>

                  <td>{{formaterDate(immo.date_acquisition) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immo.date_mise_service) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immo.numero_facture) || 'Non renseigné'}}</td>

                  <td>{{immo.quantite || 'Non renseigné'}}</td>
                  <td>{{immo.prix_unitaire || 'Non renseigné'}}</td>

                  <td>{{immo.valeur_origine || 'Non renseigné'}}</td>
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// DEUXIEME PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Famille</th>
                  <th>Service</th>
                  <th>Durée</th>
                  <th>Numero CC</th>

                  <th>Acteur Depense</th>

                  <th title="Exercice Budgetaire">Exercice Budget</th>
                  <th>Nature de Bien</th>
                  <th>Nature Entrée</th>
                  <th>Unite</th>
                  <th>Tva</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td>{{immo.reletion_famille.libelle || 'Non renseigné'}}</td>
                  <td>{{immo.relation_service.libelle || 'Non renseigné'}}</td>
                  <td>{{immo.duree || 'Non renseigné'}}</td>
                  <td>{{immo.numero_CC || 'Non renseigné'}}</td>

                  <td>{{immo.acteurDepense.matricule || 'Non renseigné'}}</td>

                  <td>{{formaterDate(immo.exoBudgetaire.annee) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immo.nature_bien) || 'Non renseigné'}}</td>
                  <td>{{immo.nature_dentree || 'Non renseigné'}}</td>

                  <td>{{immo.unitePara.libelle || 'Non renseigné'}}</td>
                  <td>{{immo.TVA_id || 'Non renseigné'}}</td>
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
                  <td>{{immo.montant_evaluation || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immo.date_evaluation) || 'Non renseigné'}}</td>
                  <td>{{immo.montant_cession || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immo.date_cession) || 'Non renseigné'}}</td>

                  <td>{{immo.cause_inactivite || 'Non renseigné'}}</td>

                  <td>{{formaterDate(immo.montant_amortissement_anterieur) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(formaterDate(immo.date_amortissement_anterieur)) || 'Non renseigné'}}</td>
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
      immo: undefined
    };
  },
  created() {
    this.immo = this.SuiviImmo.find(
      immo => immo.id == this.$route.params.id_immobilisation
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