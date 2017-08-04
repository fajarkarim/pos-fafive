Vue.component('item-data', {
  props: ['name', 'short-desc', 'total', 'idx'],
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">{{ name }}</div>
    <div class="panel-body">
      <strong>Price: </strong> {{ shortDesc }} <br>
      <strong>Stock: </strong> {{ total }}
    </div>
    <div class="panel-footer">
      <button type="btn" class="btn btn-xs btn-success" @click="addToCart"><span class="glyphicon glyphicon-shopping-cart"></span> Add to Cart</button>
    </div>
  </div>`,
  methods: {
    addToCart () {
      console.log(this.idx)
      this.$emit('add', this.idx)
    }
  }
})

Vue.component('app-container', {
  props: ['msgChild', 'items', 'total'],
  template: `
  <div class="col-md-6">
    <h1>{{ msgChild }}</h1>
    <item-data
    v-for="(item, index) in items" 
    :name="index+1 + '. ' + item.name" 
    :short-desc="item.shortDesc"
    :total="item.stock" 
    :idx="index"
    :key="index"
    @add="masukKeranjang">
    </item-data>
  </div>`,
  methods: {
    masukKeranjang (idx) {
      console.log(idx);
      this.items.splice(idx, 1)
    },
    created(){
      console.log(total);
    }
  }
})
