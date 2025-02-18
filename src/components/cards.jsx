import data from '../data'
import Card from './card'
export default function Cards(){
    return(
        <div className='flex flex-col min-h-[500px] justify-center items-center w-full'>
 <div className='flex flex-wrap justify-center gap-4'>
{
    data.card.map((item)=>(
      <Card key={item.id} item={item}/>
    ))
}
        </div>
        
        </div>
       
    )
}