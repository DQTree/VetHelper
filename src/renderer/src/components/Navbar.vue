<template>
  <div class="cv-main-navbar">
    <div class="cv-main-navbar-item">
      <router-link to="/home" id="home">
        VetHelper!
      </router-link>
    </div>
    <dropdown-component label="Criar" :dropdown-items="criar.items" :dropdown-paths="criar.paths" />
    <div class="line"></div>
    <dropdown-component
      label="Consultar"
      :dropdown-items="consultar.items"
      :dropdown-paths="consultar.paths"
    />
    <div class="line"></div>
    <dropdown-component
      label="Ferramentas"
      :dropdown-items="ferramentas.items"
      :dropdown-paths="ferramentas.paths"
    />
    <div class="line"></div>
    <dropdown-component label="Mais" :dropdown-items="mais.items" :dropdown-paths="mais.paths" />
  </div>
</template>

<script>
import DropdownComponent from '../components/Dropdown.vue'

export default {
  components: {
    DropdownComponent
  },
  data() {
    return {
      criar: {
        items: ['Ficha', 'Consulta'],
        paths: ['/criarficha', '/criarconsulta']
      },
      consultar: {
        items: ['Ficha', 'Consultas', 'Vacinas', 'Cirurgias', 'Radiografias'],
        paths: [
          '/pesquisa/ficha',
          '/pesquisa/consultas',
          '/pesquisa/vacinas',
          '/pesquisa/cirurgias',
          '/pesquisa/radiografias'
        ]
      },
      ferramentas: {
        items: ['Cartas', 'Tabela', 'Stocks', 'Medicacao', 'Despesas', 'Atlas'],
        paths: [
          '/utilitarios/cartas',
          '/utilitarios/tabela',
          '/utilitarios/stocks',
          '/utilitarios/medicacao',
          '/utilitarios/despesas',
          '/utilitarios/atlas'
        ]
      },
      mais: {
        items: ['Configurar', 'Ajuda', 'Copiar'],
        paths: ['/configurar', '/ajuda', '/copiar']
      }
    }
  }
}
</script>
<style>
.cv-main-navbar {
  display: flex;
  width: 100%;
  height: 6vh;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  color: white;
}

.cv-main-navbar-item {
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  height: inherit;
  padding-left: 2vh;
  padding-right: 2vh;
  letter-spacing: 2px;
  transition: background-color 0.5s ease;
}

.cv-main-navbar-item:hover,
.cv-dropdown-item:hover {
  background-color: var(--main-shadow);
}

.line {
  content: '';
  width: 1px;
  height: 50%;
  background-color: #ffffff;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
}

#home {
  text-decoration: none;
  color: white;
}
</style>
