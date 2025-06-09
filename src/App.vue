<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f0f4ff, #dfe7fd, #e0f2fe);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  min-height: 100vh;
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


.navbar {
  background-color: #4f46e5;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 30px;
  margin: 0;
}

.navbar li {
  list-style: none;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
}

.navbar a:hover {
  color: #a5b4fc;
}

.active-link {
  border-bottom: 2px solid #a5b4fc;
  padding-bottom: 2px;
  color: #a5b4fc;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


</style>
