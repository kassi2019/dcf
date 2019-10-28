import Famille from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Famille.vue";
import Service from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Service.vue";
import Amortissement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Amortissement.vue";
import Immobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Immobilisation.vue";
import AjouterImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/AjouterImmobilisation.vue";
import ModifierImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/ModifierImmobilisation.vue";
import immobilisationParService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/immobilisationParService.vue";
import VoirImmoParService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/VoirImmoParService.vue";
import ListeImmoRealise from "../../pages/suivi_control_budgetaires/suiviImmobilisation/ListeImmoRealise.vue";
import ListeImmobilisationPrevu from "../../pages/suivi_control_budgetaires/suiviImmobilisation/ListeImmobilisationPrevu.vue";
import TableauBordImmo from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TableauBordImmo.vue";
import RechercheTauxParUniteAdm from "../../pages/suivi_control_budgetaires/suiviImmobilisation/RechercheTauxParUniteAdm.vue";
import Amortissement2 from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Amortissement2.vue";
import amortissementLineaire from "../../pages/suivi_control_budgetaires/suiviImmobilisation/amortissementLineaire.vue";
import DetailImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/DetailImmobilisation.vue";
import besionImmolisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/besionImmolisation.vue";

const suiviImmobilisationRoutes = [
  {
    path: "/besion-Immolisation",
    name: "besionImmolisation",
    component: besionImmolisation
  },
  {
    path: "/famille",
    name: "famille",
    component: Famille
  },
  {
    path: "/service",
    name: "service",
    component: Service
  },
  {
    path: "/amortissement",
    name: "amortissement",
    component: Amortissement
  },
  {
    path: "/immobilisation",
    name: "immobilisation",
    component: Immobilisation
  },
  {
    path: "/Ajouter_immobilisation",
    name: "formulaireimmobilisation",
    component: AjouterImmobilisation
  },
  {
    path: "/Modifier_immobilisation/:id",
    name: "formulaireModifierImmobilisation",
    component: ModifierImmobilisation
  },
  {
    path: "/Recherche_immo_par_service",
    name: "RechercheImmoParService",
    component: immobilisationParService
  },
  {
    path: "/Voir_immo/:id",
    name: "afficherImmobilisation",
    component: VoirImmoParService
  },
  {
    path: "/Liste_immo_realise",
    name: "ListeImmoRealise",
    component: ListeImmoRealise
  },
  {
    path: "/Liste_immo_prevu",
    name: "ListeImmoPrevu",
    component: ListeImmobilisationPrevu
  },
  {
    path: "/TableauBordImmo",
    name: "TableauBordImmo",
    component: TableauBordImmo
  },

  {
    path: "/Recherche-Taux-UniteAd",
    name: "RechercheTauxUniteAd",
    component: RechercheTauxParUniteAdm
  },
  {
    path: "/Amortissement2",
    name: "Amortissement2",
    component: Amortissement2
  },
  {
    path: "/amortissement-Lineaire",
    name: "amortissementLineaire",
    component: amortissementLineaire
  },
  //detail immobilisation
  {
    path: "/Detail-Immobilisation/:id_immobilisation",
    name: "Detailimmobilisation",
    component: DetailImmobilisation
  }
];

export default suiviImmobilisationRoutes;
