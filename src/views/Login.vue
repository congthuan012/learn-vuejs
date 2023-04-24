<template>
      <div class="row align-item-center justify-content-center" style="background: black">
            <img style="width: 500px" src="@/assets/images/logo-rcvn.png" alt="">
      </div>
      <div class="row align-items-center justify-content-center">
            <div class="login-form">
                  <form @submit.prevent="handleSubmit">
                        <div class="form-group mb-3">
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter email" v-model="email">
                              <p class="error-text" v-if="msg.email">{{ msg.email }}</p>
                        </div>
                        <div class="form-group mb-3">
                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                    v-model="password">
                              <p class="error-text" v-if="msg.password">{{ msg.password }}</p>
                        </div>
                        <div class="form-group">
                              <div class="row">
                                    <div class="col-6">

                                          <div class="form-check">
                                                <input type="checkbox" class="form-check-input" v-model="remember"
                                                      id="exampleCheck1">
                                                <label class="form-check-label" for="exampleCheck1">Remember</label>
                                          </div>
                                    </div>
                                    <div class="col-6 text-end">
                                          <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                              </div>
                        </div>
                  </form>
            </div>
      </div>
</template>

<script>
import { validator } from '@/helpers'
import { useAuthStore } from '@/stores'
export default {
      data() {
            return {
                  email: '',
                  password: '',
                  remember: false,
                  msg: {
                        email: '',
                        password: '',
                  }
            }
      },
      watch:{
            email(value){
                  this.email = value
                  this.msg['email'] = '';
            },
            password(value){
                  this.password = value
                  this.msg['password'] = '';
            }
      },
      methods: {
            handleSubmit() {
                  if(this.handleValidator()) {
                        const userStore = useAuthStore();
                        userStore.actions.login(this.email,this.password,this.remember)
                        .then((res) =>{
                              console.log(res);
                        }).catch((err) =>{
                              console.log({'error' : err});
                        })
                        console.log();
                  }
            },
            handleValidator(){
                  let isValid = true;
                  //validate
                  if (validator.isRequired(this.email)) {
                        isValid = false;
                        this.msg['email'] = validator.isRequired(this.email)
                  } else {
                        if (validator.validateEmail(this.email)) {
                              isValid = false;
                              this.msg['email'] = validator.validateEmail(this.email)
                        }
                  }

                  if (validator.isRequired(this.password)) {
                        isValid = false;
                        this.msg['password'] = validator.isRequired(this.password)
                  }

                  return isValid;
            }
      }
}
</script>