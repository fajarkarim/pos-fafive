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
  }
})
