// pages/home/home.js
Page({
  data: {
    name: 'CoderWhy',
    age: 18,
    students: [
      {id: 1, name: 'aa',age: 10},
      {id: 2, name: 'bb',age: 20},
      {id: 3, name: 'cc', age: 30 },
      {id: 4, name: 'dd', age: 40 },
      {id: 5, name: 'ee', age: 50 }
    ],
    counter: 0
  },
  handleBtnClick(){
    // 1.错误的，界面不会刷新
    // this.data.counter +=1
    // console.log(this.data.counter)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtaction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})