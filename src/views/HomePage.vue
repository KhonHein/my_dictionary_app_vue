<style src="../css/HomePage.css"></style>
<template>
    <div>
      <div class="d-flex justify-content-end my-2 p-1" >
        <a href="https://helloshanni.khonhein.com/post">
          <small class="btn text-white btn-sm mx-1  bg-success" 
        v-if="tokenStatus && userRole == 'admin' "
        >Admin Page</small>
        </a>
        <small class="btn text-white btn-sm mx-1 bg-primary" 
        @click="login()"
        v-if="!tokenStatus">login</small>

        <small class="btn text-white btn-sm mx-1 bg-dark" 
        @click="register()"
        v-if="!tokenStatus">register</small>
        
        <small class="btn text-white btn-sm mx-1 bg-dark" 
        @click="logout()"
        v-if="tokenStatus">log out</small>
      </div>
      <!-- Whats New Start -->
      <section class="whats-news-area pt-50 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-3 col-md-3">
                                <div class="section-tittle mb-30">
                                    <!-- <h3 class="ShanniFont fs-1">rgFokifjcMV</h3> -->
                                    <h3 class="ShanniFont fw-bold fs-1">rgFokifj wb;vFif</h3>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" aria-selected="true"
                                            @click="categorySearch('')"
                                            >All</a>
                        
                        <a
                          v-for="(c, index) in categoriesList"
                          :key="index"
                          class="nav-item nav-link"
                          id="nav-technology"
                          data-toggle="tab"
                          href="details.htmlnav-techno"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                          @click="categorySearch(c.title)"
                          >
                          {{ c.title }}
                          </a
                        >
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <!-- Nav Card -->
                  <div class="d-flex my-3 justify-content-end ShanniFont fs-4">
                    <input type="text" class=" col-4 rounded-2" 
                    v-model="searchKey"
                    v-on:keyup.enter="searchPost()" />
                    <i class="fa-solid text-primary fa-magnifying-glass fw-bold fs-2 mx-2 mt-1"
                    @click="searchPost()"></i>
                  </div>
                  <div class="tab-content" id="nav-tabContent">

                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                       
                        <span>
                          <div class="row">
                          <div class="col-md-12"
                          v-if="postsList.length == 0"
                          style="height:25vh; justify-content:center; margin-top: 10%;"
                          >
                            <h2 class="text-danger">There is no data</h2>
                          </div>
                          <div class="col-lg-3 col-md-3"
                          v-else-if="postsList.length != 0" 
                          v-for="(post,index) in postsList" 
                          :key="index"
                          >
                            <div class="single-what-news mb-100"
                            @click="postDetail(post.post_id)">
                              <div class="what-img">
                                <img :src="post.image" alt="" style="  width: 100%; height: 200px;" />
                              </div>
                              <div class="m-auto">
                                <span class="color1 ShanniFont fw-bold fs-5 shadow"> rgFokifj wb;vFif </span>
                                <h4 class="ShanniFont fw-bold fs-4 shadow">
                                  {{ post.title }}
                                </h4>
                              </div>
                            </div>
                          </div>

                        </div>
                        </span>
                      </div>
                    </div>
                    <!-- Card two -->
                    <div
                      class="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Card three -->
                    <div
                      class="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card fure -->
                    <div
                      class="tab-pane fade"
                      id="nav-last"
                      role="tabpanel"
                      aria-labelledby="nav-last-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card Five -->
                    <div
                      class="tab-pane fade"
                      id="nav-nav-Sport"
                      role="tabpanel"
                      aria-labelledby="nav-Sports"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card Six -->
                    <div
                      class="tab-pane fade"
                      id="nav-techno"
                      role="tabpanel"
                      aria-labelledby="nav-technology"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
           </div>
           </div>
        </section>
        <!-- Whats New End -->
    </div>
</template>

<script src="../js/HomePage.js"></script>
