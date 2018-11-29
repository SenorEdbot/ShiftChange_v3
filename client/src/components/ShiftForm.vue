<template>
  <div class="row">
    <div class="col-8 offset-2">
      <h2>New Shift</h2>
      <form class="clearfix mb-4" @submit.prevent="createShift">
        <div class="form-group">
          <label for="shift-name">Name</label>
          <input v-model="name" type="text" id="shift-name" class="form-control" aria-describedby="shift-name" placeholder="Enter Name">
        </div>
        <div class="form-group">
          <label for="shift-reason">Reason</label>
          <input v-model="reason" type="text" id="shift-reason" class="form-control" aria-describedby="shift-reason" placeholder="Enter Reason">
        </div>
        <div class="form-group">
          <label for="shift-date">Shift Date</label>
          <input v-model="date" type="date" id="shift-date" class="form-control" aria-describedby="shift-date" placeholder="12/12/2000">
        </div>
        <div class="form-group">
          <label for="shift-duration">Shift Duration</label>
          <input v-model="duration" type="number" id="shift-duration" class="form-control" aria-describedby="shift-duration" placeholder="Enter Duration">
        </div>
        <div class="form-group">
          <label for="shift-role">Shift Role</label>
          <input v-model="role" type="text" id="shift-role" class="form-control" aria-describedby="shift-role" placeholder="Enter Role">
        </div>
        <div class="form-group">
          <label for="shift-priority">Shift Priority</label>
          <input v-model="priority" type="text" id="shift-priority" class="form-control" aria-describedby="shift-priority" placeholder="Enter Priority">
        </div>
        <button id="submit" class="btn btn-primary float-right">Submit</button>
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
