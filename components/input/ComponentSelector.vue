<script setup lang="ts">
  import defaults from '~/lib/defaults'
  import { useSidebarStore } from "~/store/sidebar";
  import { useContentStore } from "~/store/content";
  import { storeToRefs } from "pinia";
  import EventBus from "~/plugins/mitt";
  const sidebarStore = useSidebarStore();
  const contentStore = useContentStore();
  const { setComponentContent, setComponentContentType, saveContent, saveContentType } = sidebarStore;
  const { decapitalize } = contentStore;
  const { componentContent, componentContentType } = storeToRefs(sidebarStore);

  const changeType = (componentType:string) => {
    setComponentContentType(componentType)
    setComponentContent(defaults.find(el => el.type === decapitalize(componentType)).content)
    saveContent(true)
    setTimeout(() => {
      saveContentType(true)
      EventBus.emit("refresh");
    }, 500);
  }

  const files = Object.keys(
    import.meta.glob("~/components/global/Component/*.vue", { as: "raw", eager: true })
  ).map((path) => {
    const array = path.split("/");
    return array[array.length - 1].split(".")[0];
  });
</script>
<template>
  <div class="p-4">
    <!-- <select @change="changeType" :value="componentContentType" name="contentType" id="contentTypeSelector" class="rounded-sm bg-transparent border border-darkOffwhite border-opacity-20 py-1 px-2">
      <option value="container" class="bg-black">Container</option>
      <option value="markdown" class="bg-black">Markdown</option>
    </select> -->
    <template v-for="(component, index) in files" :key="'component' + index">
      <button @click="changeType(component)" class="flex w-full items-center gap-2" :class="[{ 'bg-white bg-opacity-20 rounded': componentContentType === component }]">
        <nuxt-icon :name="`icon-${component}`" style="font-size: 60px;" class="text-lightBlue" />
        <div>
          {{ component }}
        </div>
      </button>
    </template>
  </div>
</template>
