<template>
  <div class="row">
    <div class="col-8 offset-2">
      <h3>Shifts:</h3>
      <!-- <ul id="shift-list" class="list-group">
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
      </ul> -->
      <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Role</th>
              <th>Covered</th>
              <th>Priority</th>
              <th>Person Responsible</th>
              <th>Claim</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shift in shifts" :key="shift.id">
              <td>{{ shift.id }}</td>
              <td>{{ shift.name }}</td>
              <td>{{ shift.reason }}</td>
              <td>{{ shift.date }}</td>
              <td>{{ shift.duration }}</td>
              <td>{{ shift.role }}</td>
              <td>{{ shift.covered }}</td>
              <td>{{ shift.priority }}</td>
              <td>{{ shift.personResponsible }}</td>
              <td>
                <b-btn>Claim</b-btn>
              </td>
              <td>
                <b-btn>Edit</b-btn>
              </td>
              <td>
                <b-btn @click="deleteShift(shift.id)" class="btn btn-danger float-right delete">x</b-btn>
              </td>
            </tr>
          </tbody>
        </table>
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
