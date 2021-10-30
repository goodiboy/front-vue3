import { defineComponent } from 'vue'
import HeaderLeft from '@/components/header/HeaderLeft'
import HeaderRight from '@/components/header/HeaderRight'
import styles from './pageHeader.module.scss'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'PageHeader',
  setup() {
    return () => {
      const route = useRoute()
      if (route.meta?.disableHeader) return undefined
      return (
        <el-row gutter={20} class={styles.header}>
          <el-col span={20}>
            <HeaderLeft />
          </el-col>
          <el-col span={4}>
            <HeaderRight />
          </el-col>
        </el-row>
      )
    }
  }
})
