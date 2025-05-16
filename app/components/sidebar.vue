<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon variant="text" @click.stop="$emit('update:drawer', !drawer)" />
    <v-toolbar-title>My files</v-toolbar-title>

    <template v-if="display.mdAndUp.value">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>
      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>

    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="localDrawer"
    :location="display.mobile.value ? 'bottom' : undefined"
    temporary
    app
  >
    <v-list>
  <v-list-item
    v-for="item in items"
    :key="item.value"
    @click="onSelect(item)"
  >
    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item>
</v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({ drawer: Boolean })
const emit = defineEmits(['update:drawer'])

const display = useDisplay()

const items = [
  { title: 'Foo', value: 'foo' },
  { title: 'Bar', value: 'bar' },
  { title: 'Fizz', value: 'fizz' },
  { title: 'Buzz', value: 'buzz' }
]

const selectedItem = ref(null)

const localDrawer = computed({
  get: () => props.drawer,
  set: val => emit('update:drawer', val)
})

function onSelect(item) {
  selectedItem.value = item
  emit('update:drawer', false)
}
</script>
