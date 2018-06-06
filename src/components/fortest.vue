<template>
  <div class="container">
    <h1>文件浏览
    </h1>
    <el-row class="row-content">
      <el-col class="lh" :span="20">
        <el-input v-model="filepath">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col class="lh">
        <span class="txt-sty">结果中搜索：</span>
        <el-input style="width:200px" size="small" placeholder="请输入关键字">
          <el-button slot="append" icon="el-icon-search" @click="searchClick">
          </el-button>
        </el-input>
      </el-col>
    </el-row>
    <div class="mgbl20">
      <el-table class="record-table" border style="width: 100%" :data="schTableInTable.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column prop="permission" align="center" sortable label="Permission" width="100">
          <!-- <template slot-scope="scope">
            <span>{{formatPerssion(scope.row)}}</span>
          </template> -->
        </el-table-column>
        <el-table-column prop="owner" align="center" sortable label="Owner" width="100">
        </el-table-column>
        <el-table-column prop="group" align="center" sortable label="Group" width="100">
        </el-table-column>
        <el-table-column prop="length" align="center" width="100" sortable label="Size">
        </el-table-column>
        <el-table-column prop="modificationTime" align="center" sortable label="Last Modified" width="170">
          <template slot-scope="scope">
            <span>{{formatTime(scope.row.modificationTime)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="replication" align="center" width="100" sortable label="Replication">
        </el-table-column>
        <el-table-column prop="blockSize" width="100" align="center" sortable label="Block Size">
        </el-table-column>
        <el-table-column prop="pathSuffix" align="center" sortable label="Name">
          <template slot-scope="scope">
            <a :class="['record-column-name',scope.row.type==='DIRECTORY'?'folder':'file']" @click="nextlevel(scope.row.pathSuffix)">{{scope.row.pathSuffix}}</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mgbl20">
      <el-pagination layout="prev, pager, next" class="repliPeerTable_pagination" :total="schTableInTable.length" :page-size="pagesize" :current-page.sync="currentPage" background>
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { formatPermission } from 'assetsPath/js/format';
const filestable = require('./files.json').files;
const nextlevel = require('./files.json').nextlevel;
const { mapState, mapActions } = createNamespacedHelpers('files');
export default {
  name: 'filebrowse',
  data() {
    return {
      pagesize: 7,
      currentPage: 1,
      schTableInTable: [],
      filepath: '/'
    };
  },
  computed: {
    ...mapState({
      filelist: state => state.fileList
    })
  },
  mounted() {
    this.schTableInTable = filestable;
    let self = this;
    let param = {
      path: '/user/bi',
      option: {
        op: 'LISTSTATUS',
        'user.name': 'bi'
      }
    };
    self.getfilelist(param).then(() => {
      const arr = self.filelist;
      // for
      let t1 = new Date().getTime();
      let arr2 = formatPermission(arr);
      let t2 = new Date().getTime();

      // foreach
      // const arr3 = self.filelist;
      // let t3 = new Date().getTime();
      // format.formatPermission2(arr3);
      // console.log(arr3);
      // let t4 = new Date().getTime();
      // console.log('foreach', t4 - t3);

      // // map
      // let t5 = new Date().getTime();
      // let arr4 = format.formatPermission3(arr);
      // console.log(arr4);
      // let t6 = new Date().getTime();
      // console.log(t6 - t5);
      this.schTableInTable = self.filelist;
    });
  },
  methods: {
    ...mapActions(['getfilelist']),
    searchClick() {},
    headerStyle({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'bgyellow';
      } else {
        return '';
      }
    },
    nextlevel(val) {
      // 首字符为d  该为文件夹
      // 首字符为-  该为文件
      if (val[0] === 'd') {
        console.log('跳转');
        this.schTableInTable = nextlevel;
      }
    },
    formatTime(val) {
      return this.$moment(val).format('YYYY-MM-DD HH:mm:ss');
    },
    formatPerssion(row) {
      let val = row.permission.isNaN ? 0 : row.permission;
      let type = row.type;
      var symbols = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
      var vInt = parseInt(val, 8);
      var sticky = (vInt & (1 << 9)) !== 0;
      var res = '';
      for (var i = 0; i < 3; ++i) {
        res = symbols[val % 10] + res;
        val = Math.floor(val / 10);
      }
      if (sticky) {
        var otherExec = (vInt & 1) === 1;
        res = res.substr(0, res.length - 1) + (otherExec ? 't' : 'T');
      }
      if (type === 'DIRECTORY') {
        res = 'd' + res;
      }
      return res;
    }
  }
};
</script>

<style lang="postcss" scoped>
.container {
  background-color: #ffffff;
}

h1 {
  font-size: 20px;
  border-bottom: #e4e4e4 solid 1px;
  padding: 20px 20px 15px 20px;
  line-height: 20px;
  text-align: left;
  font-family: PingFangSC-Regular;
}

.row-content {
  margin: 10px 50px 0 50px;
}

.lh {
  height: 50px;
  line-height: 50px;
  text-align: right;
  .txt-sty {
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #000000;
  }
}
.repliPeerTable_pagination {
  float: right;
  margin: 0 40px 0 40px;
}
.mgbl20 {
  margin: 10px 50px 0 50px;
}
.record-column-name {
  &.folder {
    color: #409eff;
    cursor: pointer;
  }
  &.file {
    color: #606266;
    cursor: default;
  }
}
</style>
