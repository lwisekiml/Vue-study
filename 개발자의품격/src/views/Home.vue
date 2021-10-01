<template>
  <div>
    <h1>Welcome to {{title}}!</h1>
    <!-- <input type="text" value="abc" /> -->
    <input type="text" v-model="input1" />

    <!-- <button type="button" onClick="">Get</button> -->
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region"  @change="changeRegion">
      <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
    </select>

    <table class="table table-bordered" v-show="tableShow">
      <tr :key="i" v-for="(d,i) in options">
        <td>{{d.v}}</td>
        <td>{{d.t}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "개발자의 품격",
      title2: "Seoul",
      input1: "abcd",
      options: [
        {v:"S", t:"Seoul"},
        {v:"J", t:"Jeju"},
        {v:"B", t:"Busan"},
      ],
      region: "J",
      tableShow: true
    };
  },
  watch: {
    input1() {
      console.log(this.input1);
    }
  },
  methods: {
    getData() {
      alert(this.input1); // 데이터에 접근하려면 변수명만 주면 안되고 this.을 붙여 주어야 한다.
    },
    setData() {
      this.input1 = "12345";
    },
    changeRegion() {
      alert(this.region);
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() { // db데이터를 미리 가져오는 것이 좋다.
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() { // 실제 로딩
    console.log("mounted")
  },
  beforeUpdate() { // 데이터 변경 전
    console.log("beforeUpdate")
  },
  updated() { // 데이터 변경 후
    console.log("updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  }
};
</script>
