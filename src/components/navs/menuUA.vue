<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <li>
        <router-link :to="{name: 'uniteadministrative'}" tag="a">
          <i class="icon-user"></i>
          Unites administratives
        </router-link>
      </li>
      <!--Source de financement-->
      <li class="dropdown" id="menu-messages">
        <a
          title="Documentation"
          href="#"
          data-toggle="dropdown"
          data-target="#menu-messages"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Documentation</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'typetext'}" tag="a">
              <i class="icon-user"></i>
              Type de texte
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'archivagedocument'}" tag="a">
              <i class="icon-key"></i>Archivage Document
            </router-link>
          </li>
        </ul>
      </li>
      <!--Paramètres programmes
      -->

      <li class="dropdown" id="listeua">
        <a
          title="Out put"
          href="#"
          data-toggle="dropdown"
          data-target="#listeua"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Out put</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'listeuniteadministrative'}" tag="a">
              <i class="icon-user"></i>
              Listes Unites Administratives
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'listetypetexte'}" tag="a">
              <i class="icon-user"></i>
              Listes Types Textes
            </router-link>
          </li>

          <li>
            <router-link :to="{name: 'ordonnedocua'}" tag="a">
              <i class="icon-user"></i>
              Listes Archivages Documents
            </router-link>
          </li>
        </ul>
      </li>
      <li class id="messages">
        <router-link :to="{name: ''}" tag="a">
          <i class="icon icon-user"></i>
          <span class="text">Indicateur</span>
        </router-link>
      </li>

      <li>
        <router-link :to="{name: 'tableaudebord'}" tag="a">
          <i class="icon-user"></i>
          Tableau de bord
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/*import Navbar from "./Navbar";
import Milieu from "./Milieu";
import Nfooter from "./Nfooter";*/

export default {};
</script>
