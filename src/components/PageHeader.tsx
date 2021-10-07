import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return () => (
      <el-menu
        default-active={activeIndex.value}
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        onSelect={handleSelect}
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu
          index="2"
          v-slots={{
            title: () => 'Workspace'
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
        </el-sub-menu>
        <el-menu-item index="3" disabled>
          Info
        </el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
      </el-menu>
    )
  }
})
