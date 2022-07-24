<template>
  <Transition name="fade">
    <div
      v-if="show"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        @keydown.escape="show = false"
        @click="show = false"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-1000"
      ></div>

      <div class="fixed z-10 sm:inset-0 overflow-y-auto">
        <div
          class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
        >
          <div
            class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full overflow-y-auto"
            style="max-height: 500px"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <!-- Heroicon name: outline/exclamation -->
                  <img
                    src="@/assets/exclamation.svg"
                    class="h-6 w-6 text-gray-900"
                    alt="Heroicon name: outline/exclamation"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900 capitalize"
                    id="modal-title"
                  >
                    <slot name="header">Deactivate account</slot>
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      <slot name="body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque earum pariatur ut corporis, tempore doloremque
                        culpa ducimus illo? Obcaecati laboriosam at excepturi.
                      </slot>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <slot name="footer">
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  @click="$emit('close')"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
const props = defineProps({
  show: Boolean,
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
