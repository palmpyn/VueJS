<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title >เข้าสู่ระบบ</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="username"
                    type="text"
                    shape
                    outlined
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    shape
                    outlined
            ></v-text-field>
                </v-form>
                <center><v-alert type="error" v-if="passcompare==false">Username or Password Wrong!</v-alert></center>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="LoginRouter()">เข้าสู่ระบบ</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
    <!-- <div>  
        <h2>เข้าสู่ระบบ</h2>
        <v-row>
            <v-col>  
        <v-form>
          <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    shape
                    outlined
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    shape
                    outlined
            ></v-text-field>
        </v-form>
        </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" @click="LoginRouter">เข้าสู่ระบบ</v-btn>
    </div> -->
</template>
<script>
import axios from 'axios'
import {store} from '../../store/index'
export default {
    store,
    data(){
        return{
            show1:false,
            username:'',
            password:'',
            passcompare:true,
        }
    },
    methods:{
        LoginRouter(){
            axios.post('/api/loginadmin',
                { 
                username: this.username,
                password: this.password 
                }
                ).then(response => {
                  if(response.data=='0'){this.passcompare=false}else{
                  this.$store.commit('set_username',this.username)
                  this.$store.commit('set_password',this.password)
                  this.passcompare=true
                  //เปลี่ยน loginstatus
                  this.$store.commit('set_loginstatus',true)
                  this.$router.push({name:"HomeAdmin"})
                  this.dialog=false
                  }
                }).catch((err) => {
                
                })
        
        }
    }
}
</script>