
// var products = [
//   // {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100, stock: 30, date: new Date(), remark: 'ok'},
//   // {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100, stock: 30, date: new Date(), remark: 'ok'},
//   // {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100, stock: 30, date: new Date(), remark: 'ok'}
// ];
var products = []

function findProduct (productId) {
  return products[findProductKey(productId)];
};

function findProductKey (productId) {
  for (var key = 0; key < products.length; key++) {
    if (products[key].item == productId) {
      return key;
    }
  }
};

var List = Vue.extend({
  template: '#product-list',
  data: function () {
    return {products: products, searchKey: ''};
  },
  computed : {
    filteredProducts: function () {
    var self = this;
    console.log()
    return self.products.filter(function (product) {
      return product.name.indexOf(self.searchKey) !== -1
    })
  }
},
methods: {
  getItems: function () {
    let self = this
    axios.get('http://localhost:3000/api/inventories')
    .then(function (response) {
      self.products = response.data
    })
    .catch(err => {
      console.log(err);
    })
  }
},
created () {
  this.getItems()
}
});

var Product = Vue.extend({
  template: '#product',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  }
});

var ProductEdit = Vue.extend({
  template: '#product-edit',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    updateProduct: function () {
      var product = this.product;
      products[findProductKey(product.id)] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price
      };
      router.push('/');
    }
  }
});

var ProductDelete = Vue.extend({
  template: '#product-delete',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    deleteProduct: function () {
      products.splice(findProductKey(this.$route.params.product_id), 1);
      router.push('/');
    }
  }
});

var AddProduct = Vue.extend({
  template: '#add-product',
  data: function () {
    return {product: {name: '', description: '', price: '', stock: '', date: '', remark: ''}
    }
  },
  methods: {
    createProduct: function() {
      var product = this.product;
      products.push({
        id: Math.random().toString().split('.')[1],
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        date: product.datein,
        remark: product.remark
      });
      router.push('/');
    }
  }
});

var router = new VueRouter({
  routes: [{path: '/', component: List},
    {path: '/product/:product_id', component: Product, name: 'product'},
    {path: '/add-product', component: AddProduct},
    {path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'},
    {path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'}
]});

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
});
