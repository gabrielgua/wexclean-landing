<script setup lang="ts">
import Container from './Container.vue';
import Logo from './Logo.vue';

</script>

<template>
  <footer class="bg-navy-deep pt-12 pb-7">
    <Container>
      <div class="flex flex-wrap items-center justify-between gap-6 mb-8 pb-8 border-b border-b-navy">
        <Logo />
        <div class="flex flex-wrap gap-6">
          <div class="space-y-2 flex flex-col">
            <h4 class="text-sm uppercase tracking-wider text-cream font-['Manrope',sans-serif] font-extrabold">
              Navegação
            </h4>
            <a class="text-sm text-[#9AA5C2]! hover:text-gold!" href="#produtos">Produtos</a>
            <a class="text-sm text-[#9AA5C2]! hover:text-gold!" href="#sobre">Sobre</a>
            <a class="text-sm text-[#9AA5C2]! hover:text-gold!" href="#contato">Contato</a>
          </div>
          <div class="space-y-2 flex flex-col">
            <h4 class="text-sm uppercase tracking-wider text-cream font-['Manrope',sans-serif] font-extrabold">
              Contato
            </h4>
            <a class="text-sm text-[#9AA5C2]! hover:text-gold!" target="_blank" rel="noopener">WhatsApp</a>
            <a class="text-sm text-[#9AA5C2]! hover:text-gold!">contato@wexclean.com.br</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-between gap-6 text-xs text-cream/80">
        <span>© 2026 WEX CLEAN. Todos os direitos reservados.</span>
        <span>Feito com 💚 pra deixar sua casa em outro nível.</span>
      </div>
    </Container>
  </footer>

</template>