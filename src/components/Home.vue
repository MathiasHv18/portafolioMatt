<template>
  <header>
    <nav>
      <img src="../assets/logo.jpg" alt="logoProfile" id="logoMatt" />
      <ul class="links">
        <li><a @click="scrollTo('home')">Home</a></li>
        <!-- <li><a href="#aboutMe">About me</a></li>-->
        <li><a @click="scrollTo('aboutMe')">My projects</a></li>
        <li><a @click="scrollTo('contact')">Contact</a></li>
      </ul>
    </nav>
  </header>

  <article>
    <section id="home">
      <img class="avatar" src="../assets/avatar.jpg" alt="avatarMatt" />
      <h1 id="helloWorld">Hello World!</h1>
      <h2>I am <span class="redWord">Mathias Hualtibamba</span></h2>
      <h2>Computer Science</h2>
      <p>
        Currently studying <span class="redWord">Computer Science</span> in
        Peru. I am passionate about
        <span class="redWord">web development</span> and
        <span class="redWord">software engineering</span>. I am always looking
        for new challenges and opportunities to learn new things.
      </p>
      <a class="download" href="/assets/ResumeHualtibamba.docx" download
        >Resume</a
      >
      <a @click="scrollTo('aboutMe')"><img src="../assets/down-arrow.png" /></a>
    </section>

    <section id="aboutMe">
      <div class="myProjects">
        <h2 class="subTitle">My Projects</h2>

        <div class="projects-container">
          <div class="project">
            <a
              href="https://github.com/Giorgio6846/TrabajoFinal-IA"
              target="_blank"
            >
              <img
                class="projectIMG"
                src="../assets/projectIA.jpg"
                alt="projectIA"
              />
            </a>
            <h3>Artificial Intelligence project</h3>
            <p>
              Educational bot for blackjack that uses AI to recognize cards,
              optimize plays, and detect addictive behaviours. It's goal is to
              teach responsible playing, alert users to potential addictions,
              and promote healthy gambling practices.
            </p>
          </div>

          <div class="project">
            <a href="https://hanzitest.pages.dev/" target="_blank">
              <img
                class="projectIMG"
                src="../assets/hanziApp.png"
                alt="hanziApp"
              />
            </a>
            <h3>Hanzi App</h3>
            <p>
              Simple yet efficient application created with Vue and Vite. It's
              purpose is to help you measure your fluency with chinese
              characters(汉字).
            </p>
          </div>

          <div class="project">
            <a
              href="https://github.com/Giorgio6846/TrabajoFinal-ComplejidadAlgoritmica"
              target="_blank"
            >
              <img
                class="projectIMG"
                src="../assets/censoApp.png"
                alt="censoApp"
              />
            </a>
            <h3>Census App</h3>
            <p>
              An application that simulates a census, utilizing a generated CSV
              file. It provides infrastructure information about the Peruvian
              population.
            </p>
          </div>
        </div>
      </div>

      <div class="boxSkills">
        <h2 class="subTitle">Skills</h2>
        <div class="skills">
          <img src="../assets/html.png" alt="htmlLogo" />
          <img src="../assets/css.png" alt="cssLogo" />
          <img src="../assets/cpp.png" alt="cppLogo" />
          <img src="../assets/python.png" alt="pythonLogo" />
          <img src="../assets/sql.png" alt="sqlLogo" />
          <img src="../assets/vue.png" alt="vueLogo" />
        </div>
      </div>
    </section>

    <section id="contact">
      <h2 class="subTitle">Contact me</h2>
      <p>
        You can always manually send me a message to my personal email:
        <span class="redWord">mathiashv2014@gmail.com</span>
        or just by this form:
      </p>
      <form v-on:submit.prevent="emailSend">
        <input
          id="name"
          type="text"
          v-model="name"
          placeholder="Insert your name"
          name="name"
          required
        />
        <input
          id="phone"
          type="text"
          v-model="phone"
          placeholder="phone"
          name="phone"
          required
        />
        <input
          type="email"
          v-model="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          id="message"
          type="text"
          v-model="message"
          placeholder="Insert an optional message"
          name="message"
          required
        />
        <button type="submit" class="btn">submit</button>
      </form>
    </section>
  </article>

  <footer>
    <aside class="linksSocialMedia">
      <ul>
        <li>
          <a href="https://www.instagram.com/mathiashv18/" target="_blank"
            ><img
              class="logoSocialPage"
              src="../assets/igLogo.png"
              alt="instagramPage"
          /></a>
        </li>
        <li>
          <a href="https://github.com/MathiasHv18" target="_blank"
            ><img
              class="logoSocialPage"
              src="../assets/githubLogo.png"
              alt="instagramPage"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mathias-hualtibamba-a5a7342a0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSN%2BFlOblRQe271THruYKNw%3D%3D"
            target="_blank"
            ><img
              class="logoSocialPage"
              src="../assets/linkdinLogo.png"
              alt="instagramPage"
          /></a>
        </li>
      </ul>
    </aside>
    <span
      >Made it with vue by:
      <span class="redWord">Mathias Hualtibamba</span></span
    >
  </footer>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    emailSend() {
      const name = this.name;
      const phone = this.phone;
      const message = this.message;
      const email = this.email;

      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
          name,
          phone,
          message,
          email,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    downloadCV() {
      window.location.href = `${import.meta.env.VITE_BACKEND_URL}/download`;
    },
  },
};
</script>

<style scoped>
@import "../styles/Home.css";
</style>
