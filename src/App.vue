<template>
  <div class="min-h-screen">
    <Navbar />
    <router-view class="py-4"></router-view>
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
