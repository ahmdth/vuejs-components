<template>
  <div class="container mx-auto">
    <button
      id="show-modal"
      @click="showModal = true"
      @keydown.escape="showModal = false"
      class="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm mr-4"
    >
      Modal
    </button>
    <DropdownMenu :show="show" :left="false">
      <template #trigger>
        <span>Options</span>
        <ChevronDownIcon class="" />
      </template>
      <DropdownItem href="/">Home</DropdownItem>
      <DropdownItem href="/">About</DropdownItem>
      <DropdownItem href="/">Dashboard</DropdownItem>
      <DropdownItem href="/">Logout</DropdownItem>
    </DropdownMenu>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </Modal>
    </Teleport>
  </div>
</template>
<script setup>
import DropdownItem from "../components/DropdownItem.vue";
import DropdownMenu from "../components/DropdownMenu.vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

const showModal = ref(false);
const show = ref(false)
</script>
