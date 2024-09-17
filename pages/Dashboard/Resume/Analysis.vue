<template>
  <v-container class="pa-0">
    <!-- Row 2 -->
    <v-row class="mt-7">
      <v-col cols="12">
        <v-card class="cardItem pa-6">
          <div class="d-flex flex-column align-start w-50 justify-space-between secondCardBigHeaderText">
            <p class="">TOP ISSUES</p>
            <p class="">Minim dolor in amet nulla laboris enim dolore consequatt.</p>
          </div>
          <div class="w-100 d-flex justify-space-end mt-5">
            <v-btn class="pa-0 ml-auto text-capitalize" variant="text" color="blue-darken-4">Show More</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

       <!-- Row 2 -->
       <v-row class="mt-7">
      <v-col cols="12">
        <v-card class="cardItem pa-6">
          <div class="d-flex flex-column align-start w-50 justify-space-between secondCardBigHeaderText">
            <p class="">CONTENT CATEGORY</p>
            <p class="">Minim dolor in amet nulla laboris enim dolore consequatt.</p>
          </div>
          <div class="w-100 d-flex justify-space-end mt-5">
            <v-btn class="pa-0 ml-auto text-capitalize" variant="text" color="blue-darken-4">Show More</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>
<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: ["auth"],
})
</script>

<style scoped>
.secondCardBigHeaderText p:last-child {
  color: #383838;
  /* Body/body1 */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  /* 143.75% */
  letter-spacing: 0.5px;
}

.secondCardBigHeaderText p:first-child {
  color: var(--gray-900, #101828);
  /* Text lg/Medium */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.secondCardSmallBodyText {
  color: #383838;
  /* Body/body1 */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  /* 143.75% */
  letter-spacing: 0.5px;
}

.secondCardSmallHeaderHeading p:first-child {
  color: #000;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 37px;
}

.secondCardSmallHeaderHeading p:last-child {
  color: #383838;
  /* Body/body1 */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  /* 143.75% */
  letter-spacing: 0.5px;
}

.cardHeadBigHeading i {
  font-size: 1em;
}

.cardHeadBigHeading {
  color: #000;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
}

.cardHeadBigDescription {
  color: #393939;
  /* Body/body1 */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  /* 143.75% */
  letter-spacing: 0.5px;
}

.grapicUpPercent {
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
}

.cardItem {
  border-radius: 20px;
  border: 1px solid var(--gray-200, #EAECF0);
  background: var(--base-white, #FFF);
  /* Shadow/sm */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
}

.removePadding {
  padding: 0;
}

.sosialMediaItem {
  border-bottom: 1px solid var(--gray-200, #EAECF0);
}

.rowItemBadge {
  display: flex;
  color: var(--success-700, #027A48);
  text-align: center;
  /* Text xs/Medium */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  /* Body */
  border-radius: 16px;
  background: var(--success-50, #ECFDF3);
  padding: 2px 8px 2px 6px;
  width: max-content;
}

.rowItemValue {
  color: var(--gray-500, #667085);
  /* Text sm/Normal */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.rowItemHeading {
  color: var(--gray-900, #101828);
  /* Text sm/Medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  /* font-weight: 500; */
  line-height: 20px;
}

.headingMini {
  color: var(--gray-900, #101828);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}

.buttonNoShadow {
  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  border: 1px solid var(--gray-300, #D0D5DD);
  color: var(--gray-700, #344054);
  /* Text sm/Medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  /* font-weight: 500; */
  line-height: 20px;
  text-transform: none;
}

.buttonRounded {
  border-radius: 8px;
}

.buttonInsights {
  /* border-radius: 8px; */
  border: 1px solid #0077B6;
  background: #0077B6;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  /* padding: 10px 16px; */
  color: var(--base-white, #FFF);
  /* Text sm/Medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  /* font-weight: 500; */
  line-height: 20px;
}

.header {
  color: var(--gray-900, #101828);
  /* Display sm/Medium */
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  /* font-weight: 500; */
  line-height: 38px;
}

.headerDescription {
  color: var(--gray-500, #667085);
  /* Text md/Normal */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.buttonContainer {
  width: max-content;
}
</style>