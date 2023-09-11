import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/Layout.vue'
import DailyView from '../views/Daily.vue'

import CriarFichaView from '../views/ficha/CriarFicha.vue'
import CriarConsultaView from '../views/consulta/CriarConsulta.vue'

import FichaPesquisaView from '../views/pesquisa/Ficha.vue'
import ConsultaPesquisaView from '../views/pesquisa/Consulta.vue'
import VacinasPesquisaView from '../views/pesquisa/Vacinas.vue'
import CirurgiasPesquisaView from '../views/pesquisa/Cirurgias.vue'
import RadiografiasPesquisaView from '../views/pesquisa/Radiografias.vue'

import CartasUtilsView from '../views/utilitarios/Cartas.vue'
import TabelaUtilsView from '../views/utilitarios/Tabela.vue'
import StocksUtilsView from '../views/utilitarios/Stock.vue'
import MedicacaoUtilsView from '../views/utilitarios/Medicacao.vue'
import DespesasUtilsView from '../views/utilitarios/Despesas.vue'
import AtlasUtilsView from '../views/utilitarios/Atlas.vue'

import ConfigurarView from '../views/misc/Configurar.vue'
import CopiarView from '../views/misc/Copiar.vue'
import AjudaView from '../views/misc/Ajuda.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: '/home',
          name: 'home',
          component: DailyView
        },
        {
          path: '/criarficha',
          name: 'criarficha',
          component: CriarFichaView
        },
        {
          path: '/criarconsulta',
          name: 'criarconsulta',
          component: CriarConsultaView
        },
        {
          path: '/pesquisa',
          children: [
            {
              path: 'ficha',
              component: FichaPesquisaView
            },
            {
              path: 'consultas',
              component: ConsultaPesquisaView
            },
            {
              path: 'vacinas',
              component: VacinasPesquisaView
            },
            {
              path: 'cirurgias',
              component: CirurgiasPesquisaView
            },
            {
              path: 'radiografias',
              component: RadiografiasPesquisaView
            }
          ]
        },
        {
          path: '/utilitarios',
          children: [
            {
              path: 'cartas',
              component: CartasUtilsView
            },
            {
              path: 'tabela',
              component: TabelaUtilsView
            },
            {
              path: 'stocks',
              component: StocksUtilsView
            },
            {
              path: 'medicacao',
              component: MedicacaoUtilsView
            },
            {
              path: 'despesas',
              component: DespesasUtilsView
            },
            {
              path: 'atlas',
              component: AtlasUtilsView
            }
          ]
        },
        {
          path: '/configurar',
          name: 'configurar',
          component: ConfigurarView
        },
        {
          path: '/ajuda',
          name: 'ajuda',
          component: AjudaView
        },
        {
          path: '/copiar',
          name: 'copiar',
          component: CopiarView
        }
      ]
    }
  ]
})

export default router
