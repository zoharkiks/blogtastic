import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="bg-gray-500 flex mt-2 pb-8 w-screen p-2">
                <div className="bg-white mr-1 w-1/2 flex flex-col">
                    <span>About Me</span>
                    <span>Contact</span>
                </div>

                <div className="bg-white w-1/2 grid grid-cols-2 grid-rows-2 gap-2 p-2  place-items-center">
                    <GitHubIcon/>
                    <LinkedInIcon/>
                    <EmailIcon/>
                    <InstagramIcon/>
                </div>

            </div>
        </div>
    )
}

export default Footer
