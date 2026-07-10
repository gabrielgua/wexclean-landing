<script setup lang="ts">
import Button from '@/components/Button.vue';
import ContactCard from '@/components/ContactCard.vue';
import FormField from '@/components/FormField.vue';
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';
import { useContactStore } from '@/stores/contact-store';
import type { ContactForm } from '@/types/contact-form';
import { ContactInformation } from '@/utils/contact-infomation';
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Send, XCircle } from '@lucide/vue';
import { ref } from 'vue';

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const contactStore = useContactStore();

function handleSubmit() {
  contactStore.submit(form.value);
  resetForm();
}

const resetForm = () => {
  form.value = {
    name: '',
    subject: '',
    email: '',
    message: ''
  }
}

const clearState = () => {
  contactStore.reset()
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
  <Section class="py-10! lg:py-20!" bg-color="bg-cream" text-color="text-navy" badge-bg-color="bg-navy"
    badge-text-color="text-cream" description-text-color="text-navy/70">
    <template #content>
      <div class="grid gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-[auto_1fr]">

        <div class="space-y-6">
          <ContactCard :icon="Mail" shadow-color="shadow-gold" text-color="text-gold">
            <template #title>E-Mail</template>
            <template #content>{{ ContactInformation.email }}</template>
          </ContactCard>

          <ContactCard :icon="MessageCircle" text-color="text-green-deep">
            <template #title>Whatsapp</template>
            <template #content>{{ ContactInformation.phone }}</template>
          </ContactCard>

          <ContactCard :icon="MapPin" shadow-color="shadow-blue" text-color="text-blue">
            <template #title>Onde estamos</template>
            <template #content>Atendimento em todo o Brasil</template>
          </ContactCard>
        </div>

        <div v-if="contactStore.state.success"
          class="flex flex-col items-center justify-center gap-5 rounded-2xl border-[3px] border-navy bg-white p-10 text-center shadow-[12px_12px_10px_0] shadow-green-deep">
          <Icon :icon="CheckCircle2" class="size-14 text-green-deep" />

          <div class="space-y-2">
            <h3 class="text-2xl font-bold uppercase text-navy">
              Mensagem enviada!
            </h3>
            <p class="text-navy/70">
              Recebemos sua mensagem e em breve entraremos em contato.
            </p>
          </div>

          <Button @click="clearState">
            Enviar outra mensagem
          </Button>
        </div>

        <div v-else-if="contactStore.state.error"
          class="flex flex-col items-center justify-center gap-5 rounded-2xl border-[3px] border-navy bg-white p-10 text-center shadow-[12px_12px_10px_0] shadow-red-400">
          <Icon :icon="XCircle" class="size-14 text-red-500" />

          <div class="space-y-2">
            <h3 class="text-2xl font-bold uppercase text-navy">
              Ops! Algo deu errado.
            </h3>
            <p class="text-navy/70">
              Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.
            </p>
          </div>

          <Button @click="clearState">
            Tentar novamente
          </Button>
        </div>

        <form v-else
          class="space-y-5 rounded-2xl border-[3px] border-navy bg-white p-5 lg:p-6 shadow-[12px_12px_10px_0] shadow-gold"
          @submit.prevent="handleSubmit">
          <div class="grid gap-5 sm:grid-cols-2">
            <FormField v-model="form.name" name="name" label="Nome" placeholder="Seu nome" />
            <FormField v-model="form.email" name="email" type="email" label="E-mail" placeholder="voce@email.com" />
          </div>

          <FormField v-model="form.subject" name="subject" label="Assunto" placeholder="Sobre o que você quer falar?"
            :required="false" />

          <FormField v-model="form.message" name="message" type="textarea" label="Mensagem"
            placeholder="Escreva sua mensagem..." />

          <Button class="w-full justify-center md:max-w-max" bg-color="bg-gold" type="submit"
            :disabled="contactStore.state.loading">
            <Icon v-if="contactStore.state.loading" :icon="Loader2" class="size-4 animate-spin" />
            <Icon v-else :icon="Send" class="size-4" />
            {{ contactStore.state.loading ? 'Enviando...' : 'Enviar Mensagem' }}
          </Button>
        </form>
      </div>
    </template>

  </Section>


</template>