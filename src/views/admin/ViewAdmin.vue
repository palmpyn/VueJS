<template>
  <div>
    <NavbarAdmin />
    <div class="bbbbb">
          <v-row >
        <v-col  xs="5" sm="3" md="11" lg="11" xl="11" class="titlepage">รายละเอียดกิจกรรม</v-col>
        <v-col  xs="1" sm="3" md="1" lg="1" xl="1" class="iconeditac">
          <v-btn icon  @click="edit()">
                     <v-icon large v-if="isEditing" >mdi-close</v-icon>
                     <v-icon large v-else>mdi-pencil</v-icon>             
        </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
          <p>ชื่อกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.title}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="title" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ประเภทกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.maintype_id}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="maintype_name"
          item-value="maintype_id"
          v-model="maintype_Selected.maintype_id"
          :items="maintypes"
          label="ประเภทกิจกรรม"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ด้านกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.subtype_id}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="subtype_name"
          item-value="subtype_id"
          v-model="subtype_Selected.subtype_id"
          :items="subtypes"
          label="ด้านกิจกรรม"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ปีการศึกษา</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.learn_year}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="learn_year" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">เทอม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.term}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="term"
          item-value="term"
          v-model="term_Selected.term"
          :items="terms"
          label="เทอม"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชั่วโมงที่ได้รับ</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.hours}}</p>    
          <v-text-field v-if="this.isEditing==true" v-model="hours" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6" ><p class="text-sm-left">วันที่</p></v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.date_act_start}}</p>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            v-if="this.isEditing==true"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                :append-icon="'mdi-calendar'"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6"><p class="text-sm-left">เวลา</p></v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.time_act_start}}</p>
          <v-text-field v-if="this.isEditing==true"  v-model="time_act_start" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">คำอธิบายเพิ่มเติม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.detail}}</p>
          <v-textarea v-if="this.isEditing==true" v-model="detail" outlined></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">สถานที่</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.place}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="place"
          item-value="place"
          v-model="place_Selected.place"
          :items="places"
          label="สถานที่"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">จำนวนคน</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.people}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="people" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false" >ชั้นปี</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
         <p class="text-sm-left" v-if="this.isEditing==false">{{this.stusend_year}}</p>
         
        </v-col>
      </v-row>
      
      
      <v-row>
        
        <v-col class="iconeditac">
          <v-btn icon color="error"  @click.stop="dialog = true">
              <v-icon large v-if="this.isEditing==false" >mdi-delete-outline</v-icon>         
        </v-btn>
        <center><v-btn color="success" v-if="this.isEditing==true" @click="updateactivity()" >ยืนยันแก้ไขกิจกรรม</v-btn></center>
        </v-col>
        <v-btn color="success" @click="report()">ดูสรุปข้อมูลการลงทะเบียนกิจกรรม</v-btn>
      </v-row>
        <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">ต้องการลบกิจกรรม</v-card-title>
        <v-card-text>
          <v-form>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
                <center><v-alert type="error" v-if="passcompare==false">Password Wrong!</v-alert></center>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            ยกเลิก
          </v-btn>

          <v-btn
            color="success"
            text
            @click="deleteActivity()"
          >
            ตกลง
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    
    </div>     
  </div>
</template>


