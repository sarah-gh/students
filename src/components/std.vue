<template>
    <div>
        <div v-for="student in students" :key="student">
            <div v-if="$route.params.id == student.number">
                <div class="student" >
                    <header class="position-relative">
                        <a class="" @click="back"> <b-icon icon="arrow-left-circle-fill"></b-icon></a>
                        <div class="std_img"><img  :src="`${student.photo}`" ></div>
                        <h2>
                            {{ student.name }} {{ student.family }}
                        </h2>
                    </header>
                    <div class=" details">
                        <ul class="list-group">
                            <li class="list-group-item">
                            <b-icon icon="person-circle"></b-icon>
                            <span>number : </span>{{ student.number }}
                            </li>
                            <li class="list-group-item">
                            <b-icon icon="geo-alt-fill"></b-icon>
                            <span>Address :  </span>{{ student.address }}
                            </li>
                            <li class="list-group-item">
                            <b-icon icon="calendar3"></b-icon>
                            <span>Entering year : </span>  {{ student.year }}
                            </li>
                            <li class="list-group-item">
                            <b-icon icon="telephone-fill"></b-icon>
                            <span>Phone number :  </span>  {{ student.phone }}
                            </li>
                            <li class="list-group-item">
                            <b-icon icon="star-fill"></b-icon>
                             <span>GPA : </span>   {{ student.gpa }}
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="btn btn-info button" @click="onClickButton"> change </button>
            </div>
        </div>
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
        onClickButton (event) {
            this.$emit('clicked')
        }
    }
}
</script>

<style lang="scss" scoped>
.student{
    background-color: rgb(233, 225, 236);
    width: 50%;
    margin: 0 auto 20px auto;
    padding:10px;
    border-radius: 20px;
    header{
        background-color:  rgba(159, 1, 234, 1);
        width: 100%;
        height: 330px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        position: relative;
        .std_img{
            border-radius:50%;
            background-color: white;
            width:fit-content;
            height:fit-content;
            padding: 10px;
        }
        img{
            border-right: 50%;
            width: 130px;
            height: 130px;
        }
        h2{
            margin-top: 10px;
            color: #fff;
            margin-bottom: 0px;
        }
        a{
            position: absolute;
            top: 15px;
            left: 15px;
            font-size: 30px;
            color:white;
        }
    }
    .details{
        width: 90%;
        height:300px;
        background-color: white;
        margin: -50px auto 10px auto;
        border-radius: 20px;
        z-index:100;
        position: sticky;
        display:flex;
        justify-content:center;
        align-items: center;
        ul{
            padding: 0;
        }
        .list-group{
            text-align: start;
            width:98%;
            margin: 0 auto;
            font-weight: bold;
            .list-group-item{
                padding: 0.8rem 1.25rem;
            }
            svg{
                width: 20px;
                margin-right:20px;
            }
            span{
                color:gray;
                font-weight: normal;
                margin-right:10px;
            }
        }
    }
}
.button{
    margin-bottom: 50px;
    background-color: rgba(159, 1, 234, 1);
    border: 1px solid rgba(159, 1, 234, 1);
}
.button:hover{
    background-color:rgb(101, 0, 148);
    border: 1px solid rgb(101, 0, 148);
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
