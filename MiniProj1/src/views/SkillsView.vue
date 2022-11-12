<template>
  <section>
    <div class="text-center">
      <h2 class="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">Some of my Skills</h2>
      <h3 class="text-2xl py-3 dark:text-white md:text-3xl">
        Since the beginning of this journey I have been acquiring a particularly wide array of skills
      </h3>
    </div>
    <div class="lg:flex gap-10">
      <div class="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-white flex-1">
        <img src="../assets/design.png" class="h-52 block mx-auto" alt="Frontend" />
        <h3 class="text-3xl font-medium pt-8 pb-2">Front-end</h3>
        <p class="text-gray-800 font-medium py-1">React.Js</p>
        <p class="text-gray-800 font-medium py-1">Vue.Js</p>
        <p class="text-gray-800 font-medium py-1">Html</p>
        <p class="text-gray-800 font-medium py-1">CSS/SCSS</p>
      </div>
      <div class="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-white flex-1">
        <img src="../assets/locker-dynamic-color.png" class="h-52 block mx-auto" alt="Backend" />
        <h2 class="text-3xl font-medium pt-8 pb-2">Back-end</h2>
        <p class="text-gray-800 font-medium py-1">Node.Js</p>
        <p class="text-gray-800 font-medium py-1">Django</p>
        <p class="text-gray-800 font-medium py-1">PHP</p>
      </div>
      <div class="text-center shadow-lg p-9 rounded-xl my-10 dark:bg-white flex-1">
        <img src="../assets/code.png" class="h-52 block mx-auto" alt="Others" />
        <h3 class="text-3xl font-medium pt-8 pb-2">Others</h3>
        <p class="text-gray-800 font-medium py-1">Git</p>
        <p class="text-gray-800 font-medium py-1">SQL</p>
        <p class="text-gray-800 font-medium py-1">Figma</p>
        <p class="text-gray-800 font-medium py-1">Photoshop</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsView",
  components: {},
};
</script>
