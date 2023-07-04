<template>
  <div>
    <nav class="hews-nav py-3 fixed top-0 w-screen">
      <div class="container">
        <div class="flex justify-between items-center">
          <router-link to="/" class="text-2xl hd-logo">
            <span
              class="dark:text-white gradient-2 transition ease-in-out duration-500"
            >
              hieudo
            </span>
            <span
              class="dark:text-white gradient transition ease-in-out duration-500"
            >
              Portfolio
            </span>
          </router-link>
          <div class="flex items-center gap-1 md:gap-5 uppercase">
            <router-link
              class="py-1 px-1.5 md:px-4 hover:opacity-50 transition"
              to="/projects"
              active-class="link-active"
            >
              Projects
            </router-link>
            <router-link
              class="py-1 px-1.5 md:px-4 hover:opacity-50 transition"
              to="/contact"
              active-class="link-active"
            >
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
