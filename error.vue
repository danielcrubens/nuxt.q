<template>
  <NuxtLayout name="error">
    <div class="flex items-center justify-center h-screen">
      <div class="text-center">
        <div class="error text-4xl font-bold mx-auto" data-text="404">404</div>
        <h1 class="text-2xl md:text-4xl lg:text-2xl text-blue mt-2">Desculpe, a página que você está procurando não existe.</h1>
        <div class=" group relative transition-transform">
          <NuxtLink to="/"
            class="w-60 bg-blue-100 mx-auto flex items-center gap-3 justify-center mt-6 bg-orange transition duration-300 ease-in-out transform hover:brightness-95  outline-none text-lg  text-white rounded-lg  p-3 font-medium">
            <MoveLeft class="transition-transform duration-300 ease-in-out group-hover:translate-x-[-7px]" />
            Voltar para Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="css">
.error {
  color: #0d114f;
  font-size: 7rem;
  position: relative;
  line-height: 1;
  width: 12.5rem;
  font-weight: 800;
}

.error:before {
  content: attr(data-text);
  position: absolute;
  left: 0.5rem;
  top: 0;
  overflow: hidden;
  clip: rect(0, 900rem, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}

.error:after {
  content: attr(data-text);
  position: absolute;
  left: 0.875rem;
  top: 0;
  color: #0d114f;
  background: #ffff;
  overflow: hidden;
  clip: rect(0, 900rem, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
  text-align: center;
}

@-webkit-keyframes noise-anim {
  0% {
    clip: rect(80.563rem, 9990.563rem, 6.25rem, 0);
  }

  5% {
    clip: rect(0.25rem, 9990.563rem, 3.875rem, 0);
  }

  10% {
    clip: rect(40.188rem, 9990.563rem, 1rem, 0);
  }

  15% {
    clip: rect(0.125rem, 9990.563rem, 60.5rem, 0);
  }

  20% {
    clip: rect(10.125rem, 9990.563rem, 0.375rem, 0);
  }

  25% {
    clip: rect(80.563rem, 9990.563rem, 20.313rem, 0);
  }

  30% {
    clip: rect(10.313rem, 9990.563rem, 30.5rem, 0);
  }

  35% {
    clip: rect(3.563rem, 9990.563rem, 6.063rem, 0);
  }

  40% {
    clip: rect(20.25rem, 9990.563rem, 70.125rem, 0);
  }

  45% {
    clip: rect(5.063rem, 9990.563rem, 0.188rem, 0);
  }

  50% {
    clip: rect(90.188rem, 9990.563rem, 20.375rem, 0);
  }

  55% {
    clip: rect(60.5rem, 9990.563rem, 80.313rem, 0);
  }

  60% {
    clip: rect(40.188rem, 9990.563rem, 20.5rem, 0);
  }

  65% {
    clip: rect(40.25rem, 9990.563rem, 0.688rem, 0);
  }

  70% {
    clip: rect(1.063rem, 9990.563rem, 30.188rem, 0);
  }

  75% {
    clip: rect(70.25rem, 9990.563rem, 60.375rem, 0);
  }

  80% {
    clip: rect(6.25rem, 9990.563rem, 0.25rem, 0);
  }

  85% {
    clip: rect(90.125rem, 9990.563rem, 1.938rem, 0);
  }

  90% {
    clip: rect(90.188rem, 9990.563rem, 90.5rem, 0);
  }

  95% {
    clip: rect(20.188rem, 9990.563rem, 4.813rem, 0);
  }

  100% {
    clip: rect(90.125rem, 9990.563rem, 0.5rem, 0);
  }
}

@keyframes noise-anim {
  0% {
    clip: rect(80.563rem, 9990.563rem, 6.25rem, 0);
  }

  5% {
    clip: rect(0.25rem, 9990.563rem, 3.875rem, 0);
  }

  10% {
    clip: rect(40.188rem, 9990.563rem, 1rem, 0);
  }

  15% {
    clip: rect(0.125rem, 9990.563rem, 60.5rem, 0);
  }

  20% {
    clip: rect(10.125rem, 9990.563rem, 0.375rem, 0);
  }

  25% {
    clip: rect(80.563rem, 9990.563rem, 20.313rem, 0);
  }

  30% {
    clip: rect(10.313rem, 9990.563rem, 30.5rem, 0);
  }

  35% {
    clip: rect(3.563rem, 9990.563rem, 6.063rem, 0);
  }

  40% {
    clip: rect(20.25rem, 9990.563rem, 70.125rem, 0);
  }

  45% {
    clip: rect(5.063rem, 9990.563rem, 0.188rem, 0);
  }

  50% {
    clip: rect(90.188rem, 9990.563rem, 20.375rem, 0);
  }

  55% {
    clip: rect(60.5rem, 9990.563rem, 80.313rem, 0);
  }

  60% {
    clip: rect(40.188rem, 9990.563rem, 20.5rem, 0);
  }

  65% {
    clip: rect(40.25rem, 9990.563rem, 0.688rem, 0);
  }

  70% {
    clip: rect(1.063rem, 9990.563rem, 30.188rem, 0);
  }

  75% {
    clip: rect(70.25rem, 9990.563rem, 60.375rem, 0);
  }

  80% {
    clip: rect(6.25rem, 9990.563rem, 0.25rem, 0);
  }

  85% {
    clip: rect(90.125rem, 9990.563rem, 1.938rem, 0);
  }

  90% {
    clip: rect(90.188rem, 9990.563rem, 90.5rem, 0);
  }

  95% {
    clip: rect(20.188rem, 9990.563rem, 4.813rem, 0);
  }

  100% {
    clip: rect(90.125rem, 9990.563rem, 0.5rem, 0);
  }
}
</style>

<script setup>
import { MoveLeft } from 'lucide-vue-next';
</script>