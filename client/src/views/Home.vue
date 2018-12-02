<template>
  <div>
<<<<<<< HEAD
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
=======
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="0"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"
      >
      <shift-list />
      </b-carousel-slide>

      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      >
      <shift-form />
      </b-carousel-slide>
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      >
      <shift-form />
      </b-carousel-slide>

      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      >
      <create-employee />
      </b-carousel-slide>

    </b-carousel>
    <shift-list />
>>>>>>> b370c505947c669e6ac8ebc91569a67c16cd97ca
  </div>
</template>

<script>

// @ is an alias to /src
import ShiftList from '@/components/ShiftList.vue'

<<<<<<< HEAD
import CreateEmployee from '@/components/CreateEmployee'

import ShiftForm from '@/components/ShiftForm'

// import components from '@/components'

import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue'
=======
import ShiftForm from '@/components/ShiftForm'

import CreateEmployee from '@/components/CreateEmployee'
>>>>>>> b370c505947c669e6ac8ebc91569a67c16cd97ca

export default {
  name: 'CarouselPage',
  components: {
<<<<<<< HEAD
    // components,
    ShiftList,
    CreateEmployee,
    ShiftForm,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption
  },
};

=======
    ShiftList
  },
  // name: 'NewShift',
  // components: {
  //   ShiftForm
  // },
  // name: 'NewEmployee',
  // components: {
  //   CreateEmployee
  // },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
>>>>>>> b370c505947c669e6ac8ebc91569a67c16cd97ca
</script>
