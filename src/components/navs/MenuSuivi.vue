<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="excution">
        <a
          title="Execution marchés-contrat"
          href="#"
          data-toggle="dropdown"
          data-target="#excution"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Excution m.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li></li>
          <li class="divider"></li>
          <li></li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi des obligations sociales
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Marchés & Contrats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Avenants
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> suivi du respects des delais contratuels
            </a>
          </li>
        </ul>
      </li>
      <!--Excution budgetaire-->
      <li class="dropdown" id="plant">
        <a
          title="Excution budgetaire"
          href="#"
          data-toggle="dropdown"
          data-target="#plant"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Excution b.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Suivi des engagements
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi des mandats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Documentation engagement-mandats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>
              Op hors SIGFIP provisoires
            </a>
          </li>

          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Op hors SIGFIP définitifs
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>
              Document op hors SIGFIP
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Suivi des rejets et des différés
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>
              Suivi du délai de traitement des dossiers
            </a>
          </li>
        </ul>
      </li>
      <!-- document
      -->
      <li class="dropdown" id="mission">
        <a
          title="Suivi des missions"
          href="#"
          data-toggle="dropdown"
          data-target="#mission"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Suivi m.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i>
              Catégories de missions
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Missions
            </a>
          </li>
        </ul>
      </li>

      <!-- Activite
      -->
      <li class="dropdown" id="tableau">
        <a
          title="Suivi des immobilisations"
          href="#"
          data-toggle="dropdown"
          data-target="#tableau"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Suivi I.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name:'listeEquipement'}" tag="a">
              <i class="icon-key"></i>
              <span class="text">Types équipements</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'famille'}" tag="a">
              <i class="icon-key"></i>
              <span class="text">Articles</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'service'}" tag="a">
              <i class="icon-key"></i>
              <span class="text">Services</span>
            </router-link>
          </li>

          <li title="Bessoin Immobilisation">
            <router-link :to="{name:'besionImmolisation'}" tag="a">
              <i class="icon-key"></i>
              <span class="text">Demande d'équipement</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'immobilisation'}" tag="a">
              <i class="icon-key"></i>
              <span class="text">Immobilisations</span>
            </router-link>
          </li>

           <li>
            <router-link :to="{name:'simulationAmortissement'}" tag="a">
              <i class="icon-table"></i>
              <span class="text">Simulateur Amortissement</span>
            </router-link>
          </li>

          <!-- <li>
            <router-link :to="{name:'amortissement'}" tag="a">
              <i class="icon-key"></i>
              <span class="text">Amortissements</span>
            </router-link>
          </li>-->
          <!-- <li>
            <router-link :to="{name:'Amortissement2'}" tag="a">
              <i class="icon-key"></i>
              <span class="text">Amortissements</span>
            </router-link>
          </li>-->
        </ul>
      </li>

      <!-- out put
      -->

      <li class="dropdown" id="bord1">
        <a
          title="Out Put"
          href="#"
          data-toggle="dropdown"
          data-target="#bord1"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Out Put</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
        
          <!-- <li>
            <router-link :to="{name:'listeBesoinParUniteAdmin'}" tag="a" title>
              <i class="icon-key"></i>
              <span class="text">Besoin Par Unite d'administrative</span>
            </router-link>
          </li> -->
         
          <li>
            <router-link :to="{name:'listeImmobilisationParUa'}" tag="a" title>
              <i class="icon-key"></i>
              <span class="text">Recherche Immobilisation</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'listeStructureMoinEquipe'}" tag="a" title>
              <i class="icon-key"></i>
              <span class="text">Structure Moin équipé</span>
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'listeStructurePlusEquipe'}" tag="a" title>
              <i class="icon-key"></i>
              <span class="text">Structure Plus équipé</span>
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'listeActeurEquipe'}" tag="a" title>
              <i class="icon-key"></i>
              <span class="text">Acteur équipé</span>
            </router-link>
          </li>
        </ul>
      </li>

      
      <!-- indicateur
      -->

      <!-- Généraux
      -->

      <li>
        <router-link
              :to="{name:'TableauBordImmo'}"
              tag="a"
              title="Tableau de Bord Immobilisation"
            >
          <i class="icon icon-user"></i>
          <span class="text">Tableau de Bord</span>
          
        </router-link>
        <!-- <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link
              :to="{name:'TableauBordImmo'}"
              tag="a"
              title="Tableau de Bord Immobilisation"
            >
              <i class="icon-key"></i>
              <span class="text">Immobilisation</span>
            </router-link>
          </li>
        </ul> -->
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
};
</script>
