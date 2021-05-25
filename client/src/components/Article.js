import {React} from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar'



const Article = ({title,date,id,shortDesc, author,category}) => {

    

    return (
        <div className='article'>
            
            <div  className="bg-white max-w-80 flex flex-col  justify-center my-2 mx-2 space-y-1 p-4 rounded-lg font-montserrat ">
                <div className=" space-x-5  flex items-center p-3 ">
                <span className='bg-green-300 rounded-2xl p-1 px-3 '>{category}</span>
                <h1 className='text-gray-600'>Date</h1>
                </div>
                <div className="flex flex-col justify-center px-2">
                <h1 className='font-medium my-2'>{title}</h1>
                <div className="flex items-center space-x-3 mb-4">
                    <Avatar />
                <span>{author}</span>
                </div>                
                <p className='mb-3 '>{shortDesc}</p>
                <Link to={`/articles/${id}`}>
                <span className="text-blue-500">Read More...</span>
                </Link>
                </div>             
            </div>
        
        </div>
    )
}

export default Article
