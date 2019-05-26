<template>
  <el-table
    :data="tableData"
    border
    :rowHeight="57"
    height="500"
    useVirtual>
    <el-table-column
      type="index"
      width="100"
      fixed
    ></el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="500">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="500">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="500">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width=500">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="500">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="500">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: Array.from({ length: 10000 }, (_, idx) => ({
          idx: idx + 1,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }))
      }
    }
  }
</script>
