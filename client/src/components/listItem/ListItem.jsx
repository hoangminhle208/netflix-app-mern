import React, { useState } from 'react'
import './listItem.scss';
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from '@material-ui/icons';

export default function ListItem({index}) {
    const [isHoverd,setIsHoverd] = useState(false);
    const trailer = "https://youtu.be/d7pr1msPxtg";
    return (
        <div style={{ left : isHoverd && index * 225 - 50 + index * 2.5}}
            className='listItem' 
            onMouseEnter={()=>setIsHoverd(true)} 
            onMouseLeave={()=>setIsHoverd(false)}
        >
            <img src="https://upload.wikimedia.org/wikipedia/vi/2/22/Fast_X_VN_poster.jpg" alt="" />
            {isHoverd && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon'/>
                            <Add className='icon'/>
                            <ThumbUpAltOutlined className='icon'/>
                            <ThumbDownAltOutlined className='icon'/>
                        </div>
                        <div className='itemInfoTop'>
                            <span>1 hour 14 mins</span>
                            <span className='limit'>+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Wow, this looks amazing, and if you combine your previous video (admin template) with these new ones to ultimately build a full-stack / fully functional web app, that'd be AMAZING
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </div>
                </>
            )}
        
        </div>

    )
}
