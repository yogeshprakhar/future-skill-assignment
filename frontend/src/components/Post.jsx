import React from 'react'

const Post = ({title,desc}) => {
  return (
    <div className='flex flex-col gap-2 w-96 border p-5 rounded-lg bg-slate-400'>
        <div className='font-bold text-lg'>
            {title}
        </div>
        <hr />
        <div>
           {desc}
        </div>
    </div>
  )
}

export default Post