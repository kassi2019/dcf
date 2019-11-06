
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
              <h5>Modifier Immobilisation</h5>
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
                        <a data-toggle="tab" href="#tab3">Info Montant et Date Immo</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab4">Autres Information</a>
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
                              <select v-model="editImmobilisation.exercice_budgetaire_id">
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
                            <label class="control-label">Code:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Code"
                                v-model="editImmobilisation.code"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.type_immo">
                                <option v-for="immo in typeImmo" :key="immo.id">{{immo}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numéro facture:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Numéro de la facture "
                                v-model="editImmobilisation.numero_facture"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numero CC:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Numero CC"
                                v-model="editImmobilisation.numero_CC"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Matricule Acteurs:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.acteurdepense_id">
                                <option
                                  v-for="actePersso in all_acteur_depense"
                                  :key="actePersso.id"
                                  :value="actePersso.id"
                                >{{actePersso.matricule}}</option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Service:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.service_id">
                                <option
                                  v-for="Service in services"
                                  :key="Service.id"
                                  :value="Service.id"
                                >{{Service.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Famille:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.famille_id">
                                <option
                                  v-for="Famille in familles"
                                  :key="Famille.id"
                                  :value="Famille.id"
                                >{{Famille.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Unité:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.unite_id">
                                <option
                                  v-for="united in unites"
                                  :key="united.id"
                                  :value="united.id"
                                >{{united.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      <tr>
                        <div class="control-group">
                          <td>
                            <div class="control-group">
                              <label class="control-label">Désignation:</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  placeholder="Saisir la Désignation"
                                  v-model="editImmobilisation.designation"
                                />
                              </div>
                            </div>
                          </td>
                        </div>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Quantité:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                placeholder="Saisir la Quantité"
                                v-model="editImmobilisation.quantite"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Prix Unitaire:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                placeholder="Saisir le Prix Unitaire"
                                v-model="editImmobilisation.prix_unitaire"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Valeur d'Origine:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                readonly
                                v-model="editImmobilisation.valeur_origine"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Taux:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Taux"
                                v-model="editImmobilisation.TVA_id"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date d'acquisition:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="editImmobilisation.date_acquisition"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date de mise en service:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="editImmobilisation.date_mise_service"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Duree:</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editImmobilisation.duree" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numero Identification:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir la Désignation"
                                v-model="editImmobilisation.identification"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Etat de l'Immobilisation</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.etat_immobilisation">
                                <option v-for="statut in stats" :key="statut.id">{{statut}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </div>
                    <!--ongle 3 -->
                    <div id="tab3" class="tab-pane">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nature d'Entree:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir la Nature d' entree"
                                v-model="editImmobilisation.nature_dentree"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Evaluation:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Montant dernière evaluation"
                                v-model="editImmobilisation.montant_evaluation"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date Evaluation:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="editImmobilisation.date_evaluation"
                                placeholder="Date dernière evaluation"
                              />
                            </div>
                          </div>
                        </td>
                        <div class="control-group">
                          <td>
                            <div class="control-group">
                              <label class="control-label">Montant Cession:</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  placeholder="Saisir le Montant Cession"
                                  v-model="editImmobilisation.montant_cession"
                                />
                              </div>
                            </div>
                          </td>
                        </div>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date cession:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="editImmobilisation.date_cession"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Amort Anterieur:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant amortissement anterieur"
                                v-model="editImmobilisation.montant_amortissement_anterieur"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date Amort Anterieur:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="editImmobilisation.date_amortissement_anterieur"
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Cause inactivite:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.cause_inactivite">
                                <option
                                  v-for="inactivite in causeInactivite"
                                  :key="inactivite.id"
                                >{{inactivite}}</option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Nature du Bien:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir la Nature du bien"
                                v-model="editImmobilisation.nature_bien"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </div>
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="modifierImmobilisationLocal(editImmobilisation)"
                        >Modifier</a>
                        <a @click.prevent="afficherTableauImmobilisation()" class="btn">Fermer</a>
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
  </div>
</template>
 <script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      editImmobilisation: {},
      stats: ["neuf(ve)", "Seconde Main", "Bon"],
      typeImmo: ["Corporelle", "Incorporelle"],
      causeInactivite: ["Vendue", "Mise en hors service"]
    };
  },
 
  created() {
    this.editImmobilisation = this.immobilisations.find(
      immo => immo.id == this.$route.params.id
    );

    //console.log(this.$router);
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "immobilisations",
      "familles",
      "services"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense"]),

    ValeurOrigine() {
      const val =
        parseFloat(this.editImmobilisation.quantite) *
        parseFloat(this.editImmobilisation.Prix_unitaire);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", ["modifierImmobilisation"]),

    afficherTableauImmobilisation() {
      this.$router.push({
        name: "immobilisation"
      });
    },
    // fonction pour vider l'input modification
    modifierImmobilisationLocal() {
      this.modifierImmobilisation(this.editImmobilisation);
    },
    alert() {
      console.log("ok");
    }
  }
};
</script>

