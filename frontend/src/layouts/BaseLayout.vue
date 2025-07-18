<template>
  <div class="home">
    <header>
      <h1>MINIMUNDOS</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/ProductTest">ProductTest</router-link>
      </nav>
    </header>

    <main>
        <section class="hero">
            <slot /> <!-- All page content will be inside this section -->
        </section>
    </main>

    <footer>
      <p>&copy; 2025 My Fancy App</p>
    </footer>
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

.heroOriginal {
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.hero {
  background-image: url('/00_first_dictionary.png'); /* if from public/ */
  background-repeat: no-repeat;
  background-size: contain;  /* key part */
  background-position: top center;
  width: 100%;
  min-height: 100vh; /* or set a height based on image rati*/
}

.base-layout {
  font-family: 'Segoe UI', sans-serif;
  padding: 1rem;
}
header {
  background: #222;
  color: #fff;
  padding: 1rem;
}
nav a {
  color: #ffd700;
  text-decoration: none;
  margin: 0 1rem;
}
main {
  padding: 2rem;
}
</style>
