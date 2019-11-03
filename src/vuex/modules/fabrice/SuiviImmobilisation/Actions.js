import axios from "../../fabrice/SuiviImmobilisation/urls/api";

var housecall = require("housecall");
var queue = housecall({ concurrency: 2, cooldown: 1000 });

//////////////////////////*debut action famille */////////////////////////////

// afficher liste famille
export function getAllFamille({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_famille")
      .then(response => {
        commit("GET_ALL_FAMILLE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterFamille({ commit }, nouveau) {
  axios
    .post("/ajouter_famille", {
      code: nouveau.code,
      libelle: nouveau.libelle,
      equipemt_id: nouveau.equipemt_id
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_FAMILLE", response.data);
      }
    });
}

// modifier
export function modifierFamille({ commit }, nouveau) {
  axios
    .put("/modifier_famille/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle,
      equipemt_id: nouveau.equipemt_id
    })
    .then(response => {
      commit("MODIFIER_FAMILLE", response.data);
    });
}
//supprimer
export function supprimerFamille({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_FAMILLE", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_famille/" + id).then(() => dialog.close());
    });
}

/*fin action famille */

//////////////////////////*debut action service */////////////////////////////

// afficher
export function getAllService({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_service")
      .then(response => {
        commit("GET_ALL_SERVICE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterService({ commit }, nouveau) {
  axios
    .post("/ajouter_service", {
      code: nouveau.code,
      libelle: nouveau.libelle
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SERVICE", response.data);
      }
    });
}

// modifier
export function modifierService({ commit }, nouveau) {
  axios
    .put("/modifier_service/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle
    })
    .then(response => {
      commit("MODIFIER_SERVICE", response.data);
    });
}
//supprimer
export function supprimerService({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_SERVICE", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_service/" + id).then(() => dialog.close());
    });
}

/*fin action SERVICE */

//////////////////////////*debut action immobilisation*/////////////////////////////

