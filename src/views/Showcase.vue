<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/portfolio/profile" exact-active-class="active-link">Profile</router-link></li>
        <li><router-link to="/portfolio/showcase" exact-active-class="active-link">Showcase</router-link></li>
        <li><router-link to="/portfolio/contact" exact-active-class="active-link">Contact</router-link></li>
        <li><router-link to="/portfolio/creative" exact-active-class="active-link">Creative</router-link></li>
        <li><router-link to="/login" exact-active-class="active-link">Logout</router-link></li>
      </ul>
    </nav>

    <div class="showcase">
      <h2>Portfolio Showcase</h2>
      <div class="cards">
        <div class="card" v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showcase',
  data() {
    return {
      projects: [
        {
           id: 1,
          title: 'Arduino Robo Car that solve puzzle',
          description: 'A smart robotic car powered by Arduino, equipped with a proximity sensor to detect obstacles and solve a physical puzzle maze autonomously.'
        
        },
        {
          id: 2,
          title: 'Portfolio Website',
          description: 'My personal site with projects and creative works, built with Vue.'
        },
        {
          id: 3,
          title: 'Arduino Ultrasonic Distance Meter',
          description: 'Measures distance using an ultrasonic sensor and displays the result on a serial monitor or LCD.'
        },
        {
          id: 4,
          title: 'IoT Temp & Humidity Logger',
          description: 'A NodeMCU-based DHT11 sensor project that records temperature and humidity data and stores it in Firebase Realtime Database.'
        },
        { 
          id: 5, 
          title: 'Arduino Temperature Alarm', 
          description: 'Triggers an alarm if temperature exceeds a certain threshold using a temperature sensor.' },
        {
          id: 6,
          title: 'Arduino Light Sensor',
          description: 'Uses a photoresistor to detect light intensity and turn on an LED if it is too dark.'
        },
        {
          id: 7,
          title: 'Arduino Buzzer Alarm',
          description: 'Activates a buzzer when motion is detected using a PIR sensor useful for security basics.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.showcase {
  padding: 40px 20px;
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
h2 {
  color: #4f46e5;
  margin: 0 0 10px;
}
.card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  width: 260px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px hsla(0, 0.00%, 0.00%, 0.84);
}

.card h3 {
  margin: 0 0 10px;
  font-size: 20px;
  color: #6366f1;
}

.card p {
  font-size: 14px;
  color: #4b5563;
}

</style>
