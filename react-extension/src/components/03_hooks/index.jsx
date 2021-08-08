import React from 'react'
import ReactDOM from 'react-dom'
//类式组件
//  class Demo extends React.Component {
//   state={sum:0}
//   myRef=React.createRef()
//   add=()=>{
//     this.setState(state=>({sum:this.state.sum+1}))
//   }
//   unmount=()=>{
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   show=()=>{
//     alert(this.myRef.current.value)
//   }
//   componentDidMount(){
//     this.timer=setInterval(() => {
//       this.setState(state=>({sum:state.sum+1}))
//     }, 1000);
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text"  ref={this.myRef}/>
//         <h2>当前求和为：{this.state.sum}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>点我卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

//函数式组件
function Demo() {
  const [sum, setSum] = React.useState(0)
  const myRef = React.useRef()
  function add() {
    // setSum(sum+1) //第一种写法
    setSum(sum => sum + 1)
  }
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  function show() {
    alert(myRef.current.value)
  }
  React.useEffect(() => {
    let timer = setInterval(() => {
      setSum(sum => sum + 1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{sum}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>点我卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}

export default Demo