<template>
  <div class="aaa">
    <b-table striped hover :items="students" :fields="fields">
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template v-slot:cell(photo)="data">
        <img :src="`${data.value}`">
      </template>
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
    }
  }
</script>


<style lang="scss">
.aaa{
  height: 100%;
}
ul {
  width: 80%;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
}

img{
    width:100px;
    height: 100px;
}

.table{
  background-color:rgba(255, 255, 255, 0);
  width: 80%;
  margin:0 auto;
  thead{
    background-color : #0000;
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
        width: 180px;
      }
    }
  }
  tbody{
    background-color:rgb(255, 255, 255);
    tr{
      background-color:rgb(255, 255, 255);
      td{
        vertical-align: inherit;
        font-size: 20px;
      }
      td[aria-colindex="1"]{
        color:gray;
        border-right: 1px solid #dee2e6;
      }
    }
  }
}

thead{
  background-color : #0000
}
</style>
