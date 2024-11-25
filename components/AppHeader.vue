<template>
  <header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <HomeModernIcon class="size-6" />
        </NuxtLink>
      </div>
      <div class="flex">
        <NuxtLink to="/recipes" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open recipe menu</span>
          <ListBulletIcon class="size-6" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ListBulletIcon, HomeModernIcon } from '@heroicons/vue/24/outline'

</script>