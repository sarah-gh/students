<template>
    <tr>
        <td aria-colindex="1">{{index + 1}}</td>
        <td aria-colindex="2" class="photo"><img :src="`${student.photo}`"></td>
        <td aria-colindex="3" class="link" @click="routeQuery(student)">{{student.name}}</td>
        <td aria-colindex="4">{{student.family}}</td>
        <td aria-colindex="5">{{student.number}}</td>
        <td aria-colindex="6">{{student.gpa}}</td> 
    </tr>
</template>

<script>
export default {
    name: 'myStudent',
    props: {
        student: Object,
        index: Number
    },
    methods: {
      routeQuery(item) {
        this.$router.push({ path: `/students/${item.number}`, query:{
             name:item.name, 
             family:item.family, 
             address:item.address, 
             number:item.number, 
             gpa:item.gpa, 
             photo:item.photo, 
             year:item.year, 
             phone:item.phone,
             change:item.change
        } })
      }
    }
}
</script>