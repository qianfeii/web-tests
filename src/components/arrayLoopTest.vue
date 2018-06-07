<template>
  <div>
    <span>数据总量 {{array.length}}
    </span>
  </div>
</template>
<script>
import { formatPermission } from '@/utils/format';
const _array = require('@/assets/data.json').FileStatuses.FileStatus;
export default {
  name: 'arrayLoopTest',
  data() {
    return {
      array: _array
    };
  },
  mounted() {
    formatPermission(_array);
  }
};
</script>
