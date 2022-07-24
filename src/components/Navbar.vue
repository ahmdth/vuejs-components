<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" @click="open=!open" class="inline-flex items-center justify-center p-2 rounded-md hover:bg-transparent focus:outline-none active:outline-none border-0 focus:ring-0 focus:ring-transparent" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <MenuIcon v-show="!open" class="block h-6 w-6"/>
          <XIcon v-show="open" class="block h-6 w-6"/>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="h-8 w-auto" src="/vite.svg" alt="" />
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <nav-link to="/">Dashboard</nav-link>
            <nav-link to="/notes">Notes</nav-link>
            <nav-link to="/pricing">Pricing</nav-link>
            <nav-link to="/calender">Calendar</nav-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <BellIcon class="h-6 w-6" />
        </button>
        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <dropdown-menu left class="border-0 p-0 bg-transparent hover:bg-inherit bg-gray-800 text-sm rounded-full focus:outline-none focus:ring-0" :dropdown="dropdown">
            <template #trigger>
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </template>
            <dropdown-item href="/">Your Profile</dropdown-item>
            <dropdown-item href="/" >Settings</dropdown-item>
            <dropdown-item href="/">Logout</dropdown-item>
          </dropdown-menu>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div v-show="open" class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <nav-link class="block" to="/">Home</nav-link>
      <nav-link class="block" to="/notes">Notes</nav-link>
      <nav-link class="block" to="/pricing">Pricing</nav-link>
      <nav-link class="block" to="/calender">Calendar</nav-link>
    </div>
  </div>
</nav>
</template>
<script setup>
import {MenuIcon, XIcon, BellIcon} from "@heroicons/vue/outline"
import { ref } from "@vue/reactivity"
import DropdownItem from "./DropdownItem.vue";
import DropdownMenu from "./DropdownMenu.vue";
import NavLink from "./NavLink.vue";

let open = ref(false)
let dropdown = ref(false)
</script>
