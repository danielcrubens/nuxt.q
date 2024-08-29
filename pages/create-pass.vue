<template>
  <Header/>
  <section class="grid grid-cols-1 lg:grid-cols-2 h-full">
    <Background />
    <div class="my-auto mt-32">
      <div class="px-4 lg:px-40 mx-auto">
        <h1 class="title">Crie sua própria sala</h1>
        <FormCreateRoom @room-created="handleRoomCreated" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '@/components/Header/Header.vue'
import Background from '@/components/Section/Background.vue'

const router = useRouter()

const handleRoomCreated = (roomData) => {
  localStorage.setItem(`room_${roomData.id}`, roomData.password)
  router.push(`/room/${roomData.id}`)
}
</script>