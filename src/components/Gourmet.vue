<template>
  <div class="gourmet-item">
    <div class="dish-header">
      <span class="dish-image">{{ dish.image }}</span>
      <div class="dish-info">
        <h3>{{ dish.name }}</h3>
        <span v-if="dish.isNew" class="badge-new">Nouveau</span>
      </div>
    </div>
    <p class="dish-description">{{ dish.description }}</p>
    <div class="dish-footer">
      <span class="price">{{ dish.price.toFixed(2) }} €</span>
      <button 
        @click="emitAddToCart"
        class="btn-add"
      >
        Ajouter au panier
      </button>
    </div>
    <div v-if="$slots.default" class="victuaille" id="victuaille">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gourmet',
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  emits: ['festoyons'],
  methods: {
    emitAddToCart() {
      this.$emit('festoyons', this.dish)
    }
  }
}
</script>

<style scoped>
.gourmet-item {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.gourmet-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.dish-header {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: flex-start;
}

.dish-image {
  font-size: 32px;
  min-width: 40px;
}

.dish-info {
  flex: 1;
}

.dish-info h3 {
  margin: 0;
  font-size: 16px;
  color: #2c3e50;
}

.badge-new {
  display: inline-block;
  background-color: #e74c3c;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-top: 4px;
}

.dish-description {
  color: #7f8c8d;
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.4;
}

.dish-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.price {
  font-size: 18px;
  font-weight: 600;
  color: #27ae60;
}

.btn-add {
  background-color: #3498db;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn-add:hover {
  background-color: #2980b9;
}

.victuaille {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #ecf0f1;
}
</style>
