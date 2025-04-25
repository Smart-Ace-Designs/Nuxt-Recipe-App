<script setup lang="ts"></script>

<template>
  <header class="overflow-hidden border-b py-4">
    <nav class="container flex items-center">
      <NuxtLink to="/" class="flex items-center gap-1">
        <NuxtImg format="webp" densities="x1" width="56px" src="/icon-green.png" alt="Nuxtcipes" />
        <span class="hover:text-theme-dodgeroll-gold text-3xl font-bold">Nuxtcipes</span>
      </NuxtLink>
      <ul class="ml-auto flex gap-6 text-xl font-bold capitalize">
        <li>
          <NuxtLink
            to="/"
            activeClass="border-b-2 border-theme-dodgeroll-gold hover:text-theme-dire-wolf"
            class="hover:text-theme-dodgeroll-gold"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            activeClass="border-b-2 border-theme-dodgeroll-gold hover:text-theme-dire-wolf"
            class="hover:text-theme-dodgeroll-gold"
            >About</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
