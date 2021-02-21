<template>
    <div>
                <form class="vue-form" @submit.prevent="submit">
                    <fieldset>
                        <legend>Change</legend>
                        
                        <div>
                            <div>
                                <label class="label" for="fName">name : </label>
                                <input type="text" name="name" minlength="3" id="fname" required="" v-model="fName.value" disabled :class="{ error: !fName.validfName }">
                                <div class="error-message">
                                    <p v-if="errorFName">Please enter a username of 8 numbers.</p>
                                </div>
                            </div>
                            <div>
                                <label class="label" for="lName">family : </label>
                                <input type="text" name="name" minlength="2" id="lname" required="" v-model="lName.value" disabled >
                                <div class="error-message">
                                    <p v-if="errorLName">Please enter a last name of at least 3 characters.</p>
                                </div>
                            </div>
                            
                            <div>
                                <label class="label" for="number">Phone Number :</label>
                                <input type="tel" name="number" :class="{ error: !phone.validphone }" id="number" required="" v-model="phone.value">
                                <div class="error-message">
                                    <p v-if="errorphone">please enter a valid Phone Number.</p>
                                </div>
                            </div>
                            
                            <div>
                                <label class="label textarea_label" for="textarea">Address :</label>
                                <textarea class="form-control" name="textarea" id="textarea" required="" v-model="address.value" :maxlength="student.maxlength"></textarea>
                                <span class="counter">{{ address.value.length }} / {{ student.maxlength }}</span>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-info" type="submit" @click="formCheck"> Submit </button>
                            <button class="btn btn-danger" type="submit" @click="Cancel"> Cancel </button>
                        </div>

                    </fieldset>
                </form>
            </div>
        
</template>


<script>
const phoneNumberRegExp = /^\+?(09)\)?[-. ]?([0-9]{9})$/;
export default {
    name: 'Change',
    data () {
        return {
            submitted: false,
            checkSub: false,
            fName: {
                value: '',
                validfName: true
            },
            errorFName: null,
            lName: {
                value: '',
                validlName: true
            },
            errorLName: null,
            phone: {
                value: '',
                validphone: true
            },
            errorphone: null,
            address: {
                value: '',
                maxlength: 255
            },
            id:''
        }
    },
    props:{
        student: Object
    },
    created (){
        this.lName.value = this.student.family;
        this.fName.value = this.student.name;
        this.phone.value = this.student.phone;
        this.address.value = this.student.address;
    },
    methods: {
        submit: function(event) {
            if (
                this.isPhone(this.phone.value) &&
                this.fName.value.length >= 3 &&
                this.lName.value.length >= 3) {
                this.submitted = true;
                this.student.name = this.fName.value;
                this.student.family = this.lName.value;
                this.student.phone = this.phone.value;
                this.student.address = this.address.value;
                console.log(this.student);
                this.$emit('clicked')
                //event.preventDefault();
            } else {
                this.submitted = false;
                //event.preventDefault();
            }

        },
        Cancel(){
            this.$emit('cancel')
        },
        isPhone: function(value) {
            return phoneNumberRegExp.test(value);
        },
        validate: function(value) {

            if (this.checkSub == true) {
                this.formCheck();
            }
            
        },
       
        formCheck: function() {
             this.isPhone(this.phone.value) == true ? this.phone.validNum = true : this.phone.validNum = false;
             if (this.fName.value.length >= 3) {
                this.fName.validfName = true
            } else {
                this.fName.validfName = false
            }

            if (this.lName.value.length >= 3) {
                this.lName.validlName = true
            } else {
                this.lName.validlName = false
            }
            this.isPhone(this.phone.value) == true ? this.errorphone = false : this.errorphone = true;
            this.fName.value.length >= 3 ? this.errorFName = false : this.errorFName = true;
            this.lName.value.length >= 3 ? this.errorLName = false : this.errorLName = true;
            this.checkSub = true;
        }
    },
    watch: {
        
        "phone.value": function(value) {
            this.validate(value);
            this.submitted = false;
        },
        "fName.value": function(value) {
            this.validate(value);
            this.submitted = false;
        },
        "lName.value": function(value) {
            this.validate(value);
            this.submitted = false;
        },
        "address.value": function(value) {
            this.validate(value);
            this.submitted = false;
        }
        
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
form{
    width:70%;
    margin: 0 auto 30px auto;
    text-align: start;
    background-color: white;
    padding: 20px;
    fieldset{
        legend{
            text-align: center;
        }
    }
}
h4,
        .label {
            color: #94aab0;
            margin-top:30px;
            margin-bottom: 10px;
            vertical-align: inherit;
        }
        input{
            margin: 20px auto 10px auto;
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
        label {margin-top:10px;}
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
        input[type="text"]{
            color:rgb(109, 109, 109);
            background-color: #e9dada;
            cursor: no-drop;
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
            min-height: 100px;
            resize: vertical;
            overflow: auto;
            margin-bottom: 20px;
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
            margin-right:10px;
            margin-bottom: 30px;
        }
        .error-message{
            color:rgb(167, 0, 0);
            font-size:15px;
        }
</style>
