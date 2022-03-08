## 难点
访问表单中输入的数据：受控组件。将App组件的一部分状态指定为 input 元素的value 属性，因此App 组件控制 了input 元素的行为。必须注册一个事件处理 来同步对 input 所做的更改和组件的状态。<br>

判断已存在输入，弹窗警告：使用find方法<br>

hooks执行顺序问题，不能在if条件句中使用useState<br>

搜索字段：使用三元表达式、filter函数和includes函数，以及toLowerCase方法，实现按姓名筛选人员列表功能<br>

与后端通信：<br>
1.使用json-server：<br>
```npm install json-server --save-dev```<br>
更改package.json：```"server": "json-server -p3001 --watch db.json"```<br>
```npm run server```<br>
2.使用axios库从服务器获取数据的初始状态。```npm install axios``` 使用Effect hook完成获取操作。

