
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
            <h5>Liste des structures fonctionnelles</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search"  placeholder="Searche...">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Libelle</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(structure_fonctionnelle, index) in localisationsFiltre"
                 :key="structure_fonctionnelle.id">
                  <td @dblclick="afficherModalModifierType(index)">
                    {{structure_fonctionnelle.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierType(index)">
                    {{structure_fonctionnelle.libelle || 'Non renseigné'}}</td>
                 
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureFonctionnelle(structure_fonctionnelle.id)"  class="btn btn-danger ">
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
       @cache="afficherModalAjouterType"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter structure fonctionnelle</h3>
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
              
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length && formData.libelle.length" 
             @click.prevent="ajouterTypeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->
 


<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure fonctionnelle</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editFonctionnelle.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editFonctionnelle.libelle" class="span" placeholder="" />
              </div>
            </div>
            
            
          </form>              
          </div>
           <div class="modal-footer"> 
             <a @click.prevent="modifierTypeLocal(editFonctionnelle)" class="btn btn-primary"
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
            
        },

        editFonctionnelle: {
            code: "",
             libelle: "",
        
        },
      search:""
    };
  },
 
  created() {
    //this.getStructureFonctionnelle()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxFonctionnelle', ['structures_fonctionnelles']),
   
         localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_fonctionnelles.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxFonctionnelle', ['getStructureFonctionnelle', 
   'ajouterStructureFonctionnelle','modifierStructureFonctionnelle','supprimerStructureFonctionnelle']),   
   
    afficherModalAjouterType(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTypeLocal () {
      this.ajouterStructureFonctionnelle(this.formData)

        this.formData = {
                code: "",
             libelle: "",
           
        }
    },
// afficher modal
afficherModalModifierType(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editFonctionnelle = this.structures_fonctionnelles[index];


        
 },

modifierTypeLocal(){
  this.modifierStructureFonctionnelle(this.editFonctionnelle)
  this.editFonctionnelle = {
    code:"",
    libelle:""
  }
}
  }
};
</script>

