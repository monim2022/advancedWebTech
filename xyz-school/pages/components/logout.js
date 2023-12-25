import { Inter } from 'next/font/google';
import Home from '..';
const inter = Inter({ subsets: ['latin'] })

export default function Administrator() {
    const title = "Welcome to our administrator page";
  return (
    <>
     <h1>{title}</h1>
    
      </>
        
  )
}
