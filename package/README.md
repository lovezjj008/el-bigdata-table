# el-bigdata-table

用来实现el-table展示大数据
流畅渲染万级数据并不会影响到el-table的原有功能

[点击查看在线demo](https://ckang1229.github.io/el-bigdata-table/dist/)

## Install
```shell
npm install el-bigdata-table -S
```

## Quick Start
``` javascript
import 'el-bigdata-table'
```

### 基础用法
```html
<template>
  <!-- 使用 useVirtual 属性开启虚拟滚动 使用虚拟滚动时，必须要固定表格高度和行高 -->
  <el-table
    :data="tableData"
    height="400"
    useVirtual
  >
    <el-table-column
      type="index"
      width="100"
      fixed
    ></el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: Array.from({length: 10000}, () => ({
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }))
      }
    }
  }
</script>
```

## API

### 新增 Props:

属性  |  说明  |  类型  |  默认值
:-------: | -------  |  :-------:  |  :-------:
useVirtual  |  是否开启虚拟滚动  |  Boolean  |  false
rowHeight  |  行高(必须要设置正确的行高，否则会导致表格计算不正确)  |  Number  |  48

作者wx: ckang1229

