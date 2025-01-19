import Booking1 from "../../components/booking1"
import Booking2 from "../../components/booking2"


const ForBooking = ({params,}:{
     params:{forbooking:string}
}) => {
  return (
    <>
     {params.forbooking==='1' && <Booking1/>}
     {params.forbooking==='2' && <Booking2/>}
     </>
  )
}

export default ForBooking