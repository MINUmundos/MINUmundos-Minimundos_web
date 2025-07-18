<template>
  <div class="home">
    <header>
      <h1>🌍 Welcome to My Fancy App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
      </nav>
    </header>

    <section class="hero">
      <h2>i dont see shit</h2>
      <p>Styled with your own CSS and ready to expand.</p>
    </section>
  </div>
</template>

<style scoped>
.home {
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  padding: 2rem;
}

header {
  background: #1e1e1e;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
}

nav {
  margin-top: 0.5rem;
}

nav a {
  color: #ffd700;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #ffffff;
}

.hero {
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
</style>
