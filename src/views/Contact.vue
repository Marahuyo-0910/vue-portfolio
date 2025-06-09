<template>
 <nav class="navbar">
      <ul>
        <li><router-link to="/portfolio/profile" exact-active-class="active-link">Profile</router-link></li>
        <li><router-link to="/portfolio/showcase" exact-active-class="active-link">Showcase</router-link></li>
        <li><router-link to="/portfolio/contact" exact-active-class="active-link">Contact</router-link></li>
        <li><router-link to="/portfolio/creative" exact-active-class="active-link">Creative</router-link></li>
        <li><router-link to="/login" exact-active-class="active-link">Logout</router-link></li>
      </ul>
    </nav>
  <div class="contact">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <textarea v-model="message" placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you for contacting me ${this.name}`);
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 40px 20px;
  max-width: 400px;
  margin: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.contact h2 {
  color: #4f46e5;
  margin-bottom: 20px;
}

input,
textarea {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #4f46e5;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #6366f1;
}

</style>
