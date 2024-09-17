<template>
    <div class="marquee-container">
      <div class="marquee-text font-weight-bold">
        <span class="text-white">RadinaFood </span> - Kulit Tahu Terbaik, Diproduksi dengan Ketelitian untuk Kualitas Sempurna.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    }
  };
  </script>
  
  <style>
  .marquee-container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px;
  }
  
  .marquee-text {
    display: inline-block;
    font-size: 16px;
    color: #fff;
    animation: marqueeAnimation 20s linear infinite;
  }
  
  .highlight {
    color: #FDD835; /* Warna teks yang ditonjolkan */
  }
  
  @keyframes marqueeAnimation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  