<template>
  <div class="cv-main-container" id="main">
    <div class="cv-main-body">
      <div class="cv-main-top">
        <fieldset class="cv-container">
          <legend>Criar</legend>
          <ButtonComponent link="/criarficha" tit="ficha" bttnlabel="Ficha"></ButtonComponent>
          <ButtonComponent link="/criarconsulta" bttnlabel="Consulta"></ButtonComponent>
        </fieldset>
      </div>
      <div class="cv-main-bottom">
        <div class="cv-main">
          <fieldset div class="cv-container">
            <legend>Pesquisa</legend>
            <ButtonComponent
              link="/pesquisa/ficha"
              tit="fichas"
              bttnlabel="Fichas"
            ></ButtonComponent>
            <ButtonComponent
              link="/pesquisa/consultas"
              tit="consultas"
              bttnlabel="Consultas"
            ></ButtonComponent>
            <ButtonComponent
              link="/pesquisa/vacinas"
              tit="vacinas"
              bttnlabel="Vacinas"
            ></ButtonComponent>
            <ButtonComponent
              link="/pesquisa/cirurgias"
              tit="cirurgias"
              bttnlabel="Cirurgias"
            ></ButtonComponent>
            <ButtonComponent
              link="/pesquisa/radiografias"
              tit="radiografias"
              bttnlabel="Radioagrafias"
            ></ButtonComponent>
          </fieldset>
          <div class="cv-container">
            <div class="cv-button">
              <button type="button" onclick="" title="Terminar">Terminar</button>
            </div>
            <ButtonComponent link="/ajuda" tit="ajuda" bttnlabel="Ajuda"></ButtonComponent>
          </div>
        </div>
        <div class="cv-main">
          <fieldset class="cv-container">
            <legend>Utilitarios</legend>
            <ButtonComponent
              link="/utilitarios/cartas"
              tit="cartas"
              bttnlabel="Cartas"
            ></ButtonComponent>
            <ButtonComponent
              link="/utilitarios/tabela"
              tit="tabela"
              bttnlabel="Tabela"
            ></ButtonComponent>
            <ButtonComponent
              link="/utilitarios/stocks"
              tit="stock"
              bttnlabel="Stock"
            ></ButtonComponent>
            <ButtonComponent
              link="/utilitarios/medicacao"
              tit="medicacao"
              bttnlabel="Medicacao"
            ></ButtonComponent>
            <ButtonComponent
              link="/utilitarios/despesas"
              tit="despesas"
              bttnlabel="Despesas"
            ></ButtonComponent>
            <ButtonComponent
              link="/utilitarios/atlas"
              tit="atlas"
              bttnlabel="Atlas"
            ></ButtonComponent>
          </fieldset>
          <div class="cv-container">
            <ButtonComponent
              link="/configurar"
              tit="configurar"
              bttnlabel="Configurar"
            ></ButtonComponent>
            <ButtonComponent link="/copiar" tit="copiar" bttnlabel="Copiar base"></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../components/Button.vue'

export default {
  components: {
    ButtonComponent
  }
}
</script>
