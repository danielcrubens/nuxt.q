<template>
  <div v-if="isVisible" class="fixed inset-0 bg-slate-900 bg-opacity-80 flex justify-center items-center z-50">
    <div class="bg-white p-12 rounded-lg w-11/12 lg:w-auto relative text-center">
      <h3 class="lg:text-2xl text-2xl font-bold text-blue">Marcar como lida esta pergunta</h3>
      <p class="text-[#4D5E77] pt-3">Tem certeza que deseja marcar <br class="lg:block hidden"> como lida esta pergunta?</p>

      <input
        class=" mt-6 w-full rounded-lg border-solid border-2 text-blue border-blue-100 p-3  text-md shadow-sm placeholder-dark-blue"
        type="password" placeholder="Digite sua senha"/>
      <div class="flex justify-between gap-5">
        <button  @click="closeModal"
            class="w-full lg:w-auto mt-6 flex justify-center items-center gap-2 rounded-lg bg-gray-400 p-3 font-medium text-md  text-white transition hover:brightness-95 focus:outline-none">
            Cancelar
          </button>

          <button type="submit"
            class="w-full lg:w-auto mt-6 flex justify-center items-center gap-2 rounded-lg p-3 bg-blue-100 font-medium text-md  text-white transition hover:brightness-95 focus:outline-none">
            Sim, marcar como lida
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { X } from 'lucide-vue-next';


// Define as props do componente
const props = defineProps({
  isVisible: Boolean
});

// Define o emissor de eventos
const emit = defineEmits(['close']);

// Função para fechar o modal
const closeModal = () => {
  emit('close');
};
</script>
