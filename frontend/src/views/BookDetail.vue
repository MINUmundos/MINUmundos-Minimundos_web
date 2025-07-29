<template>
  <div class="book-detail">
    <h1>{{ book?.title || 'Buch nicht gefunden' }}</h1>
    <p>{{ book?.description }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const books = {
  taro: {
    title: 'Taro – Das Abenteuer beginnt',
    description: 'Ein kleiner Axolotl entdeckt einen magischen Stein...'
  },
  woerterbuch: {
    title: 'Mein erstes Wörterbuch',
    description: 'Die wichtigsten Wörter auf Deutsch und Spanisch für Kinder'
  }
}

const book = books[route.params.slug]
</script>
