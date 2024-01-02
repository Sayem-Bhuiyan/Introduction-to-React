import ProfilePic from './assets/user.jpg';

function Card(){
    return(
        <div className='card'>
            <img className='profile-picture' src={ProfilePic} alt="Profile picture" />
            <div>
                <h2 className='card-title'>Sayem Bhuiyan</h2>
                <p className='card-description'>I am a Full Stack Web Developer.</p>
            </div>
        </div>
    );
}

export default Card;