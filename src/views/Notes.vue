<template>
  <div class="container mx-auto">
    <div class="w-full flex flex-col items-center">
      <input
        type="text"
        v-model="note.title"
        placeholder="Write Note"
        class="w-96 mb-4"
        @keydown.enter="saveNote(notes)"
        autofocus
      />
      <ul class="space-y-2 w-96">
        <li v-for="(note, index) in notes" :key="index" class="max-w-sm">
          <input
            type="checkbox"
            :id="note.title"
            v-model="note.complated"
            class="rounded mr-2"
          />
          <label
            :for="note.title"
            :class="{ 'line-through text-gray-500': note.complated }"
            >{{ note.title }}</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";

let store = useStore();
let note = reactive({ title: "", complated: false });
let notes = computed(() => store.state.notes);

let saveNote = (notes) => {
  if (!note.title || notes.map((n) => n.title).includes(note.title)) return;
  store.commit("saveNote", note);
  note.title = "";
};
</script>
