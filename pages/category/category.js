// pages/category/category.js
Page({
  data: {
      name: 'linsuoting'
  },
  habdleButtonClick(){
    this.setData({
      name:'林锁亭'
    })
    console.log(this.data.name)
  }
  
})