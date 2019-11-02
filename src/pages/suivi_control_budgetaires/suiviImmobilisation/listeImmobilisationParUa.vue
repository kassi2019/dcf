
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
              <h5>Liste des Immobilisations</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder="Unite d'administrative" v-model="search" />
              </div>
            </div>

            <div class="table-responsive text-nowrap" v-if="SuiviImmo.length && familles.length && services.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <th>Unite administrative</th>
                    <th>Classe</th>
                    <!-- <th>type equipement</th> -->
                    <th>Designation</th>
                    <th>Quantité Réel</th>
                    <th>Quantité afféctée</th>
                    <th>Quantité actuel</th>
                    <th>Prix Unitaire</th>
                    <th>Total Actuel</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in filtre_immobilisation" :key="immobilisat.id">
                       <td
                      
                    >{{immobilisat.uniteAdminist.libelle || 'Non renseigné'}}</td>
                    <!-- <td
                      
                    >{{immobilisat.equipementImmo.libelle || 'Non renseigné'}}</td> -->
                    <td
                      
                    >{{immobilisat.familleImmo.code || 'Non renseigné'}}</td>
                    <!-- <td
                      
                    >{{immobilisat.reletion_famille.reletion_Equipement.libelle || 'Non renseigné'}}</td>-->
                    <td
                      
                    >{{immobilisat.familleImmo.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.qte_reel || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.qte_affecte || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.qte_actuel || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.prixUnitaire || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.total_actuel || 'Non renseigné'}}</td>
                    <td>
                      <router-link
                        :to="{name : 'Detailimmobilisation', params: {id_immobilisation:immobilisat.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                     
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <div v-if="filtre_immobilisation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Immobilisations</p>
              </div>-->
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Pas d'Immobilisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
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
      formData: {},

      editImmobilisation: {},

      search: ""
    };
  },
  mounted() {
    this.formData = this.SuiviImmo.find(
      immobilisat => immobilisat.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "SuiviImmo",
      "familles",
      "services",
      "getPersonnaliseImmobilisation",
      "getPersonnalise",
      "getPersonnaliseSuivImmo"
    ]),
    filtre_immobilisation() {
      const st = this.search.toLowerCase();
      return this.SuiviImmo.filter(immo => {
        return immo.uniteAdminist.libelle.toLowerCase().includes(st);
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllImmobilisation",

      "supprimerImmobilisation"
    ]),

    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$router.push({
        name: "formulaireimmobilisation"
      });
    },

    formatageSomme: formatageSomme,
    // fonction pour vider l'input ajouter
 
    
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>

