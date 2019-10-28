
<template>
  <div>
    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide modalamorti">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Amortissement</h3>
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
                  <a data-toggle="tab" href="#tab2">Calcul en Jours</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab3">Calcul en Mois</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab4">Calcul en Année</a>
                </li>
              </ul>
            </div>
            <div class="widget-content tab-content">
              <div id="tab1" class="tab-pane active">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Type d'Amortissement</label>
                      <div class="controls">
                        <select v-model="editAmortissement.type">
                          <option v-for="statut in stats" :key="statut.id">{{statut}}</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Immobilisation</label>
                      <div class="controls">
                        <select v-model="editAmortissement.immobilisation_id">
                          <option
                            v-for="immo in immobilisations"
                            :key="immo.id"
                            :value="immo.id"
                          >{{immo.designation}}</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Exercice Budgetaire</label>
                      <div class="controls">
                        <input
                          type="text"
                          v-model="editAmortissement.exercice_budgetaire"
                          class="span"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </div>
              <div id="tab2" class="tab-pane">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Valeur d'origine</label>
                      <div class="controls">
                        <input type="text" v-model="editAmortissement.valeur_origine" class="span" />
                      </div>
                      <label class="control-label">Annuité</label>
                      <div class="controls">
                        <input type="text" :value="amortissementJours" class="span" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Dure</label>
                      <div class="controls">
                        <input type="number" v-model="editAmortissement.dure_jour" class="span" />
                      </div>
                      <label class="control-label">Valeur nette</label>
                      <div class="controls">
                        <input type="text" :value="amortissementJours" class="span" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Taux</label>
                      <div class="controls">
                        <input type="number" :value="tauxjour" class="span" />
                      </div>
                    </div>
                  </td>
                </tr>
              </div>
              <div id="tab3" class="tab-pane">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Valeur d'origine</label>
                      <div class="controls">
                        <input
                          type="number"
                          v-model="editAmortissement.valeur_origine"
                          class="span"
                        />
                      </div>
                      <label class="control-label">Annuité</label>
                      <div class="controls">
                        <input type="text" :value="amortissementMois" class="span" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Dure</label>
                      <div class="controls">
                        <input type="number" v-model="editAmortissement.dure_mois" class="span" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Taux</label>
                      <div class="controls">
                        <input type="number" :value="tauxmois" class="span" />
                      </div>
                    </div>
                  </td>
                </tr>
              </div>
              <div id="tab4" class="tab-pane">
                <tr>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Valeur d'origine</label>
                      <div class="controls">
                        <input
                          type="number"
                          v-model="editAmortissement.valeur_origine"
                          class="span"
                        />
                      </div>
                      <label class="control-label">Annuité</label>
                      <div class="controls">
                        <input type="text" :value="amortissementAnnee" class="span" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Dure</label>
                      <div class="controls">
                        <input type="number" v-model="editAmortissement.dure_annee" class="span" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="control-group">
                      <label class="control-label">Taux</label>
                      <div class="controls">
                        <input type="number" :value="tauxAnnee" readonly class="span" />
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
                    @click.prevent="ajouterImmobilisationLocal(editAmortissement)"
                  >Calculer</a>
                  <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                </div>
              </div>
            </div>
          </div>
        </table>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
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
              <h5>Amortissements Linéaire</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Exercice</th>
                    <th>Type Amortissement</th>
                    <th>Immobilisation</th>
                    <th>Valeur Origine</th>
                    <th>Annuite</th>
                    <th>Valeur Net</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(amortissement, index) in filtre_amortissement"
                    :key="amortissement.id"
                  >
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.exercice_budgetaire || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.type || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.armortisement_immo.designation || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.valeur_origine || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.annuite || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.valeur_net || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
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
    filtre_amortissement() {
      const st = this.search.toLowerCase();
      return this.amortissements.filter(amortissement => {
        return amortissement.type.toLowerCase().includes(st);
      });
    },
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