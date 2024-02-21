import React from 'react';

const MenuCard = ({menuDataAll}) => {
    // console.log(menuData);

    const myStyle = {color: "red"};

  return (
    <>
        <section className='main-card--cointainer'>
        {menuDataAll.map((curElem) => {

           const {id, name, category, image, description } = curElem;

            return (

                <>
                <div className='card-container' key={curElem}>
               <div className='card'>
            <div className='card-body'> 
               
                <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author ' style={myStyle}>{category}</span>

                <h2 className='card-title'>{name}</h2>

                <span className='card-description subtle1'>
                {description}
                </span>

                <div className='card-read'>Read</div>

                <img src={image} alt="images" className='card-media'/>

                <span className='card-tag subtle'>Order Now</span>

            </div>{/* card-body */}
       </div>{/* card */}
       </div>  {/* card-container  */}
       </>

        );

        })}    
</section>
    </>
  )
}

export default MenuCard;
