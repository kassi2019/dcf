<template>
  
                  <tr class="odd gradeX" v-if="uniteadministrative" @dblclick="$emit('modification', uniteadministrative)">
                    <td
                    
                    >{{uniteadministrative.chpitr.libelle || 'Non renseigné'}}</td>
                    <td
                    
                    >{{uniteadministrative.code || 'Non renseigné'}}</td>
 <td
                    
                    >{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                     <td
                    
                    >{{ formaterDate(uniteadministrative.date_creation) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click.prevent="$emit('suppression', uniteadministrative.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>

  
</template>

<script>


export default {
    name: 'uniteadministrativeItem',
     props: {
    uniteadministrative: Object,
  },
 

  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
        
      }
    },
     show(){
        return this.isOver = true
    },

    kit(){
        return this.isOver = false
 
    },
    br: function (){
    this.$emit('make-br', this.uniteadministrative.children)
  
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-modification', this.uniteadministrative)
        this.isOpen = true
      }
    },

    //    makeFor: function () {
    //   	this.$emit('create-children', this.article)
      
    // }
  }
}
</script>
<style>

.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>

