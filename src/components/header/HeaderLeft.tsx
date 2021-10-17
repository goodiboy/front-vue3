import { defineComponent, ref } from 'vue'
import styles from '@/components/header/pageHeader.module.scss'
import { ChatDotRound, Expand, Help } from '@element-plus/icons'

export default defineComponent({
  name: 'HeaderLeft',
  setup() {
    const activeIndex = ref('1')

    return () => (
      <el-menu
        default-active={activeIndex.value}
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <div class="flex flex-align-center">
            <el-icon size={20} class={styles.menuIcon}>
              <ChatDotRound />
            </el-icon>
            交流
          </div>
        </el-menu-item>
        <el-menu-item index="2">
          <div class="flex flex-align-center">
            <el-icon size={20} class={styles.menuIcon}>
              <Expand />
            </el-icon>
            案例
          </div>
        </el-menu-item>
        <el-menu-item index="3">
          <div class="flex flex-align-center">
            <el-icon size={20} class={styles.menuIcon}>
              <Help />
            </el-icon>
            框架
          </div>
        </el-menu-item>
        {/*<el-sub-menu
          index="2"
          v-slots={{
            title: 'Workspace'
          }}
        >
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu
            index="2-4"
            v-slots={{
              title: () => 'item four'
            }}
          >
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>*/}
      </el-menu>
    )
  }
})