// afficher
export function getAllImmobilisation({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_immobilisation")
      .then(response => {
        commit("GET_ALL_IMMOBILISATION", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterImmobilisation({ commit }, formData) {
  axios.post("/ajouter_immobilisation", formData).then(response => {
    if (response.status == 201) {
      commit("AJOUTER_IMMOBILISATION", response.data);
    }
  });
}

// modifier
export function modifierImmobilisation({ commit }, nouveau) {
  axios
    .put("/modifier_immobilisation/" + nouveau.id, {
      // code: nouveau.code,
      // type_immo: nouveau.type_immo,
      // designation: nouveau.designation,
      // identification: nouveau.identification,
      // etat_immobilisation: nouveau.etat_immobilisation,
      // date_acquisition: nouveau.date_acquisition,
      // date_mise_service: nouveau.date_mise_service,
      // numero_facture: nouveau.numero_facture,
      // quantite: nouveau.quantite,
      // Prix_unitaire: nouveau.Prix_unitaire,
      // famille_id: nouveau.famille_id,
      // valeur_origine: nouveau.valeur_origine,
      // duree: nouveau.duree,
      // numero_CC: nouveau.numero_CC,
      // acteurdepense_id: nouveau.acteurdepense_id,
      // exercice_budgetaire_id: nouveau.exercice_budgetaire_id,
      // service_id: nouveau.service_id,
      // nature_bien: nouveau.nature_bien,
      // nature_dentree: nouveau.nature_dentree,
      // // acteur_depense_id: nouveau,
      // TVA_id: nouveau.TVA_id,
      // montant_evaluation: nouveau.montant_evaluation,
      // date_evaluation: nouveau.date_evaluation,
      // montant_cession: nouveau.montant_cession,
      // date_cession: nouveau.date_cession,
      // cause_inactivite: nouveau.cause_inactivite,
      // montant_amortissement_anterieur: nouveau.montant_amortissement_anterieur,
      // date_amortissement_anterieur: nouveau.date_amortissement_anterieur
    })
    .then(response => {
      commit("MODIFIER_IMMOBILISATION", response.data);
    });
}
//supprimer
export function supprimerImmobilisation({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_IMMOBILISATION", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios
        .delete("/supprimer_immobilisation/" + id)
        .then(() => dialog.close());
    });
}
export function afficherUnSeulImmobilisation({ commit }, id) {
  commit("GET_SEUL_IMMOBILISATION", id);

  axios.get("/seul_immobilisation/" + id);
}
/*fin action Immobilisation */

//////////////////////////*debut action amortissement */////////////////////////////

// afficher
export function getAllAmortissement({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_amortissement")
      .then(response => {
        commit("GET_ALL_AMORTISSEMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterAmortissement({ commit }, nouveau) {
  axios
    .post("/ajouter_amortissement", {
      type: nouveau.type,
      immobilisation_id: nouveau.immobilisation_id,
      taux: nouveau.taux,
      valeur_origine: nouveau.valeur_origine,
      dure: nouveau.dure,
      exercice_budgetaire: nouveau.exercice_budgetaire,
      mois: nouveau.mois,
      jour: nouveau.jour,
      annee: nouveau.annee,
      annuite: nouveau.annuite
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_AMORTISSEMENT", response.data);
      }
    });
}

// modifier
export function modifierAmortissement({ commit }, nouveau) {
  axios
    .put("/modifier_amortissement/" + nouveau.id, {
      type: nouveau.type,
      immobilisation_id: nouveau.immobilisation_id,
      taux: nouveau.taux,
      valeur_origine: nouveau.valeur_origine,
      dure: nouveau.dure,
      exercice_budgetaire: nouveau.exercice_budgetaire,
      mois: nouveau.mois,
      jour: nouveau.jour,
      annee: nouveau.annee,
      annuite: nouveau.annuite
    })
    .then(response => {
      commit("MODIFIER_AMORTISSEMENT", response.data);
    });
}
//supprimer
export function supprimerAmortissement({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_AMORTISSEMENT", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_amortissement/" + id).then(() => dialog.close());
    });
}

/*fin action amortissement */
// afficher liste besoin immo
export function getAllBesoinImmo({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_besoin_immo")
      .then(response => {
        commit("GET_ALL_BESOIN_IMMO", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterBesoinImmo({ commit }, nouveau) {
  axios
    .post("/ajouter_besoin_immo", {
      typeuniteadminist_id: nouveau.typeuniteadminist_id,
      uniteadmin_id: nouveau.uniteadmin_id,
      famille_id: nouveau.famille_id,
      quantite: nouveau.quantite,
      prix_unitaire: nouveau.prix_unitaire,
      montant_total: nouveau.montant_total,
      date_jour: nouveau.date_jour
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BESOIN_IMMO", response.data);
      }
    });
}

// modifier
export function modifierBesoinImmo({ commit }, nouveau) {
  axios
    .put("/modifier_besoin_immo/" + nouveau.id, {
      typeuniteadminist_id: nouveau.typeuniteadminist_id,
      uniteadmin_id: nouveau.uniteadmin_id,
      famille_id: nouveau.famille_id,
      quantite: nouveau.quantite,
      prix_unitaire: nouveau.prix_unitaire,
      montant_total: nouveau.montant_total,
      date_jour: nouveau.date_jour
    })
    .then(response => {
      commit("MODIFIER_BESOIN_IMMO", response.data);
    });
}

export function modifierQuantiteReel({ commit }, {id_besoinImmo_a_modifier, qte_actu}) {
  console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifier_besoin_immo/" + id_besoinImmo_a_modifier, {
      quantite: qte_actu
    })
    .then(response => {
      commit("MODIFIER_QUANTITE_REEL", id_besoinImmo_a_modifier, qte_actu);
    });
}

//supprimer
export function supprimerBesoinImmo({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_BESOIN_IMMO", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_besoin_immo/" + id).then(() => dialog.close());
    });
}

/*fin action famille */

// afficher liste famille
export function getAllEquipement({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_equipement")
      .then(response => {
        commit("GET_ALL_EQUIPEMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterEquipement({ commit }, nouveau) {
  axios
    .post("/ajouter_equipement", {
      code: nouveau.code,
      libelle: nouveau.libelle
    })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_EQUIPEMENT", response.data);
      }
    });
}

// modifier
export function modifierEquipement({ commit }, nouveau) {
  axios
    .put("/modifier_equipement/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle
    })
    .then(response => {
      commit("MODIFIER_EQUIPEMENT", response.data);
    });
}
//supprimer
export function supprimerEquipement({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_EQUIPEMENT", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_equipement/" + id).then(() => dialog.close());
    });
}

/*fin action famille */
