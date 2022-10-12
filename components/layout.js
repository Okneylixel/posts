import Nav from './Nav'

export default function Layount({ children }) {
   return (
      <div className='mx-6 bg-red-50 font-poppins'>
         <Nav />
         <main>{children}</main>
      </div>
   )
}