<template>
    <div class="student">
        <div v-if="!check">
            <Stu :student="student" @clicked="onClickChild1" @back="back" />
            
        </div>
        <div v-if="check">
            <Change :student="student" @clicked="onClickChild2"/>
        </div>
        
    </div>
</template>

<script>
import Stu from '../components/stu.vue'
import Change from '../components/change.vue'
import { EventBus } from '../main'
export default {
    name: 'Student',
    data () {
        return {
            student: {
                photo: '',
                name: '',
                family: '',
                number: '',
                address: '',
                year: '',
                phone: '',
                gpa: '',
                maxlength: 100,
                change: Boolean
            },
            check: false,
        }
    },
    components: {
        Stu,
        Change
    },
    beforeMount (){
        this.student.name = this.$route.query.name;
        this.student.photo = this.$route.query.photo;
        this.student.family = this.$route.query.family;
        this.student.number = this.$route.query.number;
        this.student.address = this.$route.query.address;
        this.student.year = this.$route.query.year;
        this.student.gpa = this.$route.query.gpa;
        this.student.phone = this.$route.query.phone;
        this.student.change = (/true/i).test(this.$route.query.change);
    },
    mounted() {
        
    },
    methods: {
        onClickChild1 () {
            this.check = !this.check;
        },
        onClickChild2 () {
            this.check = !this.check;
            //let num = this.student.number
            //EventBus.$emit('DATA_PUBLISHED', this.student) 
        },
        back() {
            EventBus.$emit('DATA_PUBLISHED', this.student) 
        }
    },
}
</script>

<style scoped>
.student{
    margin-top:50px
}
</style>