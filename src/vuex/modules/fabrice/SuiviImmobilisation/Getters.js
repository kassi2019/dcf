const familles = state =>
  state.familles.sort((a, b) => (a.code > b.code ? 1 : -1));

const services = state =>
  state.services.sort((a, b) => (a.code > b.code ? 1 : -1));
const amortissements = state =>
  state.amortissements.sort((a, b) => (a.code > b.code ? 1 : -1));
const immobilisations = state =>
  state.immobilisations.sort((a, b) => (a.code > b.code ? 1 : -1));
const besoinImmobilisations = state =>
  state.besoinImmobilisations.sort((a, b) =>
    a.quantite > b.quantite ? 1 : -1
  );

export const listeImmoRealise = state =>
  state.immobilisations.filter(
    Immrealise => Immrealise.date_mise_service !== null
  );
export const listeImmoPrevue = state =>
  state.immobilisations.filter(
    Immrealise => Immrealise.date_mise_service == null
  );

////////////getter des migration des cle etrangere/////////

export const SuiviImmo = (state, getters, rootState, rootGetters) =>
  state.immobilisations.map(element => {
    if (
      element.exercice_budgetaire_id !== null &&
      element.unite_id !== null &&
      element.acteurdepense_id !== null
    ) {
      element = {
        ...element,
        exoBudgetaire: rootGetters[
          "parametreGenerauxAdministratif/exercices_budgetaires"
        ].find(exercice => exercice.id == element.exercice_budgetaire_id),
        unitePara: rootGetters["parametreGenerauxProgrammeUnite/unites"].find(
          United => United.id == element.unite_id
        ),
        acteurDepense: rootGetters[
          "personnelUA/personnaliseActeurDepense"
        ].find(auteurDep => auteurDep.id == element.acteurdepense_id)
      };
    }

    return element;
  });

//////////////////////////////////////fin///////////////

export const personBesoinImmo = (state, getters, rootState, rootGetters) =>
  state.besoinImmobilisations.map(element => {
    if (element.uniteadmin_id !== null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id)
      };
    }

    return element;
  });
export const trieUaBesoinImmo = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.quantite !== 0
  );

export const trieUaImmobilisation = (state, getters, rootState, rootGetters) =>
  getters.trieUaBesoinImmo.map(element => {
    if (element.uniteadmin_id !== null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id)
      };
    }

    return element;
  });

//////////////// getter calcul des nombre////////////////
export const nombreTotalBesoinImmoUa = state =>
  state.besoinImmobilisations.length;
export const nombreFamilleArticle = state => state.familles.length;
export const nombreServices = state => state.services.length;
export const nombreAmortissement = state => state.amortissements.length;
export const nombreImmobilisation = state => state.besoinImmobilisations.length;
export const nbreImmoRealise = state =>
  state.besoinImmobilisations.filter(Immrealise => Immrealise.quantite == 0)
    .length;
export const nbreImmoPrevue = state =>
  state.immobilisations.filter(
    Immrealise => Immrealise.date_mise_service == null
  ).length;

export const NbreImmobilisationPrevue = state =>
  state.besoinImmobilisations.filter(
    immobilisationPrevu => immobilisationPrevu.quantite !== 0
  ).length;

export const volumeImmoRealise = (state, getters) =>
  parseFloat(getters.nbreImmoRealise / getters.nombreImmobilisation).toFixed(2);
////////////////////getter calcul pourcentage///////////////
export const volumeImmoPrevu = (state, getters) =>
  parseFloat(
    getters.NbreImmobilisationPrevue / getters.nombreTotalBesoinImmoUa
  ).toFixed(2);

export const tauximmobilisationUa = (state, getters) =>
  parseFloat((1 / getters.nombreImmobilisation) * 100).toFixed(2);

export const tauxbesoinimmoUa = (state, getters) =>
  parseFloat((1 / getters.NbreImmobilisationPrevue) * 100).toFixed(2);

// export const trieUaBesoinImmo = state =>
//   state.besoinImmobilisations.filter(
//     trieUaBesoin => trieUaBesoin.quantite !== 0
//   ).length;

export {
  familles,
  services,
  amortissements,
  immobilisations,
  besoinImmobilisations
};
