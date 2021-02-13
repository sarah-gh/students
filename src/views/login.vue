<template>
  <div id="app3">
        <form class="vue-form" @submit.prevent="submit">
            <fieldset>
                <legend>Login</legend>
                <div>
                    <label class="label" for="fName">Username : </label>
                    <input type="number" name="name" minlength="8" id="fname" required="" v-model="fName.value" :class="{ error: !fName.validfName }">
                    <div class="error-message">
                        <p v-if="errorFName">Please enter a username of 8 numbers.</p>
                    </div>
                </div>

                <div>
                    <label class="label" for="pass">Password : </label>
                    <input type="password" name="name" minlength="6" id="pass" required="" v-model="pass.value" :class="{ error: !pass.validPass }">
                    <div class="error-message">
                        <p v-if="errorPass">please enter minimum 4 characters.</p>
                    </div>
                </div>
                <div>
                    <button class="btn btn-info" type="submit" @click="formCheck"> send form </button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import student from '@/data/students'
export default {
  name: 'Login',
  data () {
        return {
            student,
            fName: {
                value: '',
                validfName: true
            },
            errorFName: null,
            pass: {
                value: '',
                validPass: true
            },
            errorPass: null,
            submitted: false,
            checkSub: false
        }
  },
  methods: {
    submit (event) {
      if (
        this.pass.value.length >= 4 &&
        this.fName.value.length === 8) {
        this.submitted = true
        event.preventDefault()
        this.change()
        this.$router.push('students')
      } else {
        this.submitted = false
        event.preventDefault()
      }
    },
    validate: function (type, value) {
      if (this.checkSub === true) {
        this.formCheck()
      }
    },
    change() {
        let num = this.fName.value
        this.student.map(function (student,){
            if(num == student.number){
                    student.change = true;
                }
            else{
                    student.change = false;
                }
            return 0;
        })
        // for(let i = 0 ; i < this.student.length ; i++){
        //     if(this.fName.value == this.student[i].number){
        //         this.student[i].change = true;
        //     }
        //     else{
        //         this.student[i].change = false;
        //     }
        // }
        
    },
    functionErrorFName () {
      if (this.fName.value.length === 8) {
        this.fName.validfName = true
        this.error.fName = false
      } else {
        this.fName.validfName = false
        this.error.fName = true
      }
      this.fName.value.length === 8 ? this.errorFName = false : this.errorFName = true
    },

    functionErrorPass () {
      if (this.pass.value.length >= 4) {
        this.pass.validPass = true
        this.error.pass = false
      } else {
        this.pass.validPass = false
        this.error.pass = true
      }
      this.pass.value.length >= 4 ? this.errorPass = false : this.errorPass = true
    },

    formCheck () {
      this.pass.value.length >= 4 ? this.pass.validPass = true : this.pass.validPass = false
      if (this.fName.value.length === 8) {
        this.fName.validfName = true
      } else {
        this.fName.validfName = false
      }
      this.pass.value.length >= 4 ? this.errorPass = false : this.errorPass = true
      this.fName.value.length === 8 ? this.errorFName = false : this.errorFName = true
      this.checkSub = true
    }
  },
  watch: {
    'fName.value' (value) {
      this.validate('fname', value)
      this.submitted = false
    },
    'pass.value' (value) {
      this.validate('pass', value)
      this.submitted = false
    }
  }
}
</script>

<style lang="scss" scope>


#app3 {
    display: flex;
    width: 60%;
    margin: 50px auto 0 auto;
    opacity: 1;
    text-align: start;
    .vue-form {
        font-size: 16px;
        padding: 15px 30px;
        border-radius: 4px;
        margin: 50px 20px;
        flex-grow: 1.5;
        background-color: #fff;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
        fieldset {
            margin: 24px 0 0 0;
        }
        legend {
            padding-bottom: 10px;
            border-bottom: 1px solid #ecf0f1;
            color: #060707;
            text-align: center;
        }
        div {
            position: relative;
            margin: 20px 0;
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
            margin-bottom: 200px;
        }
    }
}



pre {
    background-color: #f5f5f53b;
    color: #ffffff;
}

@media screen and (max-width: 1067px) {
    #app3 {
        display: flex;
        width: 90%;
        margin: 150px auto 0 auto;
        opacity: 1;
        transition: 1s ease all;
        .error-message {
            margin: 10px;
            height: 10px;
            p {
                color: #be0000;
                font-size: 11px;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                // padding: 16px;
            }
        }
    }
    
}

@media screen and (min-width: 1067px) {
    #app3 {
        display: flex;
        width: 60%;
        margin: 50px auto 0 auto;
        opacity: 1;
        transition: 1s ease all;
        .error-message {
            margin: 10px;
            height: 12px;
            p {
                color: #be0000;
                font-size: 13px;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                // padding: 16px;
            }
        }
    }
    
}


</style>
