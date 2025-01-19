import UI1 from "../../components/UI1"
import UI2 from "../../components/UI2"

const ForUI = ({params}:{
     params:{forUI:string}
}) => {
    return (
        <>
         {params.forUI==='1' && <UI1/>}
         {params.forUI==='2' && <UI2/>}
         </>
      )
}

export default ForUI