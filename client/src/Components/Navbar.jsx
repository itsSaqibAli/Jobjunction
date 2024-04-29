import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {GiPlasticDuck} from "react-icons/gi";
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'


const Navbar = ({user}) => {
    


    const navigation = [{name: 'Option 1', href: '#'}, {name: 'Option 2', href: '#'}, {
        name: 'Option 3', href: '#'
    }, {name: 'Option 4', href: '#'},]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (<Disclosure as="nav" className="bg-black text-white border-none outline-none z-10 shadow-sm sticky top-0 border">
            {({open}) => (<>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    
                    <div className="navbar">
  <div className="navbar-start">
  <div className="navbar-start  lg:hidden">
    <div className="dropdown">
     
      <ul tabIndex={0} className="menu menu-sm bg-slate-900 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" className={({isActive})=>`${isActive?"text-yellow-300":""}`}>Home</Link></li>
            {/* <li><Link to="/landingpage">Landing Page</Link></li> */}
            <li><Link to="/thankspage">Thank you page</Link></li>
            <li>{!user && <Link to="/signup">Signup</Link>}</li>
            <li>{!user && <Link to="/login">Login</Link>}</li>
                                
      </ul>
    </div>
  </div>
    
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                               
                            </div>  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 ">
                                <Link to="/home" className={({isActive})=>`${isActive?"text-yellow-200 box-border transition-all border-yellow-300 border-b-2":""}`}>Home</Link>
                                    {!user && <Link to="/signup">Signup</Link>}
                                    {!user && <Link to="/login">Login</Link>}
                                    <Link to="/domains">Domain Page</Link>
                                    {/* <Link to="/home">Landing Page</Link> */}
                                    <Link to="/listing">Project Listing</Link>
                                    <Link to="/pd">project Description</Link>
                                    <Link to="/thankspage">Thank you page</Link>
                                    <Link to="/u/id">User</Link>
                                    {/* <Link to="/c/id">User</Link> */}
                                    <Link to="/notification">Notifications</Link>
                                    <Link to="/enrolldetail">Enroll</Link>
                                    <Link to="/form">Form</Link>

                                </div>
                            </div>
                        </div>
  </div> 
  <div className="navbar-end"> 
  <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                            {user && <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button
                                        className="relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5"/>
                                        <span className="sr-only">Open user menu</span>
                                        
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >

                                    <Menu.Items
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                        <Menu.Item>
                                            {({active}) => (<div
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                <Link to="/profilepage/profile">Profile</Link>
                                            </div>)}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({active}) => (<a
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Sign out (go to profile then sign out)
                                            </a>)}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>}
                            
                        </div>
                        
  </div>
  
</div> 
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 bg *:p-2 *:bold *:block">
                        <Link to="/">Home</Link>
                        {!user && <Link to="/signup">Signup</Link>}
                        {!user && <Link to="/login">Login</Link>}
                    </div>
                </Disclosure.Panel>
            </>)}
        </Disclosure>


    );
};

export default Navbar;
