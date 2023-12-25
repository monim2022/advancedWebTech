import Link from 'next/link';

export default function NavBar() {
    return (
        <>
<div className="navbar h-38 w-auto bg-[#d1d1f1] flex sticky top-0 z-40">
<h1 className="text-xl font-extrabold flex-none box-border h-15 p-5 border-4 text-white">MOHESH CHANDRA MODEL GOVT.HIGH SCHOOL</h1>

  <ul className="menu menu-horizontal flex-none">
     <li><Link href="/components/home">Home</Link></li>
     <li><Link href="/components/admission">Admission</Link></li>
      <li><Link href="/components/calender">Calender</Link></li>
      <li><Link href="/components/notice">Notices</Link></li>

      <details className="dropdown">
      <summary className="m-1">More Info</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><Link href="/components/administration">Administrator</Link></li>
      <li><Link href="/components/OurAchievement">Achievment</Link></li>
      <li><Link href="/components/Sports">Sports</Link></li>
      <li><Link href="/components/gellary">Gellary</Link></li>
      <li><Link href="/components/career">Career</Link></li>
      <li><Link href="/components/facilities">Facilities</Link></li>
      <li><Link href="/components/TeachersInfo">Teachers Info</Link></li>
      </ul>
      </details>
      </ul>

      <div className='space-x-3 navbar-end ml-15'> 
      <a href="/components/login" className="btn px-7">Login</a>
      <a href="/components/Home" className="btn px-5">Logout</a>
      </div>
      </div>
      </>

      )
    
    }