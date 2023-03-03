<template>
    <div>
        <div class="d-flex justify-content-end my-2 p-1" >
            <small class="btn text-white btn-sm mx-1"
            @click="home()">home</small>
            <!-- <small class="btn text-white btn-sm mx-1" 
            v-if="!tokenStatus"
            @click="login()">login</small> -->
        </div>
        <main>
        <!-- About US Start -->
        <div class="about-area">
            <div class="container">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="trending-tittle">
                                <strong>Trending now</strong>
                                <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                <div class="trending-animated">
                                    <ul id="js-news" class="js-hidden">
                                        <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                                        <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                        <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   <div class="row ">
                        <div class="col-lg-10 m-auto">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img">
                                    <img :src="postDetails.image" style="width:100%; height:600px;">
                                </div>
                                <div class="section-tittle mb-30 pt-30">
                                    <h3 class="ShanniFont">{{ postDetails.title }}</h3>
                                </div> 
                                <div class="section-tittle">
                                    <h3 class="ShanniFont">{{ postDetails.description }}</h3>
                                </div>
                                <div class="social-share pt-30 my-3">
                                    <div class="section-tittle">
                                        <i class="fa-solid fa-eye my-1 mx-2"></i> <span> {{ postViwe }} </span>
                                    </div>
                                </div>
                            </div>
                            <!-- From -->
                            <div class="row">
                                <div class="col-lg-8">
                                    <form class="form-contact contact_form mb-80" action="" method="" id="" novalidate="">
                                        <div class="form-group mt-2">
                                            <button 
                                            type="button" 
                                            class="button button-contactForm boxed-btn"
                                            @click="back()"
                                            >
                                                back
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        </div>
        <!-- About US End -->
    </main>
    </div>
</template>

<script src="../js/PostDetail.js"></script>

