new Vue({
  el: '#app',
  data: {
    product: 'Point of Sales FA-5',
    list_items: [
        {
          name: 'Aqua',
          shortDesc: 500,
          stock: 10
        },
        {
          name: 'Coca Cola',
          shortDesc: 3500,
          stock: 5
        },
        {
          name: 'Coffee',
          shortDesc: 5000,
          stock: 8
        },
        {
          name: 'Pocari Sweat',
          shortDesc: 7500,
          stock: 7
        }
      ],
    list_belanja: []
  },
  methods: {
    
  },
  computed: {
    simplified: function () {
      let items = []
      let itemTemp = {}
      let jmlBelanjaan = this.list_belanja.reduce((prev, item) => {
        if (item in prev) prev[item]++
        else prev[item] = 1
        return prev
      }, {})
      return jmlBelanjaan
      // this.parsed = jmlBelanjaan
      // return this.parsed
    },
    daftarBarang () {
      let totalItem = 0
      let itemNames = Object.keys(this.simplified)
      for (let i = 0; i < itemNames.length; i++) {
        let name = itemNames[i]
        totalItem += this.simplified[name]
      }
      return totalItem      
      
    }
  }
})
