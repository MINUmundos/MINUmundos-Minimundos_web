<template>
  <div class="mini-mundos">
  <header class="site-header">
    <img :src="MINImundoslogo2" alt="Mini Mundos Logo" class="logo" />
  <!-- Hamburger Button -->
  <button class="hamburger" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
    <span class="line" :class="{ open: menuOpen }"></span>
    <span class="line" :class="{ open: menuOpen }"></span>
    <span class="line" :class="{ open: menuOpen }"></span>
  </button>

  <!-- Navigation -->
  <nav :class="['nav-links', { open: menuOpen }]">
    <button @click="handleLanguageToggle">
      {{ language === 'de' ? '🇩🇪 Deutsch' : '🇪🇸 Español' }}
    </button>
    <a href="#books" @click="menuOpen = false">{{ texts.headerLinkBook[language] }}</a>
    <a href="#about" @click="menuOpen = false">{{ texts.headerLinkAbout[language] }}</a>
    <a href="#why" @click="menuOpen = false">{{ texts.headerLinksWhy[language] }}</a>
  </nav>

  <!-- Dark backdrop -->
  <div class="menu-overlay" v-if="menuOpen" @click="menuOpen = false"></div>
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
    <h2>{{ texts.books[language] }}</h2>

    <div class="book-list">
      <div class="book-card" v-for="book in books" :key="book.title">
        <img :src="book.img" :alt="book.title" />
        <h4>{{ book.title[language] }}</h4>
        <p>{{ book.desc[language] }}</p>
        <a :href="book.link">{{ book.cta[language] }}</a>
      </div>
    </div>
  </section>

    <!-- Why Section -->
    <section id="why" class="about">
       <div class="about-content">
         <!-- img :src="ajoloteicon" alt="Lisa Icon" class="about-image" /> -->
         <div class="about-text">
                <div class="about-text">
                  <component
                    v-for="(block, i) in texts.whyParagraph[language]"
                    :is="block.type"
                    :key="i"
                    v-html="block.content"
                  />
                </div>
         </div>
       </div>
    </section>


    <!-- About Section -->
    <section id="about" class="about">
       <div class="about-content">
         <!-- img :src="ajoloteicon" alt="Lisa Icon" class="about-image" /> -->
         <div class="about-text">
                <div class="about-text">
                  <component
                    v-for="(block, i) in texts.aboutParagraph[language]"
                    :is="block.type"
                    :key="i"
                    v-html="block.content"
                  />
                </div>
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

import ajoloteicon from '../assets/icons/ajoloteicon.png'
import diefrau from '../assets/images/Diefrau.png'
import MINImundoslogo from  '../assets/icons/MINIMundos_favicon.png'
import MINImundoslogo2 from  '../assets/icons/MINIMUNDOS_LOGO.png'
import BuschtabenZahlen from  '../assets/images/BuschtabenZahlen.svg'
import FarbenUndForm from  '../assets/images/FarbenUndForm.svg'
import Taro from  '../assets/images/Taro.svg'
import Tierbuch from  '../assets/images/Tierbuch.svg'
import Wortenbuch from  '../assets/images/Wortenbuch.svg'

