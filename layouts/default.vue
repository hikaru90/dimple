<script setup lang="ts">
  import { useAuthStore } from "~/store/auth";
  const authStore = useAuthStore();
  const config = useRuntimeConfig();

  const isDev = computed(() => {
    // return process.dev
    return config.ENV;
  });
</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <!-- <template v-if="!isDev">
      <Placeholder />
    </template>
    <template v-else> -->
      <div class="flex flex-col flex-grow">
        <div>
          <EditorBar v-if="authStore.token" />
        </div>
        <div class="flex flex-col flex-grow relative">
          <Menu class="" />
            <slot />
        </div>
      </div>
      <UpButton />
      <Footer />
    <!-- </template> -->
  </div>
</template>
