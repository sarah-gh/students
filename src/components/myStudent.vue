<template>
    <tr>
        <td aria-colindex="1">{{index + 1}}</td>
        <td aria-colindex="2" class="photo"><img :src="`${mystudent.photo}`"></td>
        <td aria-colindex="3" class="link" @click="routeQuery(student)">{{mystudent.name}}</td>
        <td aria-colindex="4">{{mystudent.family}}</td>
        <td aria-colindex="5">{{mystudent.number}}</td>
        <td aria-colindex="6">{{mystudent.gpa}}</td> 
    </tr>
</template>

<script>
export default {
    name: 'myStudent',
    data() {
        return {
            mystudent: {
                photo: '',
                name: '',
                family: '',
                number: '',
                gpa: '',
                address:'',
                phone: '',
                year: '',
                change: Boolean
            },
        };
    },
    props: {
        student: Object,
        index: Number
    },
    mounted() {
        this.mystudent.name = this.student.name;
        this.mystudent.family = this.student.family;
        this.mystudent.photo = this.student.photo;
        this.mystudent.number = this.student.number;
        this.mystudent.gpa = this.student.gpa;
        this.mystudent.phone = this.student.phone;
        this.mystudent.year = this.student.year;
        this.mystudent.address = this.student.address;
        this.mystudent.change = this.student.change;
        
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