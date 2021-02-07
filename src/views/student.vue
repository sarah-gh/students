<template>
    <div>
        <div v-for="student in students" :key="student">
            <div v-if="$route.params.id == student.number">
            <ul class="student">
                <li>
                    {{ student.name }}
                </li>
                 <li>
                    {{ student.family }}
                </li>
                 <li>
                    {{ student.number }}
                </li>
                 <li>
                    {{ student.address }}
                </li>
                <li>
                    {{ student.year }}
                </li>
                <li>
                    {{ student.phone }}
                </li>
            </ul>
                
            </div>
        </div>
        <button @click="back">back to list</button>
    </div>
</template>

<script>
import students from '@/data/students'
export default {
    name: 'Student',
    data () {
        return {
            students
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.student{
    background-color: white;
    width: 70%;
    margin: 0 auto;
    padding:20px;
}
</style>