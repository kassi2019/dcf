
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des plans d'activite</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                 <th>Code</th>
                  <th>Libelle</th>
                  <th>Structure activite</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(activite, index) 
                in localisationsFiltre" :key="activite.id">
                  <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{activite.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{activite.libelle || 'Non renseigné'}}</td>
      
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                      {{activite.structure_activite.libelle || 
                      'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
            <button @click.prevent="supprimerPlanActivite(activite.id)" 
             class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
       @cache="afficherModalAjouterTitre"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan activite</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Structure activite:</label>
              <div class="controls">
                <select  v-model="formData.structure_activite_id">
            <option v-for="plan_activite in structures_activites" :key="plan_activite.id" 
            :value="plan_activite.id">{{plan_activite.libelle}}</option>
                </select>
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <a @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</a>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier le plan activite</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">Structure activite:</label>
              <div class="controls">
                <select  v-model="editTitre.structure_activite_id">
            <option v-for="plan_activite in structures_activites" :key="plan_activite.id" 
            :value="plan_activite.id">{{plan_activite.libelle}}</option>
                </select>
              </div>
            </div>

          </form>              
          </div>
           <div class="modal-footer"> 
             <a @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
              href="#">Modifier</a>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>


<!----- fin modifier modal  ---->







  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
export default {
  
  data() {
    return {
        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
        formData : {
                code: "",
             libelle: "",
             structure_activite_id:""
        },

        editTitre: {
            code: "",
             libelle: ""
        },
       search:""
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites']) ,
  
    // methode pour trier un item
           localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.plans_activites.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm)

   
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxActivite', ['getPlanActivite', 
    'ajouterPlanActivite', 
   'supprimerPlanActivite', 'modifierPalnActivite']),     
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterPlanActivite(this.formData)

        this.formData = {
                code: "",
             libelle: "",
    structure_activite_id:""
        }
    },
// afficher modal
afficherMoadlModifierLocalisation(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.plans_activites[index];


        
 },
modifierLocalisationLocal(){
  this.modifierPalnActivite(this.editTitre)
  this.editTitre = {
                code: "",
             libelle: "",
             structure_activite_id:""
  }
}

  }
};
</script>

