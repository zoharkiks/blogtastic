import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../actions/dataActions';


const Article = ({title,date,coverImg,id}) => {

    

    return (
        <div className='article'>
            <Link to={`/articles/${id}`}>
            <div  className="bg-white flex flex-col h-50 w-60 justify-center my-2 space-y-1x rounded-lg ">
                <img className='max-h-full rounded-t-lg' src={coverImg} alt="" />
                <div className="flex flex-col justify-center px-2">
                <h1 className='text-gray-600 mt-1'>{date}</h1>
                <h1 className='font-medium my-2'>{title}</h1>
                </div>             
            </div>
            </Link>
        </div>
    )
}

export default Article
