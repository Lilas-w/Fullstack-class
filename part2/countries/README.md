## 难点
### 与后端通信
使用axios和useEffect
### 搜索字段
使用filter和includes函数，以及toLowerCase函数筛选
### 选择性渲染
抽取出Countries组件负责不同情况下搜索结果的显示。分别使用if语句和相应的return。
### 获取API
从天气数据提供商https://openweathermap.org/获取API KEY，使用环境变量存储KEY
### 空返回值问题
在显示单个国家数据的视图中，显示首都天气报告。在weather组件中，需要特殊处理不必显示weather组件的情况、因发送http请求而state为空的状态，按照访问state属性的方式访问null的属性，会报错。使用if(weather.length===0)和返回值null解决。
