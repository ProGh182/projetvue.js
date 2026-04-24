<template>
  <div class="menu-page">
    <h1>Notre Menu</h1>
    <p class="menu-intro">Découvrez nos plats gourmands préparés avec soin</p>
    
    <div class="menu-grid">
      <Gourmet 
        v-for="dish in menu"
        :key="dish.id"
        :dish="dish"
        @festoyons="handleAddToCart"
      >
        <template v-if="dish.isNew" #default>
          <div class="special-badge">Plat à découvrir</div>
        </template>
      </Gourmet>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
import Gourmet from '../components/Gourmet.vue'
import { useMenuStore, useOrderStore } from '../stores/store.js'

export default {
  name: 'Menu',
  components: {
    Gourmet
  },
  setup() {
    const { menu } = useMenuStore()
    const { addToCart } = useOrderStore()
    const showNotification = inject('showNotification')

    const handleAddToCart = (dish) => {
      addToCart(dish)
      showNotification(`${dish.name} ajouté au panier!`)
    }

    return {
      menu,
      handleAddToCart
    }
  }
}
</script>

<style scoped>
.menu-page {
  width: 100%;
}

.menu-page h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 36px;
  margin: 0 0 8px 0;
}

.menu-intro {
  text-align: center;
  color: #7f8c8d;
  font-size: 16px;
  margin: 0 0 32px 0;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.special-badge {
  background-color: #f39c12;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
}
</style>
