<script setup lang="ts">
import { Mail, MessageCircle } from '@lucide/vue';
import Container from './Container.vue';
import Logo from './Logo.vue';
import Icon from './Icon.vue';
import { ContactInformation } from '@/utils/contact-infomation.ts';

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
            <RouterLink class="text-sm text-[#9AA5C2]! hover:text-gold!" active-class="text-gold!" to="/">
              Home
            </RouterLink>
            <RouterLink class="text-sm text-[#9AA5C2]! hover:text-gold!" active-class="text-gold!" to="/products">
              Produtos
            </RouterLink>
            <RouterLink class="text-sm text-[#9AA5C2]! hover:text-gold!" active-class="text-gold!" to="/contact">
              Contato
            </RouterLink>
          </div>
          <div class="space-y-2 flex flex-col">
            <h4 class="text-sm uppercase tracking-wider text-cream font-['Manrope',sans-serif] font-extrabold">
              Contato
            </h4>
            <div class="flex items-center gap-2 text-sm text-[#9AA5C2]">
              <Icon :icon="MessageCircle" />
              {{ ContactInformation.phone }}
            </div>
            <div class="flex items-center gap-2 text-sm text-[#9AA5C2]">
              <Icon :icon="Mail" />
              {{ ContactInformation.email }}
            </div>
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