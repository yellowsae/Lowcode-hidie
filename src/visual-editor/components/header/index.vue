<template>
  <el-row type="flex" class="header">
    <!--    左侧logo start-->
    <el-col :span="6" class="flex items-center">
      <!-- 链接到个人博客页 -->
      <a href="#" target="_self">
        <div class="logo"></div>
      </a>
      <h3 class="font-semibold">LowCode</h3>
    </el-col>
    <!--    左侧logo end-->
    <!--    中间操作页面部分 start-->
    <el-col class="flex items-center space-between" :span="12">
      <!-- 循环 icon  -->
      <template v-for="(toolItem, toolIndex) in tools" :key="toolIndex">
        <div :class="[`w-1/${tools.length}`]" class="w-1/9">
          <div
            class="tool-item flex flex-col items-center cursor-pointer"
            @click="toolItem.onClick === 'runPreview' ? runPreview() : toolItem.onClick()"
          >
            <el-icon>
              <component :is="toolItem.icon" />
            </el-icon>
            <div class="title">{{ toolItem.title }}</div>
          </div>
        </div>
      </template>
    </el-col>
    <!--    中间操作页面部分 end-->
    <!--    右侧工具栏 start-->
    <el-col :span="6" class="right-tools flex flex-row-reverse items-center">
      <div>
        <a href="https://hidie-me.vercel.app/" target="_blank">
          <img :src="`${BASE_URL}github.svg`" width="40" height="40" alt="" />
        </a>
        <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
        <!-- <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="github" placement="bottom">
              <a href="https://github.com/yellowsae" target="_blank">
                <img :src="`${BASE_URL}github.svg`" width="40" height="40" alt="" />
              </a>
            </el-tooltip>
          </el-col> -->
        <!-- <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="gitee" placement="bottom">
              <a href="https://gitee.com/jiawink/Jiawink_H5-lowcode" target="_blank">
                <img :src="`${BASE_URL}gitee.svg`" width="40" height="40" alt="" />
              </a>
            </el-tooltip>
          </el-col> -->
        <!-- </el-row> -->
        <!-- <template #reference>
          <img :src="`${BASE_URL}github.svg`" width="40" height="40" alt="" />
        </template> -->
      </div>
    </el-col>
    <!--    右侧工具栏 end-->
  </el-row>
  <preview v-model:visible="isShowH5Preview" />
</template>

<script lang="ts" setup>
  // import { VideoPlay } from '@element-plus/icons-vue';
  import Preview from './preview.vue';
  import { useTools } from './useTools';
  import { useVisualData, localKey } from '@/visual-editor/hooks/useVisualData';
  import { BASE_URL } from '@/visual-editor/utils';

  defineOptions({
    name: 'PageHeader',
  });

  const isShowH5Preview = ref(false);

  const tools = useTools();

  const { jsonData } = useVisualData();

  const runPreview = () => {
    sessionStorage.setItem(localKey, JSON.stringify(jsonData));
    localStorage.setItem(localKey, JSON.stringify(jsonData));
    isShowH5Preview.value = true;
  };
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;

    .logo {
      width: 60px;
      height: 60px;
      background-image: url('@/assets/logo.png');
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 50;
    }

    .tool-item {
      .title {
        margin-top: 4px;
        font-size: 12px;
      }
    }

    .el-button {
      font-size: 22px;
    }

    .right-tools > * {
      margin-left: 8px;
    }
  }

  .space-between {
    justify-content: space-around;
  }

  .font-semibold {
    padding-left: 10px;
    font-size: 20px;
  }
</style>
