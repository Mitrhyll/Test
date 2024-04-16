<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <div class="form-goup">
            <label>First name</label>
            <input type="text" class="form-control" v-model="first_name" placeholder="First name" />
        </div>
        <div class="form-goup">
            <label>Last name</label>
            <input type="text" class="form-control" v-model="last_name" placeholder="Last name" />
        </div>
        <div class="form-goup">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email" />
        </div>
        <div class="form-goup">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password" />
        </div>
        <div class="form-goup">
            <label>Confirm password</label>
            <input type="password" class="form-control" v-model="confirm_password" placeholder="Confirm Password" />
        </div>
        <button class="btn btn-primary btn-block">Sign up</button>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: 'RegisterV',
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
        }
    },
    methods: {
        handleSubmit() {
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                confim_password: this.confirm_password
            }

          axios.post('http://localhost:8000', data)
          .then(
            res=>{
                console.log(res)
            }
          ).catch(
            err=>{
                console.log(err)
            }
          )
        }
    }
}
</script>