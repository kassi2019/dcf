
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Famille</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type d'équipement:</label>
            <div class="controls">
              <select v-model="formData.equipemt_id">
                <option
                  v-for="equip in equipements"
                  :key="equip.id"
                  :value="equip.id"
                >{{equip.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Classe:</label>
            <div class="controls">
              <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFamilleLocal(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.code.length && formData.libelle.length"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Famille</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type d' équipement:</label>
            <div class="controls">
              <select v-model="editFamille.equipemt_id">
                <option
                  v-for="equip in equipements"
                  :key="equip.id"
                  :value="equip.id"
                >{{equip.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Classe:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editFamille.code"
                class="span"
                placeholder="Saisir le code"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editFamille.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editFamille)"
          class="btn btn-primary"
          href="#"
          v-show="editFamille.code.length && editFamille.libelle.length"
        >Modifier</a>
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
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Familles"
            :data="filtre_famille"
            name="Liste des familles"
          >
            <i title="Exporter en excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Familles</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Type équipement</th>
                    <th>Classe</th>
                    <th>Libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(famille, index) in filtre_famille"
                    :key="famille.id"
                  >
                    <td
                      @dblclick="afficherModalModifierFamille(index)"
                    >{{famille.equipemt.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(index)"
                    >{{famille.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(index)"
                    >{{famille.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerFamille(famille.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Famille Article</p>
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
      json_fields: {
        TYPE_EQUIPEMENT: "reletion_Equipement.libelle",
        CODE: "code",
        LIBELLE: "libelle"
      },

      formData: {
        code: "",
        libelle: "",
        equipemt_id: ""
      },
      editFamille: {
        code: "",
        libelle: "",
        equipemt_id: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "familles",
      "equipements",
      "persoEquipement"
    ]),
    filtre_famille() {
      const st = this.search.toLowerCase();
      return this.persoEquipement.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllFamille",
      "ajouterFamille",
      "modifierFamille",
      "supprimerFamille"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterFamilleLocal() {
      this.ajouterFamille(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editFamille = this.familles[index];
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

