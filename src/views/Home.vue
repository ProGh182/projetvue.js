<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenue au Gourmet</h1>
        <p class="subtitle">Restaurant gastronomique français traditionnel</p>
        <p class="description">
          Découvrez nos meilleurs plats préparés avec passion par nos chefs expérimentés.
          Chaque dish est une invitation à un voyage culinaire à travers les saveurs de la France.
        </p>
      </div>
    </section>

    <section class="features">
      <div class="feature">
        <span class="feature-icon">*</span>
        <h3>Menu Varié</h3>
        <p>Sélection de plats traditionnels et modernes</p>
      </div>
      <div class="feature">
        <span class="feature-icon">*</span>
        <h3>Commande Rapide</h3>
        <p>Consultez vos commandes en temps réel</p>
      </div>
      <div class="feature">
        <span class="feature-icon">*</span>
        <h3>Qualité Premium</h3>
        <p>Ingrédients frais et préparation artisanale</p>
      </div>
    </section>

    <section class="cta">
      <h2>Consultez notre menu</h2>
      <router-link to="/menu" class="btn-primary">
        Voir le menu
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 8px;
  text-align: center;
}

.hero-content h1 {
  font-size: 42px;
  margin: 0 0 16px 0;
  font-weight: 700;
}

.subtitle {
  font-size: 20px;
  margin: 0 0 20px 0;
  opacity: 0.9;
}

.description {
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.95;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.feature {
  background-color: white;
  padding: 28px 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 12px;
}

.feature h3 {
  margin: 12px 0;
  color: #2c3e50;
  font-size: 18px;
}

.feature p {
  color: #7f8c8d;
  margin: 0;
  line-height: 1.5;
}

.cta {
  background-color: #ecf0f1;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}

.cta h2 {
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 28px;
}

.btn-primary {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 12px 32px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
