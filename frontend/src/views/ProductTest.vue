<template>
  <div class="mini-mundos">
  <header class="site-header">
    <img :src="MINImundoslogo" alt="Mini Mundos Logo" class="logo" />
    <nav class="nav-links">
      <button @click="toggleLanguage">
        {{ language === 'de' ? '🇩🇪 Deutsch' : '🇪🇸 Español' }}
      </button>
      <a href="#books">Bücher</a>
      <a href="#about">Über Mini Mundos</a>
    </nav>
  </header>
    <!-- Top Icons Section -->
  <section class="hero">
    <div class="hero-text">
       <h1>{{ texts.heroHeadline[language] }}</h1>
       <p>{{ texts.heroParagraph[language] }}</p>
       <button class="cta-button">{{ texts.cta[language] }}</button>

    </div>
    <transition name="fade" mode="out-in">
      <img
        v-if="currentHeroImage"
        :src="currentHeroImage"
        :key="currentHeroImage"
        alt="Kinder mit Buch"
        class="hero-image"
      />
    </transition>
  </section>

  <!-- Books Section -->
  <section id="books" class="books">
    <h2>UNSERE BÜCHER</h2>
    <div class="book-list">
      <div class="book-card" v-for="book in books" :key="book.title">
        <img :src="book.img" :alt="book.title" />
        <h4>{{ book.title }}</h4>
        <p>{{ book.desc }}</p>
        <a :href="book.link">{{ book.cta }}</a>
      </div>
    </div>
  </section>

    <!-- About Section -->
    <section id="about" class="about">
       <div class="about-content">
         <!-- img :src="ajoloteicon" alt="Lisa Icon" class="about-image" /> -->
         <div class="about-text">
           <h2>Über Mini Mundus</h2>
           <p>Sprachen öffnen Welten – und genau das möchten wir mit Mini Mundos ermöglichen.
 Mini Mundos ist ein Herzensprojekt für Kinder, die mit zwei Sprachen aufwachsen – und für alle, die Sprachen lieben.</p>
           <p>Ob Wörterbuch, Bilderbuch oder Abenteuergeschichte: Unsere Inhalte fördern mit Spaß, Fantasie und Vielfalt das bilinguale Lernen.</p>
           <p>Was als kleine Idee für meine eigenen Kinder begann, ist heute eine bunte Sammlung aus zweisprachigen Büchern, Geschichten und Mitmachbüchern für kleine Weltentdecker.</p>
           <p>🌎 Unsere Bücher verbinden Sprache mit Fantasie, Bewegung und Kultur. </p>
           <p>Sie sind kindgerecht illustriert, klar strukturiert – und immer mit einem Augenzwinkern für neugierige kleine Entdecker gemacht.</p>
           <p>👩‍👧‍👦 Wer steckt dahinter?</p>
           <p>Ich bin Lisa – Sprachliebhaberin, Mama und Autorin. In unserer deutsch-mexikanischen Familie sind zwei Sprachen Alltag. Und genau das möchten wir weitergeben: Die Freude am Sprachenlernen von Anfang an.</p>
           <p>🧒 Mini Mundos Helden</p>
           <p>Ob auf einem fliegenden Buch oder mit einem magischen Stein – jedes Mini Mundos Buch bringt eigene kleine Held*innen mit, die Kinder zum Mitträumen und Mitlernen einla</p>
         </div>
       </div>
    </section>



<div class="footer-hover-area" @click="showFooter = !showFooter">
{{ showFooter ? '⬇️ Footer schließen' : '⬆️ Footer anzeigen' }}
  <transition name="slide-up">
    <footer v-if="showFooter" class="mega-footer">
      <div class="footer-content">
        <div class="footer-column">
          <h4>Mini Mundos Versprechen</h4>
          <p>Unsere Bücher laden Kinder dazu ein, mit Neugier, Fantasie und zwei Sprachen die Welt zu entdecken.</p>
        </div>

        <div class="footer-column">
          <h4>Kontakt</h4>
          <p><a href="#">Kontaktformular</a></p>
          <p>E-Mail: <strong>info@minimundos.de</strong></p>
          <p>Telefon/WhatsApp: <strong>+49 123 456789</strong></p>
          <p>Mo–Fr, 09:00–16:00 Uhr erreichbar</p>
        </div>

        <div class="footer-column">
          <h4>Informationen</h4>
          <p><a href="#">Über uns</a></p>
          <p><a href="#">FAQ</a></p>
          <p class="impressum-link" @click="showImpressum = true">Impressum</p>
          <p class="impressum-link" @click="dataProtection = true">dataProtection</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="social-icons">
          <a href="#"><img :src="diefrau" alt="Instagram" /></a>
          <a href="#"><img :src="diefrau" alt="Facebook" /></a>
          <a href="#"><img :src="diefrau" alt="TikTok" /></a>
        </div>
        <p>© 2025 Mini Mundos</p>
      </div>
    </footer>
  </transition>
