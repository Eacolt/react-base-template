 import './App.less'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            times:'ReactBoy!'
        }
    }
    componentDidMount(){
        this.todoList().then((resp)=>{
            console.log(resp)
        })
      
    }
    async todoList(){
        let result = await this.doSth()
        return result;

    }
    doSth(){
        return new Promise((resolve)=>{
            resolve('Hello!!')
        })
    }


    render(){
        return(
            <div>Hello World!{this.state.times}
             <img src={"./img/86.png"}/>
            </div>
        )
    }
}
export default App;