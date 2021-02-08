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
                     <li>
                        {{ student.gpa }}
                    </li>
                    
                </ul>
                
            </div>
        </div>
        <button @click="back">back to list</button>
    </div>
</template>

<script>
export default {
    name: 'Std',
    props:{
        students: Array
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
       
    }
}
</script>

<style lang="scss" scoped>
.student{
    background-color: white;
    width: 70%;
    margin: 0 auto;
    padding:20px;
}

h4,
        .label {
            color: #94aab0;
            margin-bottom: 10px;
        }
        .label {
            display: block;
        }
        input,
        textarea,
        select,
        label {
            color: #2b3e51;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="number"],
        input[type="tel"],
        textarea,
        select,
        legend {
            display: block;
            width: 100%;
            appearance: none;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="number"],
        input[type="tel"],
        textarea,
        select {
            padding: 12px;
            border: 1px solid #cfd9db;
            background-color: #ffffff;
            border-radius: 0.25em;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus,
        input[type="number"]:focus,
        input[type="tel"]:focus,
        textarea:focus,
        select:focus {
            outline: none;
            border-color: #2c3e50;
            box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
        }
        textarea {
            min-height: 200px;
            resize: vertical;
            overflow: auto;
        }
        .textarea_label {
            margin: 40px 0 0 0;
        }
        .error {
            border-color: #e94b35 !important;
            box-shadow: outset 0 1px 1px rgba(228, 0, 0, 0.205);
        }
        .counter {
            background-color: #b8bdbd;
            position: absolute;
            right: 0px;
            top: 0px;
            font-size: 10px;
            padding: 4px;
        }
        button {
            margin-bottom: 50px;
        }
</style>
