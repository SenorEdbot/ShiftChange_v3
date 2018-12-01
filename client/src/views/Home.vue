<template>
  <div>
    <mdb-carousel :interval="0" showControls>
      <mdb-carousel-item alt="First slide">
        <shift-list />
      </mdb-carousel-item>
      <mdb-carousel-item alt="Second slide">
        <create-employee />
      </mdb-carousel-item>
      <mdb-carousel-item class="about" alt="Third slide">
        <h1>This is an about page</h1>
      </mdb-carousel-item>
      <mdb-carousel-item alt="Fourth slide">
        <shift-form />
      </mdb-carousel-item>
    </mdb-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import ShiftList from '@/components/ShiftList.vue'

import CreateEmployee from '@/components/CreateEmployee'

import ShiftForm from '@/components/ShiftForm'

// import components from '@/components'

import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue'

export default {
  name: 'CarouselPage',
  components: {
    // components,
    ShiftList,
    CreateEmployee,
    ShiftForm,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption
  },
};

</script>
