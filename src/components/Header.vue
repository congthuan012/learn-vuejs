<template>
      <header>
            <div class="desktop">
                  <div class="header">
                        <div class="header-item" id="right">
                              <div id="bar"><i class="fa-solid fa-bars"></i></div>
                              <div id="web-name">Learn VueJs</div>
                        </div>
                        <form action="">
                              <div class="header-item">
                                    <input type="text" class="search-input">
                                    <button class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
                              </div>
                        </form>
                        <div class="header-item">
                              <div id="profile-item">
                                    <span class="profile-name">Thuan</span>
                              </div>
                              <img src="../assets/images/profile.webp" alt="" class="profile-avatar">
                        </div>
                  </div>
            </div>

            <div class="mobile">
                  <div class="header">
                        <div class="header-item" id="right">
                              <div id="bar"><i class="fa-solid fa-bars"></i></div>
                              <div id="web-name">Learn VueJs</div>
                        </div>
                        <ul>
                              <li>
                                    <div class="item-link expand">
                                          <i class="fa-solid fa-house"></i>
                                          <div class="label">
                                                <a href="#">Category product</a>
                                                <i class="fa-solid fa-chevron-up"></i>
                                          </div>
                                    </div>
                                    <ul class="sub-menu hidden">
                                          <li>
                                                <div class="item-link">
                                                      <i class="fa-solid fa-house"></i>
                                                      <div class="label">
                                                            <a href="#">Sub item 1</a>
                                                            <i class="fa-solid fa-chevron-up"></i>
                                                      </div>
                                                </div>
                                          </li>
                                          <li>
                                                <div class="item-link">
                                                      <i class="fa-solid fa-house"></i>
                                                      <div class="label">
                                                            <a href="#">Category product</a>
                                                      </div>
                                                </div>
                                          </li>
                                    </ul>
                              </li>

                              <li>
                                    <div class="item-link">
                                          <i class="fa-solid fa-house"></i>
                                          <div class="label">
                                                <a href="#">Category product</a>
                                                <i class="fa-solid fa-chevron-up"></i>
                                          </div>
                                    </div>
                                    <ul class="sub-menu">
                                          <li>
                                                <div class="item-link">
                                                      <i class="fa-solid fa-house"></i>
                                                      <div class="label">
                                                            <a href="#">Category product</a>
                                                            <i class="fa-solid fa-chevron-up"></i>
                                                      </div>
                                                </div>
                                          </li>
                                          <li>
                                                <div class="item-link">
                                                      <i class="fa-solid fa-house"></i>
                                                      <div class="label">
                                                            <a href="#">Category product</a>
                                                      </div>
                                                </div>
                                          </li>
                                    </ul>
                              </li>
                        </ul>
                  </div>
            </div>
      </header>
</template>