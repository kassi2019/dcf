
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Amortissement</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type d'Amortissement</label>
            <div class="controls">
              <select v-model="formData.type">
                <option v-for="statut in stats" :key="statut.id">{{statut}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Immobilisation</label>
            <div class="controls">
              <select v-model="formData.immobilisation_id">
                <option
                  v-for="immo in immobilisations"
                  :key="immo.id"
                  :value="immo.id"
                >{{immo.designation}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Exercice Budgetaire</label>
            <div class="controls">
              <input type="text" v-model="formData.exercice_budgetaire" class="span" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Valeur d'Origine</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.valeur_origine"
                class="span"
                placeholder="Saisir la valeur origine"
              />
            </div>
          </div>
          <div class="control-group">
            <div class="tailRadio">
              <label class="radi">
                <input type="checkbox" v-model="formData.mois" />
                Mois
              </label>
              <label class="radi2">
                <input type="checkbox" v-model="formData.jour" />
                Jours
              </label>
              <label class="radi3">
                <input type="checkbox" v-model="formData.annee" />
                Année
              </label>
            </div>

            <label class="control-label">Dure</label>
            <div class="controls">
              <input type="text" v-model="formData.dure" class="span" placeholder="Saisir la Dure" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Taux</label>
            <div class="controls">
              <input
                type="text"
                :value="tauxAnnee"
                readonly
                class="span"
                placeholder="Saisir le Taux"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Annuite</label>
            <div class="controls">
              <input
                type="number"
                :value="amortissementJours"
                class="span"
                readonly
                placeholder="Annuite"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterAmortissementLocal(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.immobilisation_id && formData.dure.length"
        >Calculer</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Amortissement</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type d'Amortissement</label>
            <div class="controls">
              <select v-model="editAmortissement.type">
                <option v-for="statut in stats" :key="statut.id">{{statut}}</option>
              </select>
            </div>
          </div>
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
          <div class="control-group">
            <label class="control-label">Exercice Budgetaire</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAmortissement.exercice_budgetaire"
                class="span"
                readonly
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Valeur d'Origine</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAmortissement.valeur_origine"
                class="span"
                placeholder="Saisir la valeur origine"
                readonly
              />
            </div>
          </div>
          <div class="control-group">
            <div class="tailRadio">
              <label class="radi">
                <input type="checkbox" name="b" v-model="editAmortissement.mois" />
                Mois
              </label>
              <label class="radi2">
                <input type="checkbox" name="b" v-model="editAmortissement.jour" />
                Jours
              </label>
              <label class="radi3">
                <input type="checkbox" name="b" v-model="editAmortissement.annee" />
                Année
              </label>
            </div>
            <label class="control-label">Dure</label>
            <div class="controls">
              <input
                type="number"
                v-model="editAmortissement.dure"
                class="span"
                placeholder="Saisir la Dure"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Taux</label>
            <div class="controls">
              <input
                type="number"
                v-model="editAmortissement.taux"
                class="span"
                placeholder="Saisir le Taux"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Annuite</label>
            <div class="controls">
              <input
                type="number"
                class="span"
                v-model="editAmortissement.annuite"
                readonly
                placeholder="Montant amortissement"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierAmortissementLocal(editAmortissement)"
          class="btn btn-primary"
          href="#"
          v-show="editAmortissement.type  && editAmortissement.immobilisation_id && editAmortissement.taux"
        >Calculer</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
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
                    <th>Type Amortissement</th>
                    <th>Immobilisation</th>
                    <th>Exercice Budgetaire</th>
                    <th>Valeur Origine</th>
                    <th>Dure</th>
                    <th>Mois</th>
                    <th>Jours</th>
                    <th>Année</th>
                    <th>Taux</th>
                    <th>Annuité</th>
                    <th>Action</th>
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
                    >{{amortissement.type || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.armortisement_immo.designation || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.exercice_budgetaire || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.valeur_origine || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.dure || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierAmortissement(index)">
                      <input type="checkbox" v-model="amortissement.mois" name="rad" />
                    </td>
                    <td @dblclick="afficherModalModifierAmortissement(index)">
                      <input type="checkbox" v-model="amortissement.jour" name="rad" />
                    </td>
                    <td @dblclick="afficherModalModifierAmortissement(index)">
                      <input type="checkbox" v-model="amortissement.annee" name="rad" />
                    </td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.taux || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierAmortissement(index)"
                    >{{amortissement.annuite || 'Non renseigné'}}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerAmortissement(amortissement.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_amortissement.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Amortissement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
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
        taux: "",
        valeur_origine: "",
        dure: "",
        exercice_budgetaire: "",
        mois: "",
        jour: "",
        annee: "",
        annuite: ""
      },
      editAmortissement: {
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
        (parseFloat(this.formData.valeur_origine) * 12) /
        parseFloat(this.formData.dure);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    amortissementJours() {
      const val =
        (parseFloat(this.formData.valeur_origine) * 360) /
        parseFloat(this.formData.dure);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    amortissementAnnee() {
      const val =
        (parseFloat(this.formData.valeur_origine) * 1) /
        parseFloat(this.formData.dure);
      // parseFloat(this.formData.TVA_id);
      return parseFloat(val).toFixed(2);
    },
    tauxAnnee() {
      const val = 1 / parseFloat(this.formData.dure);
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
</style>