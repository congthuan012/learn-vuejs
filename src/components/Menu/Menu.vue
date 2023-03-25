<template>
      <div :class="{child:children,menu}">
            <div v-for="(item, index) in menu" class="item">
                  <div class="item-link">
                        <i class="fa-solid fa-house"></i>
                        <div class="label">
                              <a href="#">{{ item.label }}</a>
                              <i class="fa-solid fa-chevron-right"></i>
                        </div>
                  </div>

                  <Menu v-if="item.children?.length" :children="true" :menu="item.children"/>
            </div>
      </div>
</template>

<script lang="ts">

export default {
      props: [
            "children",
            "menu",
      ],
      data() {
            return {
            }
      },
      methods:{
      }
}
</script>