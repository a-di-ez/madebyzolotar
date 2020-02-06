<template>
  <v-list>
    <v-list-tile v-for="tag in $tag.list" :to="tag.path">
      <v-list-tile-content>{{ tag.name }}</v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>
