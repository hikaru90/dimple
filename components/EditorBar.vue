<script setup>
  import { useAuthStore } from "~/store/auth";
  import { useContentStore } from "~/store/content";
  import { useSidebarStore } from "~~/store/sidebar";
  const authStore = useAuthStore();
  const contentStore = useContentStore();
  const { logout } = authStore;
  const sidebarStore = useSidebarStore();
  const { setComponentName } = sidebarStore

  const data = reactive({
    modalVisible: false,
  });

  const handleModalVisibility = (payload) => {
    data.modalVisible = payload;
  };

</script>
<template>
  <div class="bg-black text-darkOffwhite py-4">
    <div class="max-container">
      <div class="flex items-center justify-between">
        <div>
          {{ authStore?.user?.name }}
        </div>
        <div class="flex items-center">
          <button 
            @click="navigateTo('/')"
            class="rounded-sm border border-lightBlue px-3 py-1 mx-2"
          >
            Home
          </button>
          <button
            @click="
              contentStore.$patch({
                debugVisible: !contentStore.debugVisible,
              })
            "
            class="rounded-sm border border-lightBlue px-3 py-1 mx-2"
          >
            Debug
          </button>
          <!-- <button
            @click="navigateTo('/seiten')"
            class="rounded-sm border border-lightBlue px-3 py-1 mx-2"
          >
            Seiten bearbeiten
          </button> -->
          <button 
            @click="navigateTo('/buchungen')"
            class="rounded-sm border border-lightBlue px-3 py-1 mx-2"
          >
            Buchungen verwalten
          </button>
          <!-- <div
            @click="logout"
            class="text-red border-red rounded-sm cursor-pointer mx-2 flex items-center"
          >
            <nuxt-icon name="icon-trash" class="text-3xl" />
            Logout
          </div> -->
        </div>
      </div>
    </div>

    <div class="fixed bg-lilac w-full h-full top-0 left-0 py-4" v-if="data.modalVisible">
      <div class="max-container">
        <!-- <EditorPage v-if="data.modalVisible" @handleModalVisibility="handleModalVisibility" /> -->
      </div>
    </div>
  </div>
</template>
