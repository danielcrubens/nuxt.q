<template>
  <section>
    <div class="bg-light-blue my-5 p-5 ">
      <div class="flex items-center gap-3">
        <div class="user bg-blue-100 w-10 p-2 mx-0 rounded-full">
          <User color="#ffff" />
        </div>
          <p class="text-blue">Perguntas</p>
      </div>
      <div class="flex justify-end items-center gap-6">
        <button @click="showModalCheck = true"  class="flex items-center">
          <CheckIcon :size="18" color="#3485ff "/>
         <p class="text-blue-100">Marcar como lida</p> 
        </button>
        <button @click="showModalDelete = true "  class="flex items-center">
          <Trash :size="18" color="#E83F5B"/>
         <p class="text-[#E83F5B]">Excluir</p> 
        </button>
      </div>
    </div>
    <div class="bg-light-blue my-5 p-5 ">
      <div class="flex items-center gap-3">
        <div class="user bg-blue-100 w-10 p-2 mx-0 rounded-full">
          <User color="#ffff"/>
        </div>
          <p class="text-blue">Perguntas</p>
      </div>
      <div class="flex justify-end items-center gap-6">
        <a href="#" class="flex items-center" data-id="<%= question.id %>">
          <CheckIcon :size="18" color="#3485ff"/>
         <p class="text-blue-100">Marcar como lida</p> 
        </a>
        <a href="#" class="flex items-center" data-id="<%= question.id %>">
          <Trash :size="18" color="#E83F5B"/>
         <p class="text-[#E83F5B]">Excluir</p> 
        </a>
      </div>
    </div>
    <div class="bg-light-blue my-5 p-5 ">
      <div class="flex items-center gap-3">
        <div class="user bg-blue-100 w-10 p-2 mx-0 rounded-full">
          <User color="#ffff" />
        </div>
          <p class="text-blue">Perguntas</p>
      </div>
      <div class="flex justify-end items-center gap-6">
        <a href="#" class="flex items-center" data-id="<%= question.id %>">
          <CheckIcon :size="18" color="#3485ff "/>
         <p class="text-blue-100">Marcar como lida</p> 
        </a>
        <a href="#" class="flex items-center" data-id="<%= question.id %>">
          <Trash :size="18" color="#E83F5B"/>
         <p class="text-[#E83F5B]">Excluir</p> 
        </a>
      </div>
    </div>
    <Check :isVisible="showModalCheck" @close="showModalCheck = false"/>    
    <Delete :isVisible="showModalDelete" @close="showModalDelete = false"/>


    <div class=" flex flex-col justify-center items-center py-8">
    <img class="w-28 lg:w-36  mx-auto pb-5" src="@/assets/images/noquestions.svg" alt="Sem perguntas">
    <p>Nenhuma pergunta por aqui...</p>
    <p>Faça sua primeira pergunta e envie o <br>código dessa sala para outras pessoas!</p>
    </div>
  </section>
</template>

 <style scoped>
p{
  @apply text-blue;
}
</style>
<script setup>
import { User, Trash, CheckIcon } from 'lucide-vue-next'
const showModalCheck = ref(false);
const showModalDelete = ref(false);

import Check from '@/components/Modal/Check.vue';
import Delete from '@/components/Modal/Delete.vue';


</script>