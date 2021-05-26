import {React} from 'react';
import { Link } from 'react-router-dom';
import {dateParser} from '../helpers/date.js'
import Avatar from '@material-ui/core/Avatar'

const Article = ({title,date,id,shortDesc, author,category, coverImg}) => {



    return (
        <div className='article'>
            
            <div  className="bg-white flex flex-col justify-center my-2 mx-2 space-y-2 p-4 rounded-lg font-montserrat ">
                <div className=" space-x-5 flex justify-items-start items-center p-3 ">
                <span className='bg-green-300 rounded-2xl p-1 px-3 '>{category}</span>
                <h1 className='text-gray-600'>{dateParser(`${date}`)}</h1>
                </div>
                <div className="flex flex-col justify-center px-2">
                <h1 className='font-medium my-2'>{title}</h1>
                <div className="flex items-center space-x-3 mb-4">
                    <Avatar />
                <span className='text-sm italic'>{author}</span>
                </div>                
                <p className='mb-3 '>{shortDesc}</p>
                <Link to={`/articles/${id}`}>
                <span className="text-blue-500">Read More...</span>
                </Link>
                <img className='mt-5' src={coverImg} alt="" />
                </div>             
            </div>
        
        </div>
    )
}

export default Article
