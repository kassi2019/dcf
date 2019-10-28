
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
              <h5>Ajouter Immobilisation</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Identification</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Descriptif</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            <div class="controls">
                              <select v-model="formData.exercice_budgetaire_id">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="exoBudget in exercices_budgetaires"
                                  :key="exoBudget.id"
                                  :value="exoBudget.id"
                                >{{exoBudget.annee}}</option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Unite administrative:</label>
                            <div class="controls">
                              <select
                                v-model="formData.uniteadministrative_id"
                                v-on:change="changerUniteAdmin($event)"
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="ua in trieUaImmobilisation"
                                  :key="ua.id"
                                  :value="ua.designation"
                                >{{ua.uniteAdminist.libelle}}</option>
                              </select>
                            </div>
                          </div>
                          <p>
                            <span>Selected country name: {{quantite }}</span>
                          </p>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Désignation:</label>
                            <div class="controls">
                              <select
                                v-model="formData.designationImmo"
                                v-on:change="changerdesignation($event)"
                              >
                                <option value>Sélectionner</option>
                                <option>{{designation}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Réel:</label>
                            <div class="controls">
                              <input type="number" class="span" :value="quantite" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Afféctée:</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.qteaffecte" />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Actuel:</label>
                            <div class="controls">
                              <input type="number" class="span" :value="QteActuel" readonly />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Prix unitaire:</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.prixU" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Total Actuel:</label>
                            <div class="controls">
                              <input type="number" class="span" :value="TotalActuel" readonly />
                            </div>
                          </div>
                        </td>
                        <!-- <td>
                          <div class="control-group">
                            <label class="control-label">Valeur d'Origine:</label>
                            <div class="controls">
                              <input type="number" class="span" readonly :value="ValeurOrigine" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Valeur d'Origine:</label>
                            <div class="controls">
                              <input type="number" class="span" readonly :value="ValeurOrigine" />
                            </div>
                          </div>
                        </td>-->
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane active"></div>
                    <!--ongle 3 -->
                    <div id="tab3" class="tab-pane active"></div>
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterImmobilisationLocal(formData)"
                        >Valider</a>
                        <a
                          @click.prevent="afficherTableauImmobilisation()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
 <script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        prixU: "",
        quantite: "",
        // valeur_origine = this.ValeurOrigine(),
        valeur_origine: "",
        exercice_budgetaire_id: "",
        designationbesoin: "",
        uniteadministrative_id: "",
        qtebesoin: ""
      },
      selectedCountry: null,
      stats: ["neuf(ve)", "Seconde Main", "Bon"],
      typeImmo: ["Corporelle", "Incorporelle"],
      causeInactivite: ["Vendue", "Mise en hors service"],
      search: "",
      designation: [null],
      quantite: null,
      prix_unitaire: null
    };
  },
  // mounted() {
  //   this.formData = this.immobilisations.find(
  //     immo => immo.id == this.$route.params.id
  //   );

  //   //console.log(this.$router);
  // },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "trieUaImmobilisation"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),

    TotalActuel() {
      const val = parseFloat(this.QteActuel) * parseFloat(this.formData.prixU);
      return parseFloat(val).toFixed(2);
    },
    QteActuel() {
      const val =
        parseInt(this.formData.quantite) - parseInt(this.formData.qteaffecte);
      return parseInt(val).toFixed(0);
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", ["ajouterImmobilisation"]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    changerUniteAdmin(event) {
      this.designation = event.target.value;
    },
    changerdesignation(event) {
      this.quantite =
        event.target.options[event.target.options.selectedIndex].number;
      this.prix_unitaire =
        event.target.options[event.target.options.selectedIndex].float;
    },
    afficherTableauImmobilisation() {
      this.$router.push({
        name: "immobilisation"
      });
    },
    // fonction pour vider l'input ajouter
    ajouterImmobilisationLocal() {
      var nouvelObjet = {
        ...this.formData,
        valeur_origine: this.ValeurOrigine
      };
      this.ajouterImmobilisation(nouvelObjet);

      this.formData = {
        code: "",
        type: "",
        designation: "",
        identification: "",
        etat_immobilisation: "",
        date_acquisition: "",
        date_mise_service: "",
        numero_facture: "",
        quantite: "",
        prixU: "",
        famille_id: "",
        valeur_origine: "",
        duree: "",
        numero_CC: "",
        acteur_depense_id: "",
        exercice_budgetaire_id: "",
        service_id: "",
        nature_bien: "",
        nature_dentree: "",
        // acteur_depense_id: "",
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

    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      this.modifierFamille(this.editFamille);

      this.editFamille = {
        code: "",
        libelle: ""
      };
    },
    alert() {
      console.log("ok");
    }
  }
};
</script>

<style>
.tail {
  width: 20px;
}
</style>