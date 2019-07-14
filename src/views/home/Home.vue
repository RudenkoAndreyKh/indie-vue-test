<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <ul>
      <li>
        <input list="cities" name="citiescities" v-model="fromWhereText" @input="fromWhere" />
        <datalist id="cities">
          <SearchingResults v-for="city in cities" :cityName="city" v-bind:key="city" />
        </datalist>
      </li>
      <li></li>
      <li>
        <date-picker v-model="time3" lang="en" range :shortcuts="shortcuts"></date-picker>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="scss" scoped src="./Home.scss"></style>

