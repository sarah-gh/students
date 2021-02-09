<template>
    <div>
        <div v-if="!check">
            <Std :students="students" />
            <button class="btn btn-info" @click="check = !check"> change </button>
        </div>
        <div v-if="check">
            <Change :students="students" />
        </div>
        
    </div>
</template>

<script>
import students from '@/data/students'
import Std from '../components/std.vue'
import Change from '../components/change.vue'
export default {
    name: 'Student',
    data () {
        return {
            students,
            check: false,
        }
    },
    components: {
        Std,
        Change
    }
}
</script>
