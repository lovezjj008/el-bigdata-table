import ElementUi, {
  Table
} from 'element-ui'

import Mousewheel from 'element-ui/src/directives/mousewheel'

import VirtualTableBodyRender from './virtual-table-body-render.js'

const ElTableBody = Table.components.TableBody
const ElementUiVersion = +ElementUi.version.split('.').slice(0, 2).join('.')

Table.components.TableBody = {
  ...ElTableBody,
  directives: {
    Mousewheel
  },
  computed: {
    ...ElTableBody.computed,
    data () {
      const { table } = this

      if (table.isUseVirtual) {
        return table.data.slice(table.start, table.end)
      } else {
        return ElTableBody.computed.data.call(this)
      }
    }
  },
  watch: {
    ...ElTableBody.watch,
    'store.states.hoverRow' (newVal, oldVal) {
      if (!this.table.isUseVirtual) {
        ElTableBody.watch && ElTableBody.watch['store.states.hoverRow'] && ElTableBody.watch['store.states.hoverRow'].call(this, newVal, oldVal)
      }
    }
  },
  methods: {
    ...ElTableBody.methods,
    getRowClass (row, rowIndex) {
      let classes = ElTableBody.methods.getRowClass.call(this, row, rowIndex)

      if (ElementUiVersion >= 2.8 && this.table.isUseVirtual && rowIndex === this.store.states.hoverRow) {
        classes.push('hover-row')
      }

      return classes
    },
    getIndex (index) {
      return this.table.start + index;
    }
  },
  render (...arg) {
    if (this.table.isUseVirtual) {
      return VirtualTableBodyRender.call(this, ...arg)
    } else {
      return ElTableBody.render.call(this, ...arg)
    }
  }
}
