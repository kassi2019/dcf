
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          
            <!-- <div class="quick-actions_homepage deplaceCarre">
              <ul class="quick-actions">
                <li class="bg_lr">
                  <a href="#">
                    {{nomTypeUniteAdministrative(typeUniteAdmin_id)}}
                    <i class="icon-list-ol"></i>
                   <span class="label label-success">{{TauxEquipementParTypeUniteAdministrative(typeUniteAdmin_id)}}%</span> Taux Equipement par type UA
                  </a>
                </li>
                 <li class="bg_ls">
                  <a href="#">
                    {{nomUniteAdministrative(uniteadmin_id)}}
                    <i class="icon-list-ol"></i>
                    <span class="label label-important">{{TauxEquipementParUniteAdministrative(uniteadmin_id)}}%</span> Taux Equipement par UA          </a>
                </li>
                
              </ul>
            </div>
           -->
          <div class="widget-box">
           
 <!-- <div class="widget-title">
             
              <div align="right">
               
                 <div class="span3">
                  <model-list-select
                    v-model="typeUniteAdmin_id"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="Type Unite Admin"
                  ></model-list-select>
                   
                </div>
              </div>
                 <div align="right ">
                <div class="span3 ">
                 
                   <model-list-select
                    v-model="uniteadmin_id"
                    style="background-color: rgb(222, 222, 222);"
                    :list="uniteAdministratives"
                    option-value="id"
                    option-text="libelle"
                    placeholder="Unite Administrative"
                  ></model-list-select>
                </div>
              </div>
            </div> -->
            <br>
             
              
             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste structures plus équipé</h5>
              
                 
            </div>
            <div class="table-responsive text-nowrap" v-if="familles.length && services.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>type Unité Administrative</th> 
                    <th>Unité Administrative</th> 
                    <th>type equipement</th> 
                    <th>Designation</th>
                    <th>Quantité Prévue</th>
                    <th>Quantité Réalisé</th>
                    <th>Quantité Restant</th>
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in afficheStructureMoinEquipe" :key="immobilisat.id">
                   
                    <td
                      
                    >{{immobilisat.typeUniteAdministrative.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.uniteAdminist.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.famille.reletion__equipement.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.famille.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.qte_reel || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.qte_affecte || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.qte_actuel || 'Non renseigné'}}</td>
                    
                  
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
              <p style="text-align:center;font-size:20px;color:red;">Pas de structure Equipé pour le moment</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
   components: {
    ModelListSelect
  },
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

      search: "",
      typeUniteAdmin_id: "",
      uniteadmin_id:"",
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
      "afficheStructureMoinEquipe"
      // "getPersonnaliseImmobilisation",
     
      // "getPersonnaliseSuivImmo"
    ]),
     ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
     ...mapGetters("uniteadministrative", ["uniteAdministratives"]),


  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllImmobilisation",

      "supprimerImmobilisation"
    ]),

    // afficher modal de modification
    afficherModalModifierImmobilisation(id) {
      this.$router.push({
        path: "/Modifier_immobilisation/" + id
      });
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>
<style>
.deplaceCarre{
  margin: 0 250px;
}
</style>
