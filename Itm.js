import React from 'react'
import Citem from './ComponentItem'




function Item() {
  return (
   <div className='container my-3'>
   

   
    <h2 className='my-4 mx-2'><u><i>Our <span style={{color:'blue'}}>Products</span></i></u></h2>
    <div className='row '>
      <div className='col-md-4'>
      <Citem  src="https://www.reliancedigital.in/medias/Samsung-43T5350-Televisions-491694871-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2OTQzMDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDczL2gzZS85NDQwNjIzNjI0MjIyLmpwZ3xmYmJmZjM3ZDQwZDVkMzc5MDVkMmZlYTAzMWZkMjBlMjYzOGRkYzZmYTEzZDk2MTVjMTk5ZWFhZmFhMDQ2NzIy"
       title="LED & TV"
       deteils="LED TVs offer exceptional picture quality, allowing you to watch your favourite movies, shows, and sports programs in HD resolution. You can find smart TVs ..."
       
      
       />
      </div>
      <div className='col-md-4 '>
      <Citem  src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       title="LAPTOPS"
       deteils="Get Best Laptop Prices Online in India. Choose from Ultra-thin Laptop, Gaming Laptop from brands like HP, Dell, Lenovo, Acer, and avail great offers."/>
      </div>
      <div className='col-md-4'>
      <Citem  src="https://www.jagranimages.com/images/newimg/12102022/12_10_2022-best_lg_refrigerators_in_india_23135713.jpg" 
      title="Refreigeretor"
       deteils="Buy single, double & multi-door refrigerators/fridges online from Reliance Digital. Shop from top brands like Godrej, Samsung, LG, & more and get Free ..."/>
      </div>
      <div className='col-md-4'>
      <Citem  src="https://5.imimg.com/data5/BQ/OE/MY-55520831/fully-automatic-front-loading-washing-machine-500x500.jpg"
       title="Washing-achine" 
        deteils="Compare & buy washing machines online from Reliance Digital. Choose from the top load, front load, semi-automatic, fully-automatic washing machines across ..." />
      </div>
      <div className='col-md-4'>
      <Citem  src="https://static.toiimg.com/thumb/msid-82197799,width-1200,height-900,resizemode-4/.jpg"
       title="AC "
         deteils="You will find air conditioning units from brands like Samsung, Haier, Voltas and Godrej. With no restrictions on cooling capacity, these ..." />
      </div>
      <div className='col-md-4'>
      <Citem  src="https://www.aequs.com/wp-content/uploads/2021/06/1.-Mixers-Grinders-Rice-Cookers-Induction-Cooktops-Kettles.jpg "
       title="Kitchen-Applience"
         deteils=" Online shopping for Home and Kitchen Appliances Offers from a great selection at Home & Kitchen Store."/>
      </div>
      <div className='col-md-4'>
      <Citem src="https://rukminim1.flixcart.com/image/612/612/knt7zbk0/iron/6/q/i/shine-steam-iron-2200w-with-non-stick-sole-plate-variable-steam-original-imag2emzwyhpvt4b.jpeg?q=70" 
      title="E-irons" 
       deteils=" Shop for irons online at best prices in India at Amazon.in. Get Free 1 or 2 day delivery with Amazon Prime, EMI offers," />
      </div>
      <div className='col-md-4'>
      <Citem src="https://rukminim1.flixcart.com/image/416/416/krp94sw0/speaker/home-theatre/6/m/t/jumbo-plus-9-core-original-imag5fmfzpcuszuh.jpeg?q=70"
       title="Home-Theatear"
        deteils="A home theatre system typically includes a TV, a video source, a receiver and speakers. This powerful combination channels crystal-clear audio and surround ..." />
      </div>
      <div className='col-md-4'>
      <Citem src="https://media.istockphoto.com/id/123544650/photo/cooktop.jpg?s=612x612&w=0&k=20&c=wRD5rK5LoCLcHCrGhuqxUPKOkt6Cznf_rDp_r_iL06E= "
      title="Inductions-stove" 
       deteils="A one-time investment in an induction stove can reduce your dependency on gas stoves. Explore a range of induction ovens online and choose the perfect one ..." />
      </div>
       </div>
      </div>
      
 
 
      
  
  )
}

export default Item


