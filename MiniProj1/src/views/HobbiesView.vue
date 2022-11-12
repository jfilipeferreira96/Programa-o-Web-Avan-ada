<template>
  <section>
    <div class="text-center">
      <h2 class="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">Some of my Hoobies</h2>
      <h3 class="text-2xl py-3 dark:text-white md:text-3xl">In my spare time I enjoy the following activities</h3>
    </div>

    <div class="container py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3">
          <div class="h-full text-center">
            <img alt="coffee" class="h-64 block mx-auto" src="../assets/takeaway-cup-dynamic-color.png" />
            <p class="leading-relaxed"></p>
            <span class="inline-block h-1 w-28 rounded bg-teal-600 mt-6 mb-6"></span>
            <h2 class="text-2xl py-3 dark:text-white md:text-3xl">Coffee with Friends</h2>
          </div>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3">
          <div class="h-full text-center">
            <img alt="testimonial" class="h-64 block mx-auto" src="../assets/gym-dynamic-color.png" />
            <p class="leading-relaxed"></p>
            <span class="inline-block h-1 w-28 rounded bg-teal-600 mt-6 mb-6"></span>
            <h2 class="text-2xl py-3 dark:text-white md:text-3xl">Gym</h2>
          </div>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3">
          <div class="h-full text-center">
            <img alt="tech" class="h-64 block mx-auto" src="../assets/computer-dynamic-color.png" />
            <p class="leading-relaxed"></p>
            <span class="inline-block h-1 w-28 rounded bg-teal-600 mt-6 mb-6"></span>
            <h2 class="text-2xl py-3 dark:text-white md:text-3xl">Tech</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HobbiesView",
  components: {},
};
</script>
