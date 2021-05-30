import {React} from 'react';
import { Link } from 'react-router-dom';
import {dateParser} from '../helpers/date.js'
import Avatar from '@material-ui/core/Avatar'
import '../App.css'

const Article = ({title,date,id,shortDesc, author,category, coverImg}) => {



    return (
        <div className='article'>
            
            <div  className="bg-white flex flex-col justify-center  mx-2 space-y-2 p-4 rounded-lg font-montserrat sm:space-y-5 ">
                <div className=" space-y-2  flex flex-col justify-start items-start p-3 ">
                <span className='bg-green-300 rounded-2xl p-1 px-3 sm:text-xl '>{category}</span>
                <h1 className='text-gray-600 sm:text-xl'>{dateParser(`${date}`)}</h1>
                </div>
                <div className="flex flex-col justify-center px-2 sm:space-y-4">
                <h1 className='font-medium my-2 text-xl sm:text-2xl'>{title}</h1>
                <div className="flex items-center space-x-3 mb-4">
                    <Avatar />
                <span className='text-sm italic sm:text-lg'>{author}</span>
                </div>                
                <p className='mb-3 sm:text-xl md:truncate '>{shortDesc}</p>
                <Link to={`/articles/${id}`}>
                <span className="text-blue-500 sm:text-lg">Read More...</span>
                </Link>
                <img className='mt-5 object-scale-down h-48 w-full' src={coverImg} alt="" />
                </div>             
            </div>
        
        </div>
    )
}

export default Article
