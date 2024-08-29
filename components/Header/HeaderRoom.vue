<template>
  <header class="w-full lg:px-36 px-4 lg:flex justify-between items-center py-8">
    <Logo />
    <div class="flex justify-center gap-5 pt-7 lg:pt-0">
      <button @click="copyRoomCode"
        class="px-6 flex justify-center items-center gap-2 rounded-lg border-2 border-blue-100 p-3 font-medium text-md text-blue-100 transition hover:brightness-95 focus:outline-none">
        #{{ roomCode }}
        <Copy />
      </button>
      <NuxtLink to="/create-pass"
        class="px-6 flex justify-center items-center gap-2 rounded-lg bg-blue-100 p-3 font-medium text-md text-white transition hover:brightness-95 focus:outline-none">
        <Users />
        Criar Sala
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Logo from './Logo.vue';
import { Users, Copy } from 'lucide-vue-next';
import { useToast } from 'vue-toastification';


const route = useRoute();
const roomCode = route.params.code;

const copyRoomCode = () => {
  if (roomCode) {
    navigator.clipboard.writeText(roomCode)
      .then(() => {
        showToastSuccess();
      })
      .catch(err => {
        console.error('Erro ao copiar o código da sala: ', err);
      });
  } else {
    showToasError()
  }
}
const showToastSuccess = () => {
  const toast = useToast();
  toast.success('Código copiado com sucesso!', {
    position: 'bottom-right',
    timeout: 3100,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    closeButton: false,
  });
};
const showToasError = () => {
  const toast = useToast();
  toast.error('Código da sala não disponível', {
    timeout: 3100,
    position: 'bottom-right',
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    closeButton: false,

  });
};
</script>