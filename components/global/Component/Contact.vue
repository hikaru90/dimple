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
        content: defaults.find((el) => el.type === "contact").content,
      },
    }
  );

  const state = reactive({
    form: [
      {
        name: "firstName",
        validation: "required",
        label: "Vorname",
        type: "text",
        value: "",
        class: "w-full lg:w-1/2",
        error: "",
      },
      {
        name: "lastName",
        validation: "required",
        label: "Nachname",
        type: "text",
        value: "",
        class: "w-full lg:w-1/2",
        error: "",
      },
      {
        name: "mail",
        validation: "required",
        label: "E-Mail",
        type: "text",
        value: "",
        class: "w-full lg:w-1/2",
        error: "",
      },
      {
        name: "phone",
        validation: "",
        label: "Telefonnummer",
        type: "text",
        value: "",
        class: "w-full lg:w-1/2",
        error: "",
      },
      {
        name: "message",
        validation: "required",
        label: "Nachricht",
        type: "textarea",
        value: "",
        class: "w-full",
        error: "",
      },
    ],
    pending: false,
    submitted: false,
    success: false,
  });

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

  const validateForm = () => {
    let errors = [];
    for (let input of state.form) {
      if (input.validation === "required") {
        if (!input.value) {
          input.error = "Füllen Sie bitte dieses Feld aus.";
          errors.push(1);
        } else input.error = "";
      }
    }
    if (errors.length > 0) return false;
    return true;
  };

  const getFormData = () => {
    let result = {};
    state.form.forEach((field) => {
      result[field.name] = field.value;
    });
    return result;
  };

  const handleSubmit = async () => {
    state.pending = true;
    try {
      const formIsValid = validateForm();
      if (!formIsValid) return;

      await sendMail("contactForm", props.component.content?.recipient, getFormData());
      state.pending = false;
      state.submitted = true;
      state.success = true;
    } catch (err) {
      console.log("error sending contact form", err);
      state.pending = false;
      state.submitted = true;
      state.success = false;
    }
  };
</script>

<template>
  <div class="mb-28">
    <div class="max-container">
      <div class="flex items-center justify-center">
        <h2 class="font-bold text-lg md:text-xl lg:text-2xl mb-16">
          {{ props.component.content?.heading }}
        </h2>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div
          :style="[
            { backgroundImage: `url(${getCurrentImageUrl(props.component.content.image)})` },
          ]"
          class="flex-grow bg-cover bg-[center_top_40%] lg:bg-center w-full h-60 lg:h-auto lg:w-1/3 lg:mt-1 mb-5 rounded"
        ></div>
        <div class="-ml-[3%] -mr-[5%] lg:mx-auto w-auto lg:w-2/3">
          <div
            :style="[{ backgroundImage: `url('/postit-5.png')`, backgroundSize: '100% 100%' }]"
            class="bg-no-repeat pl-[8%] pr-[10%] pt-[6%] pb-[20%] md:py-5 md:pt-10 md:pb-16 md:pr-20 md:pl-16"
          >
            <template v-if="!state.submitted">
              <div class="flex flex-wrap -mx-3">
                <div
                  v-for="(input, index) in state.form"
                  :key="'formElement' + index"
                  :class="[input.class]"
                  class="px-2 mt-3"
                >
                  <label :for="'input' + index" class="text-sm font-bold block ml-1"
                    >{{ input.label }}
                    <template v-if="input.validation === 'required'"> </template>
                    <template v-else> (optional) </template>
                  </label>
                  <template v-if="input.type === 'text'">
                    <input
                      :id="'input' + index"
                      type="text"
                      v-model="input.value"
                      @input="validateForm"
                      :class="[input.error.length ? 'border !border-red' : '']"
                      class="input-class"
                    />
                  </template>
                  <template v-if="input.type === 'textarea'">
                    <textarea
                      :id="'input' + index"
                      v-model="input.value"
                      @input="validateForm"
                      class="input-class min-h-[200px]"
                      :class="[input.error ? 'border !border-red' : '']"
                    ></textarea>
                  </template>
                  <div
                    v-if="input.error"
                    class="mt-1 rounded text-red bg-lightRed/60 px-2 py-[2px] text-sm"
                  >
                    {{ input.error }}
                  </div>
                </div>
                <div class="flex justify-end w-full mr-3 mt-3">
                  <button
                    @click="handleSubmit"
                    class="border-2 border-gold rounded flex items-center px-3 py-2"
                  >
                    <div class="">Nachricht senden</div>
                    <div
                      class="flex items-center justify-center bg-gradient-to-b from-gold via-lightGold to-darkGold rounded-full ml-2 w-4 h-4"
                    >
                      <nuxt-icon name="icon-caret-right" class="text-sm text-black" />
                    </div>
                  </button>
                </div>
              </div>
            </template>
            <template v-else>
                <div class="h-60 flex flex-col items-start justify-center">
                  <template v-if="state.pending">
                    <div class="animate-spin">
                      <nuxt-icon name="icon-pending" class="text-4xl text-black animate-spin" />
                    </div>
                  </template>
                  <template v-else>
                    <template v-if="state.success">
                      <div class="font-heading text-2xl mb-2">Vielen Dank!</div>
                      <p class="max-w-[24em]">
                        Ihre Nachricht ist bei mir eingegangen. Ich melde mich sobald wie möglich bei Ihnen.
                      </p>
                    </template>
                    <template v-else>
                      <div class="font-heading text-2xl mb-2 text-red">Oh!</div>
                      <p class="max-w-[24em]">
                        Bei dem Versand Ihrer Nachricht ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut. Falls der Fehler bestehen bleibt, senden Sie mir bitte eine E-Mail an <a href="mailto:kontakt@dimplegoertz.de" class="underline">kontakt@dimplegoertz.de</a>.
                      </p>
                    </template>
                  </template>
              </div>
            </template>
          </div>
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
