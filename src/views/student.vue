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
                 <form class="vue-form" @submit.prevent="submit">
                    <fieldset>
                        <legend>change</legend>
                        <div>
                            <label class="label" for="lName">family : </label>
                            <input type="text" name="name" minlength="2" id="lname" required="" v-model="student.family" v-on:blur="functionErrorLName">
                            <div class="error-message">
                                <p v-if="errorLName">Please enter a last name of at least 3 characters.</p>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-info" type="submit" @click="formCheck"> send form </button>
                        </div>
                    </fieldset>
                </form>
                <!--<div>
                    <div>
                        <label class="label" for="fName">name : </label>
                        <input type="text" name="name" minlength="8" id="fname" required="" v-model="student.name" :class="{ error: !fName.validfName }">
                        <div class="error-message">
                            <p v-if="errorFName">Please enter a username of 8 numbers.</p>
                        </div>
                    </div>

                    <div>
                        <label class="label" for="lName">family : </label>
                        <input type="text" name="name" minlength="2" id="lname" required="" v-model="student.family" v-on:blur="functionErrorLName" :class="{ error: !lName.validlName }">
                        <div class="error-message">
                            <p v-if="errorLName">Please enter a last name of at least 3 characters.</p>
                        </div>
                    </div>
                    <div>
                        <label class="label" for="number">Phone Number :</label>
                        <input type="tel" name="number" :class="{ error: !number.validNum }" id="number" required="" v-on:blur="functionErrorNumber" v-model="student.phone">
                        <div class="error-message">
                            <p v-if="errorNumber">please enter a valid Phone Number.</p>
                        </div>
                    </div>
                    <div>
                        <label class="label" for="number">GPA :</label>
                        <input type="tel" name="number" :class="{ error: !number.validNum }" id="gpa" required="" v-on:blur="functionErrorNumber" v-model="student.gpa">
                        <div class="error-message">
                            <p v-if="errorNumber">please enter a valid Phone Number.</p>
                        </div>
                    </div>
                    <div>
                        <label class="label" for="number">year :</label>
                        <input type="tel" name="number" :class="{ error: !number.validNum }" id="year" required="" v-on:blur="functionErrorNumber" v-model="student.year">
                        <div class="error-message">
                            <p v-if="errorNumber">please enter a valid Phone Number.</p>
                        </div>
                    </div>
                    <div>
                        <label class="label textarea_label" for="textarea">address:</label>
                        <textarea class="form-control" name="textarea" id="textarea" required="" v-model="student.address" :maxlength="student.maxlength"></textarea>
                        <span class="counter">{{ student.address.length }} / {{ student.maxlength }}</span>
                    </div>
                </div>-->
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
            students,
            errorLName: false,
            submitted: false,
            checkSub: false,
            lNamevalidlName: false,
            errorfamily: false
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
    submit: function(event) {
            if (
                this.student.family.length >= 3) {
                this.submitted = true;
                event.preventDefault();
            } else {
                this.submitted = false;
                event.preventDefault();
            }

        },
        validate: function(type, value) {

            if (this.checkSub == true) {
                this.formCheck();
            }
            if (this.errorfamily == true) {
                this.functionErrorLName();
            }
            
        },
        functionErrorLName: function() {
            if (this.student.family.length >= 3) {
                this.lNamevalidlName = true;
                this.errorfamily = false
            } else {
                this.lNamevalidlName = false;
                this.errorfamily = true;
            }
            this.student.family.length >= 3 ? this.errorLName = false : this.errorLName = true;
        },
       
        formCheck: function() {
            if (this.student.family.length >= 3) {
                this.lNamevalidlName = true
            } else {
                this.lNamevalidlName = false
            }
            this.student.family.length >= 3 ? this.errorLName = false : this.errorLName = true;
            this.checkSub = true;
        }
    },
    watch: {
        
        "student.family": function(value) {
            this.validate("lname", value);
            this.submitted = false;
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
