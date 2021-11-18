import FirstChild from "./FirstChild"
import SecondChild from "./SecondChild"
import ThirdChild from "./ThirdChild"
export default () =>{
    return <div>
        <div>
           <h2> Hello From MySecondComponent</h2>
        </div>
        <FirstChild/>
        <SecondChild/>
        <ThirdChild/>

    
    </div>}