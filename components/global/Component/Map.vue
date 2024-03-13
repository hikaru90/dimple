<script setup lang="ts">
  import useBrevo from "~~/composables/useBrevo";
  import defaults from "~/lib/defaults";

  const { sendMail } = useBrevo();
  const config = useRuntimeConfig();

  const props = withDefaults(
    defineProps<{
      component?: object;
    }>(),
    {
      component: {
        content: defaults.find((el) => el.type === "map").content,
      },
    }
  );

  const state = reactive({});

  const getCurrentImageUrl = (filename) => {
    const img = useImage();
    const imgUrl = img(
      `${config.SERVER_URL}/api/files/${props.component.collectionName}/${props.component.id}/${filename}`,
      {
        format: "webp",
      }
    );
    return imgUrl;
  };
</script>

<template>
  <div
    style="background: linear-gradient(30deg, rgba(2, 55, 41, 1) 0%, rgba(0, 31, 31, 1) 60%)"
    class="py-24 text-lightGrey"
  >
    <div class="max-container">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-[25%] flex flex-col gap-10 py-16 text-sm">
          <div class="flex items-start">
            <div class="flex-shrink-0 mr-2 flex items-center justify-center w-20 h-10">
              <nuxt-icon name="icon-marker" class="text-6xl text-gold" />
            </div>
            <div v-html="$mdRenderer.set({ html: true }).render(props.component.content?.address)">
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0  mr-2 flex items-center justify-center w-20 h-10">
              <nuxt-icon name="icon-phone" class="text-6xl text-gold" />
            </div>
            <div>
              <a :href="'mailto:'+props.component.content?.mail" class="underline">{{ props.component.content?.mail }}</a><br/>
              {{ props.component.content?.openinghours }}
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0 mr-2 flex items-center justify-center w-20 h-10">
              <nuxt-icon name="icon-mail" class="text-5xl text-gold" />
            </div>
            <div>
              <a :href="'tel:'+props.component.content?.phone" class="underline">{{ props.component.content?.phone }}</a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[30%] h-80 lg:h-auto relative flex-grow-0 mb-4 lg:mb-0 lg:px-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164.32407245057905!2d9.165644332172693!3d48.77835525346548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb0b6da444be0c8d%3A0x547923c145ee24a2!2sDimple%20Goertz%20%7C%20Paar-%20und%20Sexualtherapie!5e0!3m2!1sen!2sde!4v1710286608165!5m2!1sen!2sde" class="overflow-hidden rounded w-full h-full" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div :style="[
            { backgroundImage: `url(${getCurrentImageUrl(props.component?.content.image)})` },
          ]" class="w-full lg:w-[45%] h-72 lg:h-auto bg-cover rounded lg:px-3">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .input-class {
    @apply border border-gray-200 rounded px-3 py-1 w-full;
  }
</style>
