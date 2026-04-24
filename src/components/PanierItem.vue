<template>
  <div class="panier-item">
    <div class="item-info">
      <span class="item-image">{{ item.image }}</span>
      <div class="item-details">
        <h4>{{ item.name }}</h4>
        <p class="item-price">{{ item.price.toFixed(2) }} € x {{ item.quantity }}</p>
      </div>
    </div>
    <div class="item-controls">
      <div class="quantity-control">
        <button @click="decreaseQuantity" class="btn-qty">-</button>
        <span class="qty-display">{{ item.quantity }}</span>
        <button @click="increaseQuantity" class="btn-qty">+</button>
      </div>
      <button @click="removeItem" class="btn-remove">Supprimer</button>
    </div>
    <div class="item-subtotal">
      {{ (item.price * item.quantity).toFixed(2) }} €
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanierItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['update-quantity', 'remove-item'],
  methods: {
    increaseQuantity() {
      this.$emit('update-quantity', this.item.id, this.item.quantity + 1)
    },
    decreaseQuantity() {
      if (this.item.quantity > 1) {
        this.$emit('update-quantity', this.item.id, this.item.quantity - 1)
      }
    },
    removeItem() {
      this.$emit('remove-item', this.item.id)
    }
  }
}
</script>

<style scoped>
.panier-item {
  background-color: white;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.item-info {
  display: flex;
  gap: 12px;
  flex: 1;
}

.item-image {
  font-size: 24px;
  min-width: 30px;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  margin: 0;
  color: #2c3e50;
  font-size: 14px;
}

.item-price {
  color: #7f8c8d;
  font-size: 13px;
  margin: 4px 0 0 0;
}

.item-controls {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0 16px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ecf0f1;
  border-radius: 4px;
  padding: 4px;
}

.btn-qty {
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: #3498db;
  color: white;
  border-radius: 2px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-qty:hover {
  background-color: #2980b9;
}

.qty-display {
  width: 20px;
  text-align: center;
  font-weight: 600;
}

.btn-remove {
  background-color: #e74c3c;
  color: white;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 4px;
}

.btn-remove:hover {
  background-color: #c0392b;
}

.item-subtotal {
  font-weight: 600;
  color: #27ae60;
  min-width: 60px;
  text-align: right;
}
</style>
