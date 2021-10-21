import { defineComponent } from 'vue'
import styles from './pageHeader.module.scss'
export default defineComponent({
  name: 'HeaderRight',
  setup() {
    // const visible = ref(false)
    // const handleBtnClick = () => {
    //   visible.value = !visible.value
    // }
    const slots = {
      // reference: () => <el-button onClick={handleBtnClick}>登录</el-button>
      reference: () => <el-button type="text">clear、宙</el-button>
    }
    const hidden = false
    let renderHtml: JSX.Element
    if (hidden) {
      renderHtml = (
        <el-button type="text" style="color:#fff">
          登录 / 注册
        </el-button>
      )
    } else {
      renderHtml = (
        <el-popover
          placement="bottom"
          title="Title"
          width={200}
          trigger="click"
          content="this is content, this is content, this is content"
          v-slots={slots}
        />
      )
    }

    return () => {
      return <div class={styles.headerRight}>{renderHtml}</div>
    }
  }
})
