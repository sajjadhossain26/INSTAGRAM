import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import AuthTemp from '../AuthTemp/AuthTemp'
import TopBar from '../TopBar/TopBar'
import './Home.scss'
import cookie from 'js-cookie'
import { Navigate } from 'react-router-dom'
import LoaderContext from '../../context/LoaderContext'

const Home = () => {
   
    const {token, user, dispatch} = useContext(AuthContext)
    const {loaderDispatch} = useContext(LoaderContext)

  // logout handle 
  const logoutHandle = (e) => {
    e.preventDefault()
    cookie.remove('token')
    cookie.remove('user')
    dispatch({type: "LOGOUT_USER"})
    loaderDispatch({type: "LOADER_START"})
    Navigate('/login')

  }

  return (
 <>
    <TopBar/>
    {/* <AuthTemp/> */}
    
    <div className="timeline-container">
      <div className="timeline-wrapper">

        <div className="post-wrapper">
           <div className="post-card my-3">

          <div className="post-header">
           <div className="post-header-info-wrap">
             <a href="#"><img src="https://cdn.statically.io/img/developersajjad.me/f=auto/wp-content/uploads/2021/12/developersajjad-scaled.jpg" alt="" /></a>

            <div className="post-header-info">
              <span><a href="#">Sajjad Hossain</a></span>
              <span>chittagong</span>
            </div>
           </div>

              <div className="post-header-edit">
              <button><svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
            </div>

          </div>
          
          <div className="post-img">
            <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/284859136_1524534097943161_2317948509695547822_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjgbDZ-lOXlCyAZ8cngBmpAuRcmwCgquEC5FybAKCq4ek7Xy0jEO4SdUwH1RMScWjZsxFY-JVd_Nau6fy0bRM7&_nc_ohc=H6YthCYTs_kAX9iB1Jw&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT9EZJsVD22ivTKrZcksG-FcngIwzApqOT2qHuCh6eoA-A&oe=62EE6956" alt="" />
          </div>
          
          <div className="post-icon">
            <div className="left-post-icon">

              <a href="#"><svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>
              
              <a href="#"><svg aria-label="Comment" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>

              <a href="#"><svg aria-label="Share Post" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>

            </div>
            <div className="right-post-icon">
              <a href="#"><svg aria-label="Save" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
            </div>
          </div>

          <div className="post-content">
            <div className="like-view">
              <span><a href="#">Liked by bonysengupta</a>  and <a href="#">12,909 others</a></span>
            </div>
            <div className="content-view">
              <span><a href="#">sajjadhossain</a> We loved hearing "Super performer" from him after an act in the last season, are we all more excited this time? 🔥😍</span>
            </div>
            <div className="comment-view">
              <span><a href="#">View All 10,000 comments</a></span>
            </div>
            <div className="time-view">
              <span><a href="#">1 day ago</a></span>
            </div>
            <div className="comment">
              <span><a href="#"><svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg></a></span>

              <input type="text" placeholder='Add a comment..'/>

              <button>Post</button>
            </div>
          </div>

           </div>

            <div className="post-card my-3">

          <div className="post-header">
           <div className="post-header-info-wrap">
             <a href="#"><img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/294283445_1557051264691444_267601513978551811_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEZ4lvjvQaP8wyY4LDJBEW5ea5GX7sdg-Z5rkZfux2D5rIPbEKrE3ZhSmLKPkjJb84jB_enOZMEP0yQVADAa7bk&_nc_ohc=sKRf4lO0WRAAX8DC-nf&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT_24z9S3AQpL0_i7lkMOku7gqJVRKUGJ9YkKXL3rz2Ceg&oe=62EFCD9E" alt="" /></a>

            <div className="post-header-info">
              <span><a href="#">Sajjad Hossain</a></span>
              <span>chittagong</span>
            </div>
           </div>

              <div className="post-header-edit">
              <button><svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
            </div>

          </div>
          
          <div className="post-img">
            <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/294283445_1557051264691444_267601513978551811_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEZ4lvjvQaP8wyY4LDJBEW5ea5GX7sdg-Z5rkZfux2D5rIPbEKrE3ZhSmLKPkjJb84jB_enOZMEP0yQVADAa7bk&_nc_ohc=sKRf4lO0WRAAX8DC-nf&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT_24z9S3AQpL0_i7lkMOku7gqJVRKUGJ9YkKXL3rz2Ceg&oe=62EFCD9E" alt="" />
          </div>
          
          <div className="post-icon">
            <div className="left-post-icon">

              <a href="#"><svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></a>
              
              <a href="#"><svg aria-label="Comment" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></a>

              <a href="#"><svg aria-label="Share Post" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>

            </div>
            <div className="right-post-icon">
              <a href="#"><svg aria-label="Save" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></a>
            </div>
          </div>

          <div className="post-content">
            <div className="like-view">
              <span><a href="#">Liked by bonysengupta</a>  and <a href="#">12,909 others</a></span>
            </div>
            <div className="content-view">
              <span><a href="#">sajjadhossain</a> We loved hearing "Super performer" from him after an act in the last season, are we all more excited this time? 🔥😍</span>
            </div>
            <div className="comment-view">
              <span><a href="#">View All 10,000 comments</a></span>
            </div>
            <div className="time-view">
              <span><a href="#">1 day ago</a></span>
            </div>
            <div className="comment">
              <span><a href="#"><svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg></a></span>

              <input type="text" placeholder='Add a comment..'/>

              <button>Post</button>
            </div>
          </div>

           </div>
        </div>

        


        <div className="user-info my-3">

          <div className="user-info-wrap">
            <div className="user-name-wrap">
               <img src={`${user.photo? user.photo: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}`} alt="" />
            
                <div className="username">
                    <a href="#">{user.username}</a><br/>
                  <span>{user.name}</span><br/>
                  <a href="#" className='logout' onClick={logoutHandle}>Log Out</a>
                </div>
              
            </div>
             <button>Switch</button>

          </div>

          <div className="other-info-wrap my-2">
            <div className="other-name-wrap">
            
                <div className="other-username">
                    <a href="#">Suggestions For You</a>
                </div>
              
            </div>
             <button>See all</button>

          </div>

          <div className="other-info-wrap my-2">
            <div className="other-name-wrap">
               <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/284859136_1524534097943161_2317948509695547822_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjgbDZ-lOXlCyAZ8cngBmpAuRcmwCgquEC5FybAKCq4ek7Xy0jEO4SdUwH1RMScWjZsxFY-JVd_Nau6fy0bRM7&_nc_ohc=H6YthCYTs_kAX9iB1Jw&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT9EZJsVD22ivTKrZcksG-FcngIwzApqOT2qHuCh6eoA-A&oe=62EE6956" alt="" />
            
                <div className="other-username">
                    <a href="#">Developer_sajjad</a><br/>
                  <span>Sajjad Hossain</span>
                </div>
              
            </div>
             <button>Follow</button>

          </div>

           <div className="other-info-wrap my-2">
            <div className="other-name-wrap">
               <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            
                <div className="other-username">
                    <a href="#">Developer_sajjad</a><br/>
                  <span>Sajjad Hossain</span>
                </div>
              
            </div>
             <button>Follow</button>

          </div>


           <div className="other-info-wrap my-2">
            <div className="other-name-wrap">
               <img src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            
                <div className="other-username">
                    <a href="#">Developer_sajjad</a><br/>
                  <span>Sajjad Hossain</span>
                </div>
              
            </div>
             <button>Follow</button>

          </div>


           <div className="other-info-wrap my-2">
            <div className="other-name-wrap">
               <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/284859136_1524534097943161_2317948509695547822_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjgbDZ-lOXlCyAZ8cngBmpAuRcmwCgquEC5FybAKCq4ek7Xy0jEO4SdUwH1RMScWjZsxFY-JVd_Nau6fy0bRM7&_nc_ohc=H6YthCYTs_kAX9iB1Jw&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT9EZJsVD22ivTKrZcksG-FcngIwzApqOT2qHuCh6eoA-A&oe=62EE6956" alt="" />
            
                <div className="other-username">
                    <a href="#">Developer_sajjad</a><br/>
                  <span>Sajjad Hossain</span>
                </div>
              
            </div>
             <button>Follow</button>

          </div>


           <div className="other-info-wrap my-2">
            <div className="other-name-wrap">
               <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            
                <div className="other-username">
                    <a href="#">Developer_sajjad</a><br/>
                  <span>Sajjad Hossain</span>
                </div>
              
            </div>
             <button>Follow</button>

          </div>




       

          


       </div>

      </div>
    </div>
    </>

  )
}

export default Home