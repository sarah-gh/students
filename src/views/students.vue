<template>
  <div>
    <b-table striped hover :items="students">
      <template v-slot:cell(name)="data">
        <router-link :to="`/students/${data.item.number}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import students from "@/data/students"
  export default {
    data() {
      return {
        // fields: [
        //   {
        //     // A column that needs custom formatting,
        //     // calling formatter 'fullName' in this app
        //     key: 'name',
        //     label: 'Full Name',
        //     formatter: 'fullName'
        //   },
        //   // A regular column
        //   'age',
        //   {
        //     // A regular column with custom formatter
        //     key: 'sex',
        //     formatter: value => {
        //       return value.charAt(0).toUpperCase()
        //     }
        //   },
        //   {
        //     // A virtual column with custom formatter
        //     key: 'birthYear',
        //     label: 'Calculated Birth Year',
        //     formatter: (value, key, item) => {
        //       return new Date().getFullYear() - item.age
        //     }
        //   }
        // ],
        students
      }
    }
    // methods: {
    //   fullName(value) {
    //     return `${value.first} ${value.last}`
    //   }
    // }
  }
</script>


<style scoped>
ul {
  width: 80%;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
}

.table{
  background-color:white;
  width: 70%;
  margin:0 auto;
}
</style>
