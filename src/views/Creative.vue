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

    <div class="creative-blog">
      <h2>My Creative Blog</h2>
      <article class="blog-post">
        <h3>Biking Adventures</h3>
        <p>I love going out biking to explore new places, enjoy nature, and stay active. It's a great way to clear my mind and stay fit.</p>
      </article>

      <article class="blog-post">
        <h3>Boy Scouts of the Philippines Activities</h3>
        <p>Being part of the Boy Scouts of the Philippines has taught me valuable skills and leadership. We often do camping, community service, and outdoor challenges that help build character.</p>
      </article>

      <article class="blog-post">
        <h3>Gaming Fun</h3>
        <p>When I’m not outdoors, I enjoy playing computer games like League of Legends (LoL) and Valorant. It’s a fun way to connect with friends and challenge myself.</p>
      </article>

      <article class="blog-post">
        <h3>Watching YouTube Videos</h3>
        <p>I also spend time watching YouTube videos on tech reviews, gaming highlights, and tutorials to keep learning new things and stay entertained.</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Creative'
};
</script>

<style scoped>
.creative-blog {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #4f46e5;
}

.blog-post {
  background: white;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 25px;
  box-shadow: 0 3px 7px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;
}

.blog-post:hover {
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.blog-post h3 {
  margin-top: 0;
  color: #6366f1;
}

.blog-post p {
  line-height: 1.5;
  font-size: 16px;
}
</style>
