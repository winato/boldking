<template>
  <form @submit.prevent="login" class="login-form">
    <Input
      label="User Name"
      name="userName"
      v-model="formData.userName"
    />
    <Input
      label="Password"
      type="password"
      name="password"
      v-model="formData.password"
    />
    <Button
      :wide="true"
      type="submit"
      :loading="loading"
    >
      Submit
    </Button>
  </form>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import apiMocks from '../mocks/api';

export default {
  name: 'Login',

  components: {
    Input,
    Button,
  },

  data: () => ({
    formData: {
      userName: '',
      password: '',
    },
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
      return apiMocks.validate(this.formData.userName);
    },

    async submitForm() {
      try {
        await apiMocks.submit(this.formData);
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>
