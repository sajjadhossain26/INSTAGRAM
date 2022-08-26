import './AuthFooter.scss'

import React from 'react'

const AuthFooter = () => {
  return (
    <div className="auth-footer">
        <ul>
           <li><a href="#">Meta</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Blog</a></li>
           <li><a href="#">Jobs</a></li>
           <li><a href="#">Help</a></li>
           <li><a href="#">API</a></li>
           <li><a href="#">Privacy</a></li>
           <li><a href="#">Terms</a></li>
           <li><a href="#">Top Accounts</a></li>
           <li><a href="#">Hashtags</a></li>
           <li><a href="#">Location</a></li>
           <li><a href="#">Instagram Lite</a></li>
           <li><a href="#">Contact Uploading & Non-Users</a></li>
           
        </ul>

        <div className="auth-copyright">
            <select name="" id="">
                <option value="">Bangla</option>
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Urdu</option>
            </select>

            <span>© 2022 Instagram from Meta</span>
        </div>
    </div>
  )
}

export default AuthFooter