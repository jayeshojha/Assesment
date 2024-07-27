import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
let arr2 = []
let state2 = ''
function Home(){
  const [state,setstate] = useState('')
  const [bool,setbool] = useState(false)
  const [arr2, setarr2] = useState([]);
    const arr = useSelector(state=> state.count)
    //use for rerenders after change value in input tag
    useEffect(()=>{
      if(state !== ''){
        // get an array if a input tag value includes in arr
        let arr3 = arr.filter((v)=>{
          return v.toLowerCase().includes(state.toLowerCase())
        })
        setarr2(arr3)
        setbool(true)
      }else{
         setbool(false)
      }
    },[state])
      return(
        <>
          <div className="Container">
            <div className="Search-bar">
              <input type="search" name="" id="" value={state} onChange={(e)=>setstate(e.target.value)}/><button>Search</button>
              </div>
           {(bool !== false)? <ul className="Content">
                  {
                   arr2 && arr2.map((v)=>{
                      return(
                        <li>{v}</li>
                      )
                   }) 
                  }
              </ul>: ''
                }
          </div>
        </>
      )
}
export default Home