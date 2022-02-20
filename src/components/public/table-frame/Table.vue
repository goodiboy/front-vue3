<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  import type { PageType } from '@/types/common'
  import { TableConfig } from '@/components/public/table-frame/types'

  // 选择中用户列表的对象
  // const checkedUserIds = ref<string[]>([])
  //初始化用户分页对象
  const pager = reactive<PageType>({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })

  const props = defineProps<{
    tableConfig: TableConfig
    dataList: unknown
  }>()
  const emit = defineEmits<{
    (e: 'selectionChange', list: string[]): void
  }>()

  const { dataList, tableConfig } = toRefs(props)

  const handleSelectionChange = (list: { _id: string }[]) => {
    const ids = list.map((item) => item._id)
    emit('selectionChange', ids)
  }

  const handleCurrentChange = (page: number) => {
    pager.pageNum = page
  }
</script>
<template>
  <div class="base-table">
    <div class="action">
      <el-button
        v-for="(item, index) of tableConfig.action"
        :key="index"
        :type="item.type"
        @click="item.handle"
      >
        {{ item.label }}
      </el-button>
    </div>
    <el-table
      :data="dataList"
      :row-key="tableConfig.tree?.key"
      :tree-props="tableConfig.tree?.props"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-for="item in tableConfig.columns" :key="item.prop" v-bind="item">
        <template v-if="item.template" #default="scope">
          <template v-for="(temp, index) of item.template" :key="index">
            <el-button
              v-if="temp.type === 'button'"
              size="small"
              :type="temp.style"
              @click="temp.handle(scope.row)"
            >
              {{ temp.label }}
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页功能 -->
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="pager.total"
      :page-size="pager.pageSize"
      hide-on-single-page
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<style scoped lang="scss">
  .base-table {
    margin-top: 20px;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 5px;

    .action {
      padding: 20px;
      background: #fff;
      border-bottom: 1px solid #ece8e8;
      border-radius: 5px 5px 0 0;
    }

    .pagination {
      justify-content: flex-end;
      padding: 10px;
    }
  }
</style>
