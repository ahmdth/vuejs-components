<template>
  <a
    :href="href"
    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
    role="menuitem"
    tabindex="-1"
    id="menu-item-0"
    ><slot>Default</slot></a
  >
</template>
<script setup>
defineProps({
  href: String,
});
</script>
