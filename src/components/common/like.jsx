import React from 'react';


//Input: Liked: boolean
//Output: OnClick

const Like = (props) => {
    let classes = "fa fa-heart"
    if(!props.liked) classes += "-o"
    return ( <i onClick={props.onClick} style={{cursor:'pointer'}} className={classes}></i> );
}
 
export default Like;