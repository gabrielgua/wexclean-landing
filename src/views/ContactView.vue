<script setup lang="ts">
import Button from '@/Button.vue';
import ContactCard from '@/components/ContactCard.vue';
import FormField from '@/components/FormField.vue';
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';
import { CheckCircle2, Mail, MapPin, MessageCircle, Send } from '@lucide/vue';
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const status = ref<'idle' | 'sending' | 'sent'>('idle');

//TODO: integrate sedora-api
function handleSubmit() {
  status.value = 'sending';
  setTimeout(() => {
    status.value = 'sent';
    form.value = { name: '', email: '', subject: '', message: '' };
  }, 1200);
}
</script>

<template>
  <Section class="py-10!" centered>
    <template #badge>Fale conosco</template>
    <template #title>Vamos conversar?</template>
    <template #description>
      Dúvidas sobre os produtos, parcerias ou onde comprar? Manda uma mensagem que a gente responde rapidinho.
    </template>
  </Section>
  <Section bg-color="bg-cream" text-color="text-navy" badge-bg-color="bg-navy" badge-text-color="text-cream"
    description-text-color="text-navy/70">
    <template #content>
      <div class="grid gap-16 grid-cols-[auto_1fr]">

        <div class="space-y-6">
          <ContactCard :icon="Mail" shadow-color="shadow-gold" text-color="text-gold">
            <template #title>E-Mail</template>
            <template #content>contato@wexclean.com.br</template>
          </ContactCard>

          <ContactCard :icon="MessageCircle" text-color="text-green-deep">
            <template #title>Whatsapp</template>
            <template #content>Fale pelo WhatsApp</template>
          </ContactCard>

          <ContactCard :icon="MapPin" shadow-color="shadow-blue" text-color="text-blue">
            <template #title>Onde estamos</template>
            <template #content>Atendimento em todo o Brasil</template>
          </ContactCard>
        </div>

        <form
          class="space-y-5 rounded-2xl border-[3px] border-navy bg-white p-7 shadow-[12px_12px_10px_0] shadow-green-deep"
          @submit.prevent="handleSubmit">
          <div class="grid gap-5 sm:grid-cols-2">
            <FormField v-model="form.name" name="name" label="Nome" placeholder="Seu nome" />
            <FormField v-model="form.email" name="email" type="email" label="E-mail" placeholder="voce@email.com" />
          </div>

          <FormField v-model="form.subject" name="subject" label="Assunto" placeholder="Sobre o que você quer falar?"
            :required="false" />

          <FormField v-model="form.message" name="message" type="textarea" label="Mensagem"
            placeholder="Escreva sua mensagem..." />

          <Button type="submit" :disabled="status === 'sending'">
            <Icon :icon="status === 'sent' ? CheckCircle2 : Send" class="h-4 w-4" />
            {{ status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Mensagem enviada!' : 'Enviar mensagem' }}
          </Button>
        </form>
      </div>
    </template>

  </Section>


</template>