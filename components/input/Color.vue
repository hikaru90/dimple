<script setup lang="ts">
  import { useSidebarStore } from "~/store/sidebar";
  import { storeToRefs } from "pinia";
  const sidebarStore = useSidebarStore();
  const { componentCss, viewports, viewport } = storeToRefs(sidebarStore);
  const { saveCssClasses, setProperty, deleteProperty } = sidebarStore

  const property = 'color'

  const isRealColor = computed(() => {
    const entry = componentCss.value[viewport.value]?.find((entry) => entry.hasOwnProperty(property))
    if(entry)return true
    return false
  })

  const currentColor = computed(() =>{
    const entry = componentCss.value[viewport.value]?.find((entry) => entry.hasOwnProperty(property))
    if(entry) return entry[property]
  })

</script>

<template>
  <div class="">
    <h2 class="text-xs mb-2 opacity-40">
      Font Color
    </h2>
    <InputColorPicker :color="currentColor" @deleteColor="deleteProperty(property)" @setColor="setProperty(property, $event)" :class="[ isRealColor ? 'opacity-100' : 'opacity-20' ]" />
  </div>
</template>
