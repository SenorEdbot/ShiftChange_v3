<template>
  <div class="row">
    <div class="col-8 offset-2">
      <h2>New Shift</h2>
      <form class="clearfix mb-4" @submit.prevent="createShift">
        <b-form-group label="Name">
          <b-form-input v-model="name" type="text" id="shift-name" aria-describedby="shift-name" placeholder="Enter Name"></b-form-input>
        </b-form-group>
        <b-form-group label="Reason">
          <b-form-input v-model="reason" type="text" id="shift-reason" aria-describedby="shift-reason" placeholder="Enter Reason"></b-form-input>
        </b-form-group>
        <b-form-group label="Shift Date">
          <b-form-input v-model="date" type="date" id="shift-date" aria-describedby="shift-date" placeholder="12/12/2000"></b-form-input>
        </b-form-group>
        <b-form-group label="Shift Duration">
          <b-form-input v-model="duration" type="number" id="shift-duration" aria-describedby="shift-duration" placeholder="Enter Duration"></b-form-input>
        </b-form-group>
        <b-form-group label="Shift Role">
          <b-form-input v-model="role" type="text" id="shift-role" aria-describedby="shift-role" placeholder="Enter Role"></b-form-input>
        </b-form-group>
        <b-form-group label="Priority">
          <b-form-radio-group id="radioPriority" v-model="priority" name="priority" stacked>
            <b-form-radio value="low">Low</b-form-radio>
            <b-form-radio value="high">High</b-form-radio>
            <b-form-radio value="urgent">Urgent</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-btn type="submit" class="btn btn-danger float-right delete">Submit</b-btn>
      </form>
    </div>
  </div>
</template>

<script>
import shiftService from '@/services/shiftService'
export default {
  name: 'ShiftForm',
  data: () => ({
      name: null,
      reason: null,
      date: null,
      duration: null,
      role: null,
      covered: null,
      priority: null,
      personResponsible: null
  }),
  computed: {
    newShift () {
      return {
        name: this.name,
        reason: this.reason,
        date: this.date,
        duration: this.duration,
        role: this.role,
        covered: "false",
        priority: this.priority,
        personResponsible: this.name,
      }
    }
  },
  methods: {
    createShift () {
      shiftService.create(this.newShift).then((res) => {
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>

<style scoped>
</style>