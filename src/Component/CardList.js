import React from 'react';
import Card from './Card';
/*import { robots } from './roboots';
const {id,name,email}=robots;
*/
const CardList=({ robots })=>{

return(
  <div>
  {
robots.map((user,i)=>{
	////remember always when you are doing  a loop you should give a key to each one because for example if we want to
	// delete some of these robots react will not //know which robot because all of theme are a card  you should give a key .
return   (
	<Card 
    key={i}
	id={robots[i].id} 
	name={robots[i].name} 
	email={robots[i].email}
	 />
	 );
})


  }
  </div>


	);




}

export default CardList;