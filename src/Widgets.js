import React from 'react'
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <div>
            <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&width=552&height=274&appId" 
            width="552" 
            height="100%" 
            style={{border: "none", overflow: "hidden"}} 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
            ></iframe>
            </div>

            <div>
            <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D1120543991365686%26set%3Da.103470123073083&show_text=true&width=552&height=498&appId" 
            width="552" 
            height="100%" 
            style={{border: "none", overflow: "hidden"}} 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
            ></iframe>
            </div>

            <div>
            <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FClutchPoints%2Fposts%2F3508105419255506&show_text=true&width=552&height=628&appId" 
            width="552" 
            height="100%" 
            style={{border: "none", overflow: "hidden"}}
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
            ></iframe>
            </div>
        </div>
    )
}

export default Widgets
