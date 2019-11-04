
<template>
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <!-- <li class="bg_lb" title="nombre de famille d'immobilisation">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreFamilleArticle}}</span> Nbre familles immo
          </a>
        </li>-->

        <!-- <li class="bg_ly" title="nombre de service">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreServices}}</span> Nbre de service
          </a>
        </li>-->
        <!-- <li class="bg_lo" title="total amortissement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreAmortissement}}</span> Nbre Amortissement
          </a>
        </li>-->
         <li class="bg_ls" title="Total equipement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreTotalEquipement}}</span> Nbre Total d'équipement
          </a>
        </li> 

        
        <li class="bg_ly" title="nombre immobilisation prévue">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{SommeEquipementPrevue}}</span>Nbre Equipement prévue
          </a>
        </li>
        <li class="bg_ls" title="Total equipement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{SommeEquipementAffecte}}</span> Nbre Equipement Réalise
          </a>
        </li> 
        <!-- <li class="bg_lg" title="volume d'immobilisation réalise">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-success">{{volumeImmoRealise}}</span>Volume équipement réalisé
          </a>
        </li>-->
        <li class="bg_lg">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-success">{{volumeImmoPrevu}}</span>Volume équipement prévue
          </a>
        </li>
        <li class="bg_lr" >
          <a href="#">
            <i class="icon-info-sign"></i>
            <span class="label label-success">{{}}%</span>Taux Equipement prévue
          </a>
        </li>
        <!-- <li class="bg_lr" title="Taux immobilisation de UA">
          <a href="#">
            <i class="icon-info-sign"></i>
            <span class="label label-success">{{tauxbesoinimmoUa}}%</span>Taux Besoin immobilisation de ua
          </a>
        </li>-->
      </ul>
    </div>

    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "nombreFamilleArticle",
      "nombreServices",
      "nombreAmortissement",
      "nombreImmobilisation",
      "nbreImmoRealise",
      "nbreImmoPrevue",
      // "volumeImmoRealise",
      "volumeImmoPrevu",
      "tauximmobilisationUa",
      "NbreImmobilisationPrevue",
      "tauxbesoinimmoUa",
      "SommeEquipementPrevue",
      "SommeEquipementActuel",
      "SommeEquipementRealise",
      "nombreTotalEquipement",
      "SommeEquipementAffecte",
      "tauxEquipementPrevue"

      // "nbreArchivageNotes"
    ]),
    filtre_archivage_document() {
      const st = this.search.toLowerCase();
      return this.archivageDocuments.filter(archivagedocument => {
        return (
          archivagedocument.reference.toLowerCase().includes(st) ||
          archivagedocument.unite_administrative.libelle
            .toLowerCase()
            .includes(st) ||
          archivagedocument.type_texte.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {}
};
</script>



<style>
.deplaceCar1 {
  margin: 0 50px;
}
.deplaceCar {
  margin: 0 120px;
}
</style>
