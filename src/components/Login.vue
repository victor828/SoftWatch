<script setup lang="ts">
const prop = defineProps([
  "title",
  "pcuenta1",
  "pcuenta2",
  "reference",
  "data",
]);
import ButtonHead from "./ButtonHead.vue";
import centralData from "../data/central.json";
import { ref } from "vue";
import { number, string } from "astro/zod";
// import { getCentralData } from "../utils/utils";

const user = ref("admin");
const pass = ref(123456);

const data = centralData.filter((u) => {
  if (u.nombre == user.value && u.contraseña === pass.value) {
    console.log("funciono");
    return u.nombre;
  } else {
    console.log("no funciono");
  }
});
console.log(data);

// console.log(getCentralData(String(user), String(pass)));
</script>

<template>
  <section
    class="border border-black w-fit justify-items-center grid p-8 rounded-lg gap-4 px-6">
    <div>
      <svg
        width="50"
        height="50"
        viewBox="0 0 534 274"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_65418_1248)">
          <path
            d="M505.014 154L462.686 229.205C458.397 236.825 447.661 237.447 442.521 230.374L398.265 169.481C393.061 162.32 382.159 163.067 377.98 170.871L346.741 229.204C342.639 236.864 332.009 237.761 326.682 230.896L267.014 154L212.5 81.4996C178.5 40.5 147.377 -1.81492 86 58.5002C29.0145 114.5 97.9998 158 150 158C244.5 158 247 245.5 169.014 245.5C33.3696 245.5 26.6811 212.667 29.0144 154"
            stroke="black"
            stroke-width="32"
            stroke-linecap="round"></path>
        </g>
        <defs>
          <filter
            id="filter0_dd_65418_1248"
            x="0.667969"
            y="0.412354"
            width="532.349"
            height="273.088"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="6"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_65418_1248"></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_65418_1248"
              result="effect2_dropShadow_65418_1248"></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_65418_1248"
              result="shape"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
    <!-- <p>{{ title }}</p> -->
    <h1 class="text-2xl">{{ prop.title }}</h1>
    <!-- Obtener la data de los input para poder ver si estan en la base de datos -->
    <article>
      <input v-model="user" type="text" placeholder="Username" />
    </article>
    <article>
      <input v-model="pass" type="password" placeholder="Password" />
    </article>
    <div class="w-full">
      <ButtonHead title="Inicicar Sesion" class="w-full py-2" />
      <p class="text-xs text-center pt-2">
        {{ prop.pcuenta1 }}
        <a class="opacity-75" v-bind:href="reference">{{ prop.pcuenta2 }}</a>
      </p>
    </div>
  </section>
  <div class="grid border border-black p-2 h-fit justify-center w-4/6">
    <p>{{ user }}</p>
    <p>{{ pass }}</p>
    <p class="w-fit">{{ data }}</p>
  </div>
</template>

<style scoped>
input {
  color: black;
  padding: 0.5rem;
  padding-inline: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
  &&::placeholder {
    color: black;
  }
}
</style>
