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
      let jmlBelanjaan = this.list_belanja.reduce((prev, item) => {
        if (item in prev) prev[item]++
        else prev[item] = 1
        return prev
      }, {})
      return jmlBelanjaan;
      // this.parsed = jmlBelanjaan
      // return this.parsed
    },
    daftarBarang () {
      return Object.getOwnPropertyNames(this.simplified)
    }
  }
})
