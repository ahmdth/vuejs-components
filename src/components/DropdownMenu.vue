<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        @click="show = !show"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        v-bind="$attrs" 
      >
        <slot name="trigger"> Trigger </slot>
      </button>
    </div>
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="show"
        class="origin-top-right absolute right-0 left-auto mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        :class="{'right-auto left-0': !left}"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
defineProps({
  left: {
    type: Boolean,
    default: true
  },
  show: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>
