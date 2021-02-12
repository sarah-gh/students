<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>index</th>
          <th>photo</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>number</th>
          <th>GPA</th>
        </tr>
      </thead>
      <tbody>
          <myStudent v-for="(student, index) in students" :key='index' :student="student" :index="index"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import students from "@/data/students"
import myStudent from "../components/myStudent.vue"
  export default {
    data() {
      return {
        fields: [
          'index',
          {
            key: 'photo',
            sortable: false
          },
          {
            key: 'name',
            sortable: true
          },
          {
            key: 'family',
            sortable: true
          },
          {
            key: 'number',
            sortable: false
          },
          {
            key: 'gpa',
            label: 'GPA',
            sortable: true,
          }
        ],
        students
      }
    },
    components: {
      myStudent
    },
    // methods: {
    //   routeQuery(item) {
    //     this.$router.push({ path: `/students/${item.number}`, query: item })
    //   }
    // }
  }
</script>


<style lang="scss">
img{
    width:100px;
    height: 100px;
}

table{
  background-color:rgba(255, 255, 255, 0);
  width: 80%;
  margin:100px auto;
  thead{
    background-color : #0000;
        font-size:20px;
    tr{
      width: 100%;
      height:100px;
      background-color:rgba(255, 255, 255, 0.452);
      th{
        align-items: center;
        vertical-align: inherit;
        border-top: 0px solid #dee2e6;
        border-left: 1px solid #dee2e6;
      }
      th[aria-colindex="1"]{
        width: 80px;
      }
      th[aria-colindex="2"]{
        width: 200px;
      }
    }
  }
  tbody{
    background-color:rgb(255, 255, 255);
    
    tr{
      background-color:rgb(255, 255, 255);
      td{
        vertical-align: inherit;
        font-size:20px;
        border-top: 1px solid #dee2e6;
      }
      .photo{
        padding: 10px;
      }
      .link{
          color: rgb(175, 26, 245);
          cursor: pointer;
          &:hover{
            color: rgb(103, 0, 151);
            text-decoration: none;
          }
        }
      td[aria-colindex="1"]{
        color:gray;
        border-right: 1px solid #dee2e6;
      }
    }
  }
}

</style>
