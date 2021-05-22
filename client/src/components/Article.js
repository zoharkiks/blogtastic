import {React} from 'react';


const Article = ({title,date,coverImg}) => {

    return (
        <div className='article'>
            <div className="bg-white flex flex-col h-50 w-60 justify-center my-2 space-y-1x rounded-lg ">
                <img className='max-h-full rounded-t-lg' src={coverImg} alt="" />
                <div className="flex flex-col justify-center px-2">
                <h1 className='text-gray-600 mt-1'>{date}</h1>
                <h1 className='font-medium my-2'>{title}</h1>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Article
