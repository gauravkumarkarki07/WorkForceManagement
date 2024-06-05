import {cva} from 'class-variance-authority';

const buttonStyle=cva(
    'px-2 py-2 rounded-lg w-full text-white hover:brightness-75 font-semibold',
    {
        variants:{
            variant:{
                primary:'bg-green-500',
                secondary:'bg-blue-500',
                warning:'bg-yellow-500',
                danger:'bg-red-500'
            },
        },
        defaultVariants:{
            variant:"primary"
        }
    }
)

export default function Button({variant, type='submit', action,...props}) {
  return (
    <button className={buttonStyle({variant})} type={type} onClick={action} {...props}/>
  )
}
