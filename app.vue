<template>
  <div id="app">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Playfair Display";
  font-optical-sizing: auto;
  font-weight: 400; // Adjust weights as needed
  font-style: normal;
  src: url("/fonts/PlayfairDisplay-VariableFont_wght.ttf") format("truetype");
}

#app {
  font-family: "Playfair Display", serif;
  .light-text {
    color: #fdfaf9;
  }
}
</style>
