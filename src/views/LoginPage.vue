<template>
    <div>
      <div class="d-flex justify-content-end my-2 p-1" >
        <small class="btn text-white btn-sm mx-1" @click="home()">home</small>
        <small class="btn text-white btn-sm mx-1" @click="register()">register</small>
      </div>
            
                <div class="my-3 container col-5 mx-auto p-4 shadow">
                    <div class="text-danger shadow rounded p-1"
                    v-if="!loginStatus">the credential do not match</div>
                    <input 
                    type="email" 
                    v-model="userData.email" 
                    placeholder="Enter email address" class=" my-3 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    <input 
                    type="password" 
                    v-model="userData.password" 
                    placeholder="Enter password" class=" my-3 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    
                    <button type="button" 
                    class="btn btn-primary text-white my-2"
                    @click="loginAccount()"> Login </button>

                    <!-- <button class="bg-dark" @click="checkToken()">Check token </button>
                     -->
                </div>
                    
    </div>
</template>
<script src="../js/LoginPage.js"></script>

