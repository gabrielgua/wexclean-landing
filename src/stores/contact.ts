import { http } from '@/services/http'
import type { ContactForm } from '@/types/contact-form'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const state = reactive({ loading: false, error: false, success: false })

  const submit = (form: ContactForm) => {
    state.loading = true

    http
      .post('/emails', { fields: form })
      .then(() => (state.success = true))
      .catch((err) => {
        console.error('Error sending email: ', err)
        state.error = true
      })
      .finally(() => (state.loading = false))
  }

  const reset = () => {
    state.error = false
    state.loading = false
    state.success = false
  }

  return { state, submit, reset }
})
