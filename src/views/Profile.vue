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

    <div class="profile-page">
      <img src="../assets/Formal.png" alt="Profile" />
      <h1>Miguel Christopher S. Jose</h1>
      <p>Email: miguelchristophersjose@gmail.com</p>
      <p>Facebook: Miguel Christopher S. Jose</p>
    </div>

    <div class="profile-content">
      <!-- Left Column: Education -->
      <div class="left">
        <h2>Education</h2>
        <div class="school">
          <h3>College</h3>
          <ul>
            <li><strong>Bachelor of Science in Computer Engineering</strong></li>
            <p><strong>Polytechnic University Of the Philippines</strong> | 2023–Present</p>
            <li><strong>Diploma in Computer Engineering Technology</strong></li>
            <p><strong>Polytechnic University Of the Philippines</strong> | 2020–2023</p>
          </ul>
          <h3>Senior High School</h3>
          <ul>
            <li><strong>Marikina Polytechnic College</strong> | 2018–2020</li>
          </ul>
          <h3>Junior High School</h3>
          <ul>
            <li><strong>Sta. Elena High School</strong> | 2014–2018</li>
          </ul>
          <h3>Elementary</h3>
          <ul>
            <li><strong>Marikina Catholic School</strong> | 2009–2014</li>
          </ul>
        </div>
      </div>

      <!-- Center Divider -->
      <div class="divider"></div>

      <!-- Right Column: Experience, Skills, Certifications -->
      <div class="right">
        <h2>Working Experience</h2>
        <h3>On the Job Training</h3>
        <ul>
          <li><strong>Zoomanity Group</strong> | 2023</li>
        </ul>

        <h2 id="skills">Skills</h2>
        <ul>
          <li>Basic knowledge with Adobe Photoshop, Illustrator, Premiere, Canva, and AutoCAD.</li>
          <li>Basic knowledge on Microsoft Office (Word, Excel, PowerPoint).</li>
          <li>Teamwork Capability.</li>
          <li>Problem Solving Skills</li>
        </ul>

        <h2 id="certifications">Certifications</h2>
        <ul>
          <li><strong>President Lister</strong> | 2020</li>
          <li><strong>NC II | Computer System Servicing</strong> | 2023</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
};
</script>

<style scoped>
.profile-page {
  text-align: center;
  padding: 20px;
}

img {
  width: 150px;
  border-radius: 50%;
  border: 3px solid #4f46e5;
  margin-bottom: 10px;
}

.profile-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}

/* Column base styling */
.left, .right {
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

/* Divider in the center */
.divider {
  width: 2px;
  background: #ccc;
  height: 100%;
  margin: 0 10px;
}

/* Responsive behavior */
@media (max-width: 800px) {
  .profile-content {
    flex-direction: column;
    align-items: stretch;
  }

  .divider {
    display: none;
  }
}

ul {
  padding-left: 20px;
}
h2 {
  margin-top: 0;
  color: #4f46e5;
}
h3 {
  color: #6366f1;
}

</style>
