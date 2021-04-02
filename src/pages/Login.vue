<template>
  <ValidationObserver
    slim
    v-slot="{ handleSubmit }"
  >
    <form
      @submit.prevent="handleSubmit(login)"
      class="login-form"
    >
      <ValidationProvider
        name="User Name"
        :rules="{
          required: true,
        }" 
        v-slot="{ errors }"
      >
        <Input
          label="User Name"
          name="userName"
          v-model.trim="userName"
        />
        <InputError
          v-if="errors.length"
          :errorText="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider
        name="Password"
        :rules="{
          required: true,
          min: 8,
        }"
        v-slot="{ errors }"
      >
        <Input
          label="Password"
          type="password"
          name="Password"
          v-model="password"
        />
        <InputError
          v-if="errors.length"
          :errorText="errors[0]"
        />
      </ValidationProvider>
      <Button
        :wide="true"
        type="submit"
        :loading="loading"
      >
        Submit
      </Button>
    </form>
  </ValidationObserver>
</template>

<script>
import Input from '../components/Input.vue';
import InputError from '../components/InputError.vue';
import Button from '../components/Button.vue';
import apiMocks from '../mocks/api';
import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full';

export default {
  name: 'Login',

  components: {
    Input,
    Button,
    InputError,
    ValidationObserver,
    ValidationProvider,
  },

  data: () => ({
    userName: '',
    password: '',
    loading: false,
  }),

  methods: {
    async login() {
      this.toggleLoading();
      try {
        await this.validateUserName();
        this.submitForm(); 
      } catch (error) {
        this.$toast.error(error.message);
        this.toggleLoading();
      }
    },

    validateUserName() {
      return apiMocks.validate(this.userName);
    },

    async submitForm() {
      try {
        const formData = {
          userName: this.userName,
          password: this.password,
        }
        await apiMocks.submit(formData);

        this.$toast.success('You succesfully logged in!');
        this.toggleLoading();
      } catch(error) {
        this.$toast.error(error.message);
        this.toggleLoading();
      }
    },

    toggleLoading() {
      this.loading = !this.loading;
    }
  }
}
</script>

<style lang="css">
  .login-form {
    width: 250px;
  }
</style>
