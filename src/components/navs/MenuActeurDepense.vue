<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <li class="dropdown" id="profile-messages">
        <a
          title="Parametres"
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Paramètres</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'TypeActePersonnels'}" tag="a">
              <i class="icon-user"></i>
              Type d'acte
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Fonction'}" tag="a">
              <i class="icon-check"></i>
              Fonction
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Classe'}" tag="a">
              <i class="icon-key"></i> Classe
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Echelons'}" tag="a">
              <i class="icon-check"></i>
              Echelons
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Grades'}" tag="a">
              <i class="icon-key"></i> Grades
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'NiveauEtude'}" tag="a">
              <i class="icon-check"></i>
              Niveau d'étude
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeSalarie'}" tag="a">
              <i class="icon-key"></i> Type de salarié
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeContrat'}" tag="a">
              <i class="icon-key"></i> Type de contrat
            </router-link>
          </li>
        </ul>
      </li>
      <!--Source de financement  -->
      <li class="dropdown" id="depense">
        <a
          title="Acteur de la depense"
          href="#"
          data-toggle="dropdown"
          data-target="#depense"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Acteurs de la dépense</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'Acteur'}" tag="a">
              <i class="icon-user"></i>
              Acteurs
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Acte de personnel
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Conge'}" tag="a">
              <i class="icon-key"></i> Suivi des congés
            </router-link>
          </li>
        </ul>
      </li>
      <!--Paramètres programmes
      -->
      <li class id="messages">
        <a title="Out put" href="#" class>
          <i class="icon icon-users"></i>
          <span class="text">Out put</span>
        </a>
      </li>

      <!--Tableau de bord acteur de depense-->
      <li class="dropdown" id="tableau">
        <router-link :to="{name: 'TableauBordActeurDepense'}" tag="a">
          <i class="icon icon-user"></i>
          <span class="text">Tableau de bord</span>
          <b class="caret"></b>
        </router-link>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Tableau de bord
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
/*import Navbar from "./Navbar";
import Milieu from "./Milieu";
import Nfooter from "./Nfooter";*/

export default {
  /* components: {
    Navbar,
    Milieu,
    Nfooter
  },*/
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
