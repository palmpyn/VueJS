<template>
  <div >
    <vue-script-src v-if="$store.getters.loginstatus==true"
      :sources="['https://cdn.onesignal.com/sdks/OneSignalSDK.js']"
      @complete="handleComplete($store.getters.user_id)"
    ></vue-script-src>
    <NavbarSt />
    <TableActivity />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import TableActivity from '@/components/TableActivity'
import NavbarSt from '@/components/NavbarSt'
import {store} from '../../store/index'
import axios from 'axios'
import VueScriptSrc from 'vue-script-src'

export default {
  store,
  name: 'homest',
  store,
  components: {
    TableActivity,
    NavbarSt,
    VueScriptSrc,
  },
  mounted(){
    if(this.$store.getters.loginstatus==false){
      this.$router.push({name:"home"})
      }
      setInterval(this.handleComplete(this.$store.getters.user_id),10000)
      console.log(this.$store.getters.activitylist)
  },
  methods:{
      handleComplete(user_id){
        var OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                OneSignal.init({
                appId: "eedad523-e419-4cba-bdf2-b68d774f3e6d",
                    });
          })
          OneSignal.getUserId(function(userId) {
                //ลองส่งไปเลย
                console.log("handleComplete user_id:"+user_id)
                axios.post("/api/saveDevice",{
                    
                    "user_id":user_id,
                    "device_code":userId
                })
                    .then((response) => {
                      //console.log(response)
                        //console.log("ส่งแล้ว")
                    })    
                    .catch((errors) => { 
                    //console.log("api error นา")   
                    //console.log(errors)
                    })   
                });
        
      }
    
  },

}
</script>