export default {
  name: "MiniMundos",
  data() {
    return {
      books: [
        {
          title:{  de: "Lerne œstworte Worter und im Zöuernsprachen.", es: "Mi primer diccionario en alemán y español"},
          desc: {  de: "Lerne œstworte Worter und im Zöuernsprachen.", es: "LIBROS BILINGÜES PARA PEQUEÑOS EXPLORADORES DEL MUNDO"},
          link: "#",
          cta:{ de: "Jetzt entdecken", es: "DESCUBRE AHORA"},
          img: Wortenbuch,
        },
        {
          title:{  de: "Mein erstes Deutsch - Spanisch Farben - und Formenbuch", es: "Mi primer libro de colores y formas en alemán y español"},
          desc: {  de: "Lerne œstworte Worter und im Zöuernsprachen.", es: "LIBROS BILINGÜES PARA PEQUEÑOS EXPLORADORES DEL MUNDO"},
          link: "#",
          cta:{ de: "Jetzt entdecken", es: "DESCUBRE AHORA"},
           img: FarbenUndForm,
        },
        {
          title: { de: "Mein erstes Deutsch - Spanisch Buchstaben-  und Zahlenbuch", es: "Mi primer libro de letras y números en alemán y español"},
          desc:  { de: "Mein erstes Deutsch - Spanisch Buchstaben-  und Zahlenbuch", es: "Mi primer libro de letras y números en alemán y español"},
          link: "#",
          cta:{ de: "Jetzt entdecken", es: "¡DESCUBRE AHORA!"},
           img: BuschtabenZahlen,
        },
        {
          title: { de: "Mein erstes Deutsch - Spanisch Tierbuch", es: "Mi primer libro de los animales en alemán y español"},
          desc:  { de: "Mein erstes Deutsch - Spanisch Tierbuch", es: "Mi primer libro de los animales en alemán y español"},
          link: "#",
          cta:{ de: "Jetzt entdecken", es: "¡DESCUBRE AHORA!"},
           img: Tierbuch,
        },
        {
          title: { de: "Taro - Hüter des blauen Steins", es: "Taro - guardián de la piedra azul"},
          desc:  { de: "Taro - Hüter des blauen Steins", es: "Taro - guardián de la piedra azul"},
          link: "#",
          cta:{ de: "Jetzt entdecken", es: "¡DESCUBRE AHORA!"},
           img: Taro,
        }
      ],
      diefrau,
      ajoloteicon,
      MINImundoslogo,
      MINImundoslogo2,
      showFooter: false,
      showImpressum: false,
      dataProtection: false,
      menuOpen: false,
      heroImages: [  
        BuschtabenZahlen,
        FarbenUndForm,
        Taro,
        Tierbuch,
        Wortenbuch
      ],
      currentHeroImageIndex: 0,
      language: 'de',
      texts: {
        books: {
          de: "UNSERE BÜCHER",
          es: "NUESTROS LIBROS"
        },
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
        },
        headerLinkBook: {
          de: "Bücher",
          es: "Libros"
        },
        headerLinkAbout: {
          de: "Über Mini Mundos",
          es: "Sobre Mini Mundos"
        },
        headerLinksWhy: {
          de: "Warum zwei sprache",
          es: "Por que Bilingual"
        },
        aboutParagraph: {
          de: [
                { type: "h2", content: "💛 Über MINI MUNDOS"},
                { type: "p", content: "Sprachen öffnen Welten – und genau das möchten wir mit MINI MUNDOS ermöglichen."},
                { type: "p", content: "MINI MUNDOS ist ein Herzensprojekt für Kinder, die mit zwei Sprachen aufwachsen – und für alle, die Sprachen lieben."},
                { type: "p", content: "Ob Wörterbuch, Bilderbuch oder Abenteuergeschichte: Unsere Inhalte fördern mit Spaß, Fantasie und Vielfalt das bilinguale Lernen."},
                { type: "p", content: "Was als kleine Idee für meine eigenen Kinder begann, ist heute eine bunte Sammlung aus zweisprachigen Büchern, Geschichten und Mitmachbüchern für kleine Weltentdecker."},
                { type: "p", content: "🌎 Unsere Bücher verbinden Sprache mit Fantasie, spielerischen Aktivitäten und kulturellen Elementen."},
                { type: "p", content: "Sie sind kindgerecht illustriert, klar strukturiert – und immer mit einem Augenzwinkern für neugierige kleine Entdecker gemacht."},
                { type: "h1", content: "👩‍👧‍👦 Wer steckt dahinter?"},
                { type: "p", content: "Ich bin Lisa – Sprachliebhaberin, Mama und Autorin. In unserer deutsch-mexikanischen Familie sind zwei Sprachen Alltag. Und genau das möchten wir weitergeben: Die Freude am Sprachenlernen von Anfang an."},
                { type: "h1", content: "🧒 MINI MUNDOS Helden"},
                { type: "p", content: "Ob auf einem fliegenden Buch oder mit einem magischen Stein – jedes MINI MUNDOS Buch bringt eigene kleine Held*innen mit, die Kinder zum Mitträumen und Mitlernen einladen."}
              ],
          es: [
                { type: "h1", content: "💛 Sobre MINI MUNDOS"},
                { type: "p", content: "Los idiomas abren mundos – y eso es exactamente lo que queremos lograr con MINI MUNDOS."},
                { type: "p", content: "MINI MUNDOS es un proyecto hecho con el corazón para niños que crecen con dos idiomas – y para todos los que aman las lenguas."},
                { type: "p", content: "Ya sea un diccionario ilustrado, un cuento o una historia de aventuras: nuestros contenidos fomentan el aprendizaje bilingüe con diversión, imaginación y mucha variedad."},
                { type: "p", content: "Lo que comenzó como una pequeña idea para mis propios hijos, hoy es una colorida colección de libros bilingües, cuentos e historias interactivas para pequeños exploradores del lenguaje."},
                { type: "p", content: "🌎 Nuestros libros unen el idioma con la fantasía, actividades divertidas y elementos culturales. Están ilustrados con ternura, estructurados de forma clara – y siempre pensados para despertar la curiosidad de los pequeños."},
                { type: "h1", content: "👩‍👧‍👦 ¿Quién está detrás?"},
                { type: "p", content: "Soy Lisa – amante de los idiomas, mamá y autora. En nuestra familia alemana-mexicana convivimos con dos lenguas cada día. Y eso es lo que queremos compartir: la alegría de aprender idiomas desde el principio."},
                { type: "h1", content: "🧒 Héroes MINI MUNDOS"},
                { type: "p", content: "Ya sea viajando en un libro volador o con la ayuda de una piedra mágica – cada libro MINI MUNDOS trae consigo pequeños héroes que invitan a soñar, descubrir y aprender juntos."}
              ]
        },
        whyParagraph: {
          de: [
                { type: "h2", content: "🌍 Warum Mehrsprachigkeit?"},
                { type: "h1", content: "Warum mehrsprachig aufwachsen ein Geschenk ist"},
                { type: "p", content: "Sprache ist mehr als Worte – sie ist ein Schlüssel zur Welt."},
                { type: "p", content: "Immer mehr Kinder wachsen heute mit mehr als einer Sprache auf. Ob durch Familie, Freundeskreis oder Alltag – Mehrsprachigkeit wird zur wertvollen Ressource."},
                { type: "p", content: "Sie lernen, die Welt aus verschiedenen Perspektiven zu sehen, flexibel zu denken – und sich mit Menschen aus unterschiedlichen Kulturen zu verbinden."},
                { type: "p", content: "Doch damit Sprachen lebendig bleiben, brauchen Kinder Bücher, Geschichten und Impulse, die ihre Welt widerspiegeln."},
                { type: "h1", content: "Genau hier setzt MINI MUNDOS an."},
                { type: "p", content: "Unsere Bücher verbinden Deutsch und Spanisch auf spielerische Weise – mit liebevollen Illustrationen, einfachen Begriffen und kindgerechten Szenen. So erleben Kinder beides gleichzeitig: Vertrautes und Neues. Ihre Familiensprache – und die Sprache ihrer Umgebung."},
                { type: "h1", content: "💬 Warum zweisprachige Bücher?"},
                { type: "h1", content: "📖 Sprachförderung im Alltag"},
                { type: "p", content: " Bilinguale Bücher helfen Kindern, Vokabeln in beiden Sprachen zu entdecken – ohne Druck, sondern im Spiel."},
                { type: "h1", content: "👶 Identität stärken"},
                { type: "p", content: " Wenn Kinder ihre Sprache in Büchern wiederfinden, fühlen sie sich gesehen und verstanden."},
                { type: "h1", content: "🌈 Kulturelle Brücken bauen"},
                { type: "p", content: "Mini Mundos vereint Elemente aus unterschiedlichen Kulturen – und schafft so einen Raum, in dem Vielfalt selbstverständlich ist."},
                { type: "h1", content: "🤝 Eltern aktiv einbinden"},
                { type: "p", content: " Ob Mama auf Deutsch und Papa auf Spanisch vorliest – oder umgekehrt: Unsere Bücher machen gemeinsame Sprachzeit natürlich und schön."},
                { type: "h1", content: "🧒 Für wen ist MINI MUNDOS gedacht?"},
                { type: "p", content: "Für alle Familien, die…"},
                { type: "p", content: "…mit zwei oder mehr Sprachen leben"},
                { type: "p", content: "mit Freude und Fantasie fördern wollen"},
                { type: "p", content: "Bücher suchen, die nicht nur übersetzen – sondern verbinden"},
                { type: "p", content: " … und für alle, die neugierig auf Sprache und Kultur sind."},
                { type: "p", content: "✨ Mehrsprachigkeit ist kein Hindernis, sondern ein Schatz. Und jedes Kind verdient es, diesen Schatz zu entdecken."}
              ],
          es: [
                { type: "h1", content: "¿Bilingüismo, por qué?"},
                { type: "h1", content: "🌍 Por qué crecer con varios idiomas es un regalo"},
                { type: "p", content: "El lenguaje es más que palabras – es una llave que abre el mundo."},
                { type: "p", content: "Cada vez más niños crecen con más de un idioma. Ya sea por la familia, los amigos o el entorno – el bilingüismo se convierte en un recurso valioso."},
                { type: "p", content: "Aprenden a ver el mundo desde distintas perspectivas, a pensar con flexibilidad y a conectar con personas de diferentes culturas."},
                { type: "p", content: "Pero para que los idiomas estén vivos, los niños necesitan libros, historias e impulsos que reflejen su mundo."},
                { type: "p", content: "Ahí es donde entra MINI MUNDOS."},
                { type: "p", content: "Nuestros libros combinan el alemán y el español de forma lúdica – con ilustraciones amorosas, palabras sencillas y escenas cotidianas para niños."},
                { type: "p", content: "Así los pequeños experimentan lo familiar y lo nuevo al mismo tiempo: su idioma familiar y el idioma del entorno"},
                { type: "h1", content: "💬 ¿Por qué libros bilingües?"},
                { type: "p", content: "📖 Fomento del lenguaje en el día a día"},
                { type: "p", content: "Los libros bilingües ayudan a ampliar el vocabulario de forma natural y divertida."},
                { type: "h1", content: "👶 Fortalecer la identidad"},
                { type: "p", content: "Cuando los niños ven su idioma reflejado en los libros, se sienten reconocidos y comprendidos."},
                { type: "h1", content: "🌈 Tender puentes culturales"},
                { type: "p", content: "MINI MUNDOS une elementos de distintas culturas y crea un espacio donde la diversidad es parte del día a día."},
                { type: "h1", content: "🤝 Involucrar a los padres"},
                { type: "p", content: " Ya sea que mamá lea en alemán y papá en español – o al revés: nuestros libros hacen que el tiempo de lectura bilingüe sea especial y accesible."},
                { type: "h1", content: "🧒 ¿Para quién es Mini Mundos?"},
                { type: "p", content: "Para todas las familias que…"},
                { type: "p", content: "viven con dos o más idiomas"},
                { type: "p", content: "quieren fomentar el aprendizaje con alegría y fantasía"},
                { type: "p", content: "buscan libros que no solo traduzcan, sino que conecten"},
                { type: "p", content: "… y para todos los que tienen curiosidad por los idiomas y las culturas."},
                { type: "p", content: "✨ El bilingüismo no es una barrera, sino un tesoro. Y cada niño merece descubrirlo."}
              ]
        },
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
    }, 4000);
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
  handleLanguageToggle() {
    this.toggleLanguage();
    //this.$nextTick(() => {this.menuOpen = false;});
  },
    handleEsc(e) {
      if (e.key === 'Escape') {
        this.showImpressum = false;
        this.dataProtection = false;
        this.menuOpen = false;
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
.about-text h2 {
  font-size: 1.8rem;
  margin-top: 2rem;
}
.about-text h3 {
  font-size: 1.4rem;
  margin-top: 1.5rem;
}
.about-text p {
  margin-bottom: 1rem;
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
  left: 0;
  width: 100%;
  height: 30px;
  z-index: 99;
  background: #ffd400; 
  text-align: center;
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 30px;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
}

.mega-footer {
  position: fixed;           /* 💡 This is key */
  bottom: 0px;              /* appears just above the trigger bar */
  left: 0;
  width: 100%;
  background-color: #FFE9ED;
  color: #333;
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

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
  padding: 0;
}

.hamburger .line {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #007b8f; /* Or any visible color */
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

.hamburger span {
  display: block;
  height: 3px;
  background: #007b8f;
  border-radius: 3px;
 transition: all 0.3s ease;
}
/* Cross (X) animation */
.hamburger .line.open:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.hamburger .line.open:nth-child(2) {
  opacity: 0;
}
.hamburger .line.open:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Animation for the open state */
.hamburger span.open:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Navigation menu */
.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
}
@media (max-width: 768px) {
  .site-header {
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  position: sticky;       /* ✅ stays on top */
  top: 0;
  z-index: 100;

  }

 .hamburger {
    display: flex;
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 101; /* higher than nav and overlay */
  }

  .nav-links {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 99;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a,
  .nav-links button {
    width: 100%;
    text-align: left;
    padding: 0.5rem;
    font-size: 1.1rem;
  }

  .logo {
    height: 70px;
  }

  .hero {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-image {
    width: 80%;
    max-width: 300px;
    margin-top: 1rem;
  }

  .book-list {
    flex-direction: column;
    align-items: center;
  }

  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .social-icons {
    margin-bottom: 1rem;
  }
}

</style>
