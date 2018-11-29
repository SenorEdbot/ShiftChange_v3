<template>
  <div class="row">
    <div class="col-8 offset-2">
      <h3>Shifts:</h3>
      <ul id="shift-list" class="list-group">
        <li v-for="shift in shifts" :key="shift.id">
          {{shift.name}} | 
          {{shift.reason}} |
          {{shift.date}} |
          {{shift.duration}} |
          {{shift.role}} |
          {{shift.covered}} |
          {{shift.priority}} |
          {{shift.personResponsible}}
          <button @click="deleteShift(shift.id)" class="btn btn-danger float-right delete">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import shiftService from '@/services/shiftService'

export default {
  name: 'ShiftList',
  data: () => ({
    shifts: []
  }),
  created () {
    this.updateShifts()
  },
  methods: {
    updateShifts () {
      shiftService.all().then((res) => {
        this.shifts = res.data
      })
    },
    deleteShift (id) {
      shiftService.delete(id).then((res) => {
        this.updateShifts()
      })
    }
  }
}
</script>

<style scoped>

</style>
