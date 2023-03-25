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
                        <Menu :menu="menu" />
                  </div>
            </div>
      </header>
</template>

<script lang="ts">
import Menu from './Menu/Menu.vue';
const menu = [
      {
            id: 1,
            label: "Menu 1",
            children: [
                  {
                        id: 3, 
                        label: "Item 1", 
                        children: [
                              {
                                    id: 4, 
                                    label: "Item Child 4", 
                                    parent: 3
                              }
                        ]
                  }
            ]
      },
      {
            id: 2,
            label: "Menu 2",
            parent: 0
      },
];
export default {
      data() {
            return {
                  menu
            }
      },
      components: {
            Menu
      },
      mounted() {
      }
}
</script>