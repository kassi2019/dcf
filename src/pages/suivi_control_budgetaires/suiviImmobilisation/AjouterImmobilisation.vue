
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
                              <select v-model="formData.uniteadministrative_id">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="ua in groupTriUaImmo"
                                  :key="ua[0].id"
                                  :value="ua[0].uniteAdminist.id"
                                >{{ua[0].uniteAdminist.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Désignation:</label>
                            <div class="controls">
                              <select v-model="formData.famille_id" :readOnly="veifEquipementExist">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="desig in designationDynamiques(formData.uniteadministrative_id)"
                                  :key="desig.id"
                                  :value="desig.id"
                                >{{desig.famille.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Réel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichierQuantiteteReel"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Prix unitaire:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichierprixUnitaire"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Total réel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichierTotalReel"
                                readonly
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Afféctée:</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.qte_affecte" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Actuel:</label>
                            <div class="controls">
                              <input type="number" class="span" :value="AfficheQteActuel" readonly />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Total Actuel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichierTotalActuel"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Acteur Depense:</label>
                            <div class="controls">
                              <select
                                v-model="formData.acteurdepense_id"
                                :readOnly="veifEquipementExist"
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="acteurDep in all_acteur_depense"
                                  :key="acteurDep.id"
                                  :value="acteurDep.id"
                                >{{acteurDep.matricule}}</option>
                              </select>
                              EQUIPE:&nbsp;&nbsp;
                              <input
                                type="radio"
                                name="b"
                                checked
                              />OUI&nbsp;&nbsp;
                              <input type="radio" name="b" />NON
                            </div>
                          </div>
                        </td>
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numero Identification:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Num identification"
                                v-model="formData.identification"
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Etat de l'Immobilisation</label>
                            <div class="controls">
                              <select v-model="formData.etat_immobilisation">
                                <option v-for="statut in stats" :key="statut.id">{{statut}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Cause inactivite:</label>
                            <div class="controls">
                              <select v-model="formData.cause_inactivite">
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
                            <label class="control-label">Type Immobilisation</label>
                            <div class="controls">
                              <select v-model="formData.etat_immobilisation">
                                <option
                                  v-for="typeimmob in typeImmo"
                                  :key="typeimmob.id"
                                >{{typeimmob}}</option>
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
                                placeholder="Saisir la Nature"
                                v-model="formData.nature_bien"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label class="control-label">Numero CC:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Numero CC"
                              v-model="formData.numero_CC"
                            />
                          </div>
                        </td>
                        <td>
                          <label class="control-label">Taux:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Taux"
                              v-model="formData.TVA_id"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Duree:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                v-model="formData.duree"
                                placeholder="Saisir durée"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <label class="control-label">Numero facture:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Numero facture"
                              v-model="formData.numero_facture"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nature d'Entree:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Nature entree"
                                v-model="formData.nature_dentree"
                              />
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
                            <label class="control-label">Montant Amorti:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant amortissement anterieur"
                                v-model="formData.montant_amortissement_anterieur"
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
                                placeholder="Saisir le Montant amortissement anterieur"
                                v-model="formData.montant_evaluation"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Cession:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant Cession"
                                v-model="formData.montant_cession"
                              />
                            </div>
                          </div>
                        </td>
                        <div class="control-group">
                          <td>
                            <div class="control-group">
                              <label class="control-label">Date Amort Anterieur:</label>
                              <div class="controls">
                                <input
                                  type="date"
                                  class="span"
                                  v-model="formData.date_amortissement_anterieur"
                                />
                              </div>
                            </div>
                          </td>
                        </div>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date Evaluation:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="formData.date_evaluation"
                                placeholder="Date dernière evaluation"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date cession:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_cession" />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date de mise en service:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_mise_service" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date d'acquisition:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_acquisition" />
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
        // valeur_origine = this.ValeurOrigine(),

        exercice_budgetaire_id: "",
        famille_id: "",
        uniteadministrative_id: ""
      },

      stats: ["neuf(ve)", "Seconde Main", "Bon"],
      typeImmo: ["Corporelle", "Incorporelle"],
      causeInactivite: ["Vendue", "Mise en hors service"],
      search: ""
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
      "trieUaImmobilisation",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo"
    ]),

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),

    AfficheQteActuel() {
      const form = this.formData;

      if (form.qte_affecte <= this.AffichierQuantiteteReel)
        var val =
          parseInt(this.AffichierQuantiteteReel) -
          parseInt(this.formData.qte_affecte);
      if (isNaN(val)) return null;

      if (form.qte_affecte < 0) return (form.qte_affecte = "");

      return parseInt(val).toFixed(0);
    },

    designationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.trieUaImmobilisation.filter(
            element => element.uniteadmin_id == id
          );
        }
      };
    },
    acteurDepenseDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.SuiviImmo.filter(element => element.uniteadmin_id == id);
        }
      };
    },
    veifEquipementExist() {
      return this.formData.uniteadministrative_id == "";
    },

    // AfficheQteActuel() {
    //   const val =
    //     parseInt(this.AffichierQuantiteteReel) -
    //     parseInt(this.formData.qte_affecte);
    //   return parseInt(val).toFixed(0);
    // },

    AffichierQuantiteteReel() {
      const qtereel = this.trieUaImmobilisation.find(
        qtreel => qtreel.id == this.formData.famille_id
      );

      if (qtereel) {
        return qtereel.quantite;
      }
    },
    AffichierprixUnitaire() {
      const prixUnitaire = this.trieUaImmobilisation.find(
        prixUnitaire => prixUnitaire.id == this.formData.famille_id
      );

      if (prixUnitaire) {
        return prixUnitaire.prix_unitaire;
      }
    },
    AffichierTotalReel() {
      const totalreel = this.trieUaImmobilisation.find(
        totalreel => totalreel.id == this.formData.famille_id
      );

      if (totalreel) {
        return totalreel.montant_total;
      }
    },
    AffichierTotalActuel() {
      const val =
        parseFloat(this.AfficheQteActuel) *
        parseFloat(this.AffichierprixUnitaire);
      return parseFloat(val).toFixed(2);
    }
    // AffichierTotalActuel() {
    //   const totalactuel = this.trieUaImmobilisation.find(
    //     totalactuel => totalactuel.id == this.formData.total_actuel
    //   );

    //   if (totalactuel) {
    //     return totalactuel.montant_total;
    //   }
    // }
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
    // changerUniteAdmin(event) {
    //   this.designation = event.target.value;
    // },
    // changerdesignation(event) {
    //   this.qte = event.target.value;
    //   this.prix_unitaire = event.target.value;
    // },
    afficherTableauImmobilisation() {
      this.$router.push({
        name: "immobilisation"
      });
    },
    // fonction pour vider l'input ajouter
    ajouterImmobilisationLocal() {
      // var nouvelObjet = {
      //   ...this.formData,
      //   valeur_origine: this.ValeurOrigine
      // };
      var qtereel = {
        ...this.formData,
        qte_reel: this.AffichierQuantiteteReel
      };
      var prixUnit = {
        ...this.formData,
        prixUnitaire: this.AffichierprixUnitaire
      };
      var montant_reel = {
        ...this.formData,
        total_reel: this.AffichierTotalReel
      };

      var montant_actuel = {
        ...this.formData,
        total_actuel: this.AffichierTotalActuel
      };

      var Qte_actuel = {
        ...this.formData,
        qte_actuel: this.AfficheQteActuel
      };
      this.ajouterImmobilisation(qtereel, prixUnit);
      // this.ajouterImmobilisation(montant_reel);
      // this.ajouterImmobilisation(Qte_actuel);
      // this.ajouterImmobilisation(montant_actuel);
      this.formData = {
        totalreel: "",
        type: "",
        designation: "",
        identification: "",
        etat_immobilisation: "",
        date_acquisition: "",
        date_mise_service: "",
        numero_facture: "",
        qte_reel: "",
        qte_affecte: "",
        qte_actuel: "",

        prixUnitaire: "",
        total_actuel: "",
        famille_id: "",

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