<template>
  <div>
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
  </div>
</template>

<script>

// @ is an alias to /src
import ShiftList from '@/components/ShiftList.vue'

import ShiftForm from '@/components/ShiftForm'

import CreateEmployee from '@/components/CreateEmployee'

export default {
  name: 'Home',
  components: {
    ShiftList
  },
  name: 'NewShift',
  components: {
    ShiftForm
  },
  name: 'NewEmployee',
  components: {
    CreateEmployee
  },
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
</script>
