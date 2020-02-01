<template>
    <div>
        <NavbarSt />
    <v-container>
        <v-btn icon right @click="isEditing = !isEditing">
                     <v-icon large v-if="isEditing==true" >mdi-close</v-icon>
                     <v-icon large v-else>mdi-pencil</v-icon>             
        </v-btn>
        <v-row>
            <v-col cols="6" sm="3">
                <p >ชื่อ</p >
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.name}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.name"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p >นาสกุล</p >
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.surname}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.surname"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>เพศ</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.sex_id}}</p>
                    <v-select 
                    v-if="this.isEditing==true" class="d-flex"
                    item-text="sex_name"
                    item-value="sex_id"
                    v-model="sex_Selected.sex_id"
                    :items="sexs"
                    label="เพศ"
                    shape
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>ศาสนา</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.religion}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.religion"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>รหัสนักศึกษา</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.stu_id}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.stu_id"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>สาขา</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.branch_id}}</p>
                    <v-select 
                    v-if="this.isEditing==true" class="d-flex"
                    item-text="branch_name"
                    item-value="branch_id"
                    v-model="branch_Selected.branch_id"
                    :items="branchs"
                    label="สาขาวิชา"
                    shape
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>ชั้นปี</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false">{{$store.getters.stu_year}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.stu_year"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>รหัสบัตรประชาชน</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.card_id}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.card_id"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>โรคประจำตัว</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.disease}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.disease"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>อาหารที่แพ้</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.food_allergy}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.food_allergy"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>ยาที่แพ้</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.be_allergic}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.be_allergic"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row> 
        <v-row>
            <v-col cols="6" sm="3">
                <p>Email</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false">{{$store.getters.email}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.email"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>เบอร์โทรศัทพ์</p>
            </v-col>
            <v-col cols="6" sm="6">
                <p v-if="this.isEditing==false"> {{$store.getters.tel}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="this.tel"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row> 
        <v-spacer></v-spacer>
        <v-row v-if="this.isEditing==true">
            <v-col cols="12" sm="3">
                <v-btn
                    color="success"
                    @click="save"
                >
                บันทึก
                </v-btn>
            </v-col>
            <v-col cols="12" sm="3">
                <v-btn
                    color="error"
                >
                ยกเลิก
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>
<script>
import NavbarSt from '@/components/NavbarSt'
import {store} from '../../store/index'
import axios from 'axios'
  export default {
      store,
      components : {
        NavbarSt
    },
    data(){
        return{
        isEditing:false,
        hasSaved:false,
        name:this.$store.getters.name,
        surname:this.$store.getters.surname,
        sex_id:this.$store.getters.sex_id,
        religion:this.$store.getters.religion,
        stu_id:this.$store.getters.stu_id,
        card_id:this.$store.getters.card_id,
        branch_id:this.$store.getters.branch_id,
        stu_year:this.$store.getters.stu_year,
        email:this.$store.getters.email,
        tel:this.$store.getters.tel,
        disease:this.$store.getters.disease,
        be_allergic:this.$store.getters.be_allergic,
        food_allergy:this.$store.getters.food_allergy,

        branch_Selected: {
            branch_id:1,
        },
        branchs:[
            {   branch_id:1,
                branch_name:'วิทยาการคอมพิวเตอร์'},
            {   branch_id:2,
                branch_name:'วิทยาศาสตร์และเทคโนโลยีสิ่งแวดล้อม'},
            {   branch_id:3,
                branch_name:'วัสดุศาสตร์อุตสาหกรรม'},
        ],
        sex_Selected: {
            sex_id:1,
        },
        sexs:[
            {   sex_id:1,
                sex_name:'ชาย'},
            {   sex_id:2,
                sex_name:'หญิง'}
            
        ],

    }},
    methods: {
        save(){
            axios.post('/api/updateprofile',
                { user_id:this.$store.getters.user_id,
                  name:this.name,
                  surname:this.surname,
                  sex_id:this.sex_Selected.sex_id,
                  religion:this.religion,
                  stu_id:this.stu_id,
                  card_id:this.card_id,
                  branch_id:this.branch_Selected.branch_id,
                  stu_year:this.stu_year,
                  email:this.email,
                  tel:this.tel,
                  disease:this.disease,
                  be_allergic:this.be_allergic,
                  food_allergy:this.food_allergy
                }
                ).then(response => {
                    alert("อัพเดทโปรไฟล์เสร็จสิ้น")
                    this.$store.commit('set_name',this.name)
                    this.$store.commit('set_surname',this.surname)
                    this.$store.commit('set_sex_id',response.data[0].sex)
                    this.$store.commit('set_religion',this.religion)
                    this.$store.commit('set_stu_id',this.stu_id)
                    this.$store.commit('set_card_id',this.card_id)
                    this.$store.commit('set_branch_id',response.data[0].branch_name)
                    this.$store.commit('set_stu_year',this.stu_year)
                    this.$store.commit('set_email',this.email)
                    this.$store.commit('set_tel',this.tel)
                    this.$store.commit('set_disease',this.disease)
                    this.$store.commit('set_be_allergic',this.be_allergic)
                    this.$store.commit('set_food_allergy',this.food_allergy)
                    this.isEditing=false
                    this.hasSaved = true
                },err=>{ console.log(err)})
        
      },
    },
    mounted(){
        console.log(this.$store.getters.branch_id)
        if(this.$store.getters.loginstatus==false){
        this.$router.push({name:"home"})
      }
    }
  }
</script>