</div>

  </div>

<!-- Modal -->
<transition name="fade">
  <div v-if="dataProtection" class="modal-backdrop" @click.self="dataProtection = false">
    <div class="modal">
      <button class="close-button" @click="dataProtection = false">✖</button>

      <h2>Datenschutzerklärung</h2>
      <p>

        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
        Beim Besuch dieser Website werden folgende Daten automatisch durch den Hosting-Provider erfasst und temporär gespeichert:
         – IP-Adresse
         – Datum und Uhrzeit des Zugriffs
         – aufgerufene Seite(n)
         – Browsertyp und Betriebssystem
      <br />

Diese Daten dienen ausschließlich der Sicherstellung des technischen Betriebs und der Sicherheit der Website und werden nicht mit anderen Datenquellen zusammengeführt.
Wir setzen keine Cookies ein und verwenden keine Tracking- oder Analyse-Tools.
Bei Nutzung des Kontaktformulars (sofern vorhanden) werden die von Ihnen eingegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht.
Verantwortlich für den Inhalt:
 Lisa [Nachname]
 [Adresse oder Postfach]
 E-Mail: [kontakt@mini-mundos.de o.ä.]
Diese Datenschutzerklärung wird regelmäßig aktualisiert.
 Stand: Juli 2025
        Lisa [Nachname]<br />
        Beispielstraße 123<br />
        12345 Berlin<br />
        Deutschland</p>

    </div>
  </div>
</transition>

<!-- Impressum Modal -->
<transition name="fade">
  <div v-if="showImpressum" class="modal-backdrop" @click.self="showImpressum = false">
    <div class="modal">
      <button class="close-button" @click="showImpressum = false">✖</button>
      <h2>Impressum</h2>
      <p><strong>Verantwortlich für den Inhalt:</strong><br />
        Lisa [Nachname]<br />
        Beispielstraße 123<br />
        12345 Berlin<br />
        Deutschland</p>

      <p><strong>Kontakt:</strong><br />
        E-Mail: info@minimundos.de</p>

      <p><strong>Haftungsausschluss:</strong><br />
        Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV: siehe oben.</p>

      <!-- Add more Impressum text as needed -->
    </div>
  </div>
</transition>

</template>

<script>

import book1 from '../assets/books/book1.jpg'
import book2 from '../assets/books/book2.jpg'
import ajoloteicon from '../assets/icons/ajoloteicon.png'
import diefrau from '../assets/images/Diefrau.png'
import MINImundoslogo from  '../assets/icons/MINIMundos_favicon.png'


export default {
  name: "MiniMundos",
  data() {
    return {
      books: [
        {
          title: "Mein erstes Deulsch - Spanisch Warterbüch",
          desc: "Lerne œstworte Worter und im Zöuernsprachen.",
          link: "#",
          cta: "Jetzt entdecken",
          img: book1,
        },
        {
          title: "Farben & Formen",
          desc: "Gejchichter Vokhdel & Lïeder œsstn",
          link: "#",
          cta: "Mehr erfahren",
           img: book2,
        },
        {
          title: "Zahlen & Buchstaben",
          desc: "Jätztisæen. Ze-hen-lehren zi Sexxssprachen",
          link: "#",
          cta: "Jetzt ertrahen",
           img: book1,
        },
        {
          title: "Tiere - Animales",
          desc: "Frömer mit-Leur-schiskren",
          link: "#",
          cta: "Jetzt ansehen",
           img: book2,
        },
        {
          title: "Taro, der kleine Axolotl",
          desc: "Ermxängsein Rerun spreleon",
          link: "#",
          cta: "Jetzt anmehern",
           img: book1,
        }
      ],
      diefrau,
      ajoloteicon,
      MINImundoslogo,
      showFooter: false,
      showImpressum: false,
      dataProtection: false,
      heroImages: [  
        diefrau,
        ajoloteicon
      ],
      currentHeroImageIndex: 0,
      language: 'de',
      texts: {
        heroHeadline: {
          de: "ZWEISPRACHIGE BÜCHER FÜR KLEINE WELTENTDECKER",
          es: "LIBROS BILINGÜES PARA PEQUEÑOS EXPLORADORES DEL MUNDO"
        },
        heroParagraph: {
          de: "Meine Geschichten laden Kinder dazu ein, noch mehr von der Welt zu entdecken – und dabei spielerisch zwei Sprachen zu lernen.",
          es: "Mis historias invitan a los niños a descubrir más del mundo y a aprender dos idiomas jugando."
        },
        cta: {
          de: "JETZT ENTDECKEN",
          es: "¡DESCUBRE AHORA!"
        }
        // add more as needed...
      }

    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleEsc);
const storedLang = localStorage.getItem('lang');
  if (storedLang) this.language = storedLang;

   this.heroInterval = setInterval(() => {
       this.currentHeroImageIndex =
         (this.currentHeroImageIndex + 1) % this.heroImages.length;
     }, 4000); // ⏱️ Change image every 4 seconds
    
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
    clearInterval(this.heroInterval);
  },
  methods: {
    toggleLanguage() {
        this.language = this.language === 'de' ? 'es' : 'de';
        localStorage.setItem('lang', this.language);
    },
    handleEsc(e) {
      if (e.key === 'Escape') {
        this.showImpressum = false;
        this.dataProtection = false;
      }
    }
  },
  computed: {
    currentHeroImage() {
      return this.heroImages[this.currentHeroImageIndex];
    }
  }




};
</script>

<style scoped>

.intro-highlights {
  display: flex;
  justify-content: space-around;
  text-align: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.highlight img {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.slogan {
  text-align: center;
  font-style: italic;
  color: #ff6600;
  margin-bottom: 2rem;
}

.books {
  text-align: center;
  margin-bottom: 3rem;
}

.book-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.book-card {
  width: 160px;
  background: #FFE9ED;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(255, 175, 163, 0.15);
}

.book-card img {
  width: 100%;
  border-radius: 8px;
}

.book-card a {
  display: block;
  margin-top: 0.5rem;
  color: #007b8f;
  text-decoration: none;
}

.extras {
  text-align: center;
  padding: 2rem 1rem;
  background-color: #FFE9ED;
  border-radius: 20px;
  margin: 2rem auto;
}

.btn-material {
  background-color: #5ac0aa;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;
}

.about {
  margin-top: 3rem;
  text-align: center;
}

.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.extras-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.extras-text {
  flex: 1;
  min-width: 250px;
}

.frau-image {
  width: 200px;
  height: auto;
  object-fit: contain;
}

.mini-mundos {
  font-family: sans-serif;
  padding: 2rem;
  background: linear-gradient(160deg, #FFE5B4, #FFD1DC);
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden; /* ✅ prevents side overflow */
}
.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap; /* Responsive for mobile */
  text-align: left;
}

.about-image {
  width: 120px;
  height: auto;
  object-fit: contain;
}

.about-text {
  max-width: 900px;
}
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  height: 100px;
}

.nav-links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #007b8f;
  font-weight: bold;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: bold;
}

.cta-button {
  background-color: #FFD400;
  color: black;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

.hero-image {
  width: 300px;
  height: auto;
}

.book-button {
  background-color: #FFD400;
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 0.9rem;
}

.instagram-icon {
  width: 20px;
  height: 20px;
}

section {
  scroll-margin-top: 80px; /* Höhe deines Headers */
}

.footer-hover-area {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  z-index: 99;
  background: rgba(255, 204, 0, 0.3); /* TEMPORARY yellowish */
  text-align: center;
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 30px;
}

.mega-footer {
  position: fixed;           /* 💡 This is key */
  bottom: 0px;              /* appears just above the trigger bar */
  left: 0;
  width: 100%;
  background-color: #e8e8e8;
  padding: 2rem;
  font-size: 0.9rem;
  color: #333;
  border-top: 1px solid #ccc;
  z-index: 98;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1rem;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-column h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
}

.footer-column p {
  margin: 0.3rem 0;
}

.footer-column a {
  text-decoration: none;
  color: #007b8f;
}

.footer-bottom {
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
}

.social-icons img {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
}

/* Animations */
/* This matches <transition name="slide-up"> */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.impressum-link {
  color: #007b8f;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 2rem;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Animation (optional) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