<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import {store} from '../../store/index'
import axios from 'axios'
export default {
  store,
  components:{
      NavbarAdmin,
  },
  data(){
    return{
    passcompare:true,
    password:'',
    activity_id:this.$route.params.activity_id,
    maintype_id:this.$store.getters.maintype_id,
    subtype_id:this.$store.getters.subtype_id,
    title:this.$store.getters.title,
    hours:this.$store.getters.hours,
    place:this.$store.getters.place,
    people:this.$store.getters.people,
    learn_year:this.$store.getters.learn_year,
    term:this.$store.getters.term,
    detail:this.$store.getters.detail,
    date_act_start:this.$store.getters.date_act_start,
    time_act_start:this.$store.getters.time_act_start,
    stusend_year:this.$store.getters.stusend_year,
    isEditing:false,
    date:'', //new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    show1:false,
    dialog: false,
    maintype_Selected: {
            maintype_id:1,
        },
        maintypes:[
            {   maintype_id:1,
                maintype_name:'มหาวิทยาลัย'},
            {   maintype_id:2,
                maintype_name:'พัฒนานักศึกษาสู่การเป็นบัณฑิตพึงประสงค์'}
        ],
    subtype_Selected: {
            subtype_id:1,
        },
        subtypes:[
            {   subtype_id:1,
                subtype_name:'วิชาการและวิชาชีพ'},
            {   subtype_id:2,
                subtype_name:'กีฬาและนันทนาการ'},
            {   subtype_id:3,
                subtype_name:'บำเพ็ญประโยชน์ หรือรักษาสิ่งแวดล้อม'},
            {   subtype_id:4,
                subtype_name:'เสริมสร้างคุณธรรม จริยธรรม'},
            {   subtype_id:5,
                subtype_name:'อนุรักษ์ศิลปวัฒนธรรม'},
        ],
    term_Selected:{
            term:1
    },
        terms:[
            {term:1},
            {term:2}
        ],
    place_Selected: {
            place:'มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร วิทยาเขตพระนครเหนือ',
        },
        places:[
            {   place:'มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร วิทยาเขตพระนครเหนือ'},
            {   place:'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร วิทยาเขตเทเวศน์'},
            {   place:'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร วิทยาพณิชยการพระนคร'}
        ],
    }
  },
  methods: {
    edit(){
      this.isEditing = !this.isEditing;
      console.log(this.title)
    },
    updateactivity(){
      axios.post('/api/updateactivity',
          { activity_id: this.$route.params.activity_id,
            maintype_id:this.maintype_Selected.maintype_id,
            subtype_id:this.subtype_Selected.subtype_id,
            title:this.title,
            hours:this.hours,
            place:this.place_Selected.place,
            people:this.people,
            learn_year:this.learn_year,
            term:this.term_Selected.term,
            detail:this.detail,
            date_act_start:this.date,
            time_act_start:this.time_act_start,
          }
          ).then(response => {
            alert("อัพเดทกิจกรรมแล้ว")
            this.isEditing = !this.isEditing;
            this.getdetail()
          })  
      
    },
      getdetail(){
        console.log(this.$route.params.activity_id)
                axios.post('/api/getactivitydetail',
                { activity_id: this.$route.params.activity_id }
                ).then(response => {
                  this.$store.commit('set_activity_id',response.data[0].activity_id)
                  this.$store.commit('set_maintype_id',response.data[0].maintype_name)
                  this.maintype_id=response.data[0].maintype_name
                  this.$store.commit('set_subtype_id',response.data[0].subtype_name)
                  this.subtype_id=response.data[0].subtype_name
                  this.$store.commit('set_title',response.data[0].title)
                  this.title=response.data[0].title
                  this.$store.commit('set_hours',response.data[0].hours)
                  this.hours=response.data[0].hours
                  this.$store.commit('set_place',response.data[0].place)
                  this.place=response.data[0].place
                  //เช็ค googlemap 
                  if(response.data[0].place.localeCompare('มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร วิทยาเขตพระนครเหนือ')){
                    this.googlemap2=true; this.googlemap1=false; this.googlemap3=false; }else
                  if(response.data[0].place.localeCompare('มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร วิทยาเขตเทเวศน์')){
                    this.googlemap1=true; this.googlemap2=false; this.googlemap3=false; }else
                  if(response.data[0].place.localeCompare('มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร วิทยาพณิชยการพระนคร')){
                    this.googlemap3=true; this.googlemap1=false; this.googlemap2=false; }
                   
                  this.$store.commit('set_people',response.data[0].people)
                  this.people=response.data[0].people
                  this.$store.commit('set_learn_year',response.data[0].learn_year)
                  this.learn_year=response.data[0].learn_year
                  this.$store.commit('set_term',response.data[0].term)
                  this.term=response.data[0].term
                  this.$store.commit('set_stusend_year',response.data[0].stusend_year)
                  this.stusend_year=response.data[0].stusend_year
                  this.$store.commit('set_detail',response.data[0].detail)
                  this.detail=response.data[0].detail
                  this.$store.commit('set_date_act_start',this.datetranslate(response.data[0].date_act_start))
                  this.date_act_start=this.datetranslate(response.data[0].date_act_start)
                  this.date=(response.data[0].date_act_start).substr(0, 10)
                  console.log((response.data[0].date_act_start).substr(0, 10))
                  this.$store.commit('set_time_act_start',response.data[0].time_act_start)
                  this.time_act_start=response.data[0].time_act_start
                  this.$store.commit('set_date_regis_start',this.datetranslate(response.data[0].date_regis_start))
                  this.$store.commit('set_date_regis_end',this.datetranslate(response.data[0].date_regis_end))
                  this.$store.commit('set_people_regis',response.data[0].people_regis)
                }).catch((err) => {
                console.log(err)
                })
        },
        datetranslate(datefull){
            let date=parseInt(datefull.substring(8,10))+1+" "
            let month=parseInt(datefull.substring(5,7))
            if(month==1){month='มกราคม'}else
            if(month==2){month='กุมภาพันธ์'}else
            if(month==3){month='มีนาคม'}else
            if(month==4){month='เมษายน'}else
            if(month==5){month='พฤษภาคม'}else
            if(month==6){month='มิถุนายน'}else
            if(month==7){month='กรกฎาคม'}else
            if(month==8){month='สิงหาคม'}else
            if(month==9){month='กันยายน'}else
            if(month==10){month='ตุลาคม'}else
            if(month==11){month='พฤศจิกายน'}else
            if(month==12){month='ธันวาคม'}
            let year=" "+(parseInt(datefull.substring(0,4))+543).toString()
            let date_act_start=date+month+year
            return date_act_start
          },
          deleteActivity(){
            if(this.password!=this.$store.getters.password){
              this.passcompare=false
            }else{
            axios.post('/api/deleteActivity',
                { activity_id: this.$route.params.activity_id }
                ).then(response => {
                      alert("ลบกิจกรรมเสร็จสิ้น")
                      this.dialog=false
                      if(this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
                })
            }
          },
      report(){
        this.$router.push({path:"/report/"+this.activity_id})
      }
  },
  mounted(){
    if(this.$store.getters.loginstatus==false){
      this.$router.push({name:"loginadmin"})
      }
    this.getdetail()
  }
};
</script>