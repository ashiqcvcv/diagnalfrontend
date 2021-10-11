import React, { Component } from 'react'

export class Sample extends Component {
    render() {
        return (
            <body className="bg-gray-100 font-sans leading-normal tracking-normal">
                <nav id="header" className="fixed w-full">

                    <div className="relative w-full z-10 fixed top-0 bg-gray-200 border-b border-grey-light">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                            <div className="pl-4 flex items-center">
                                <svg className="h-5 pr-3 fill-current text-teal-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
                                </svg>
                                <a className="text-teal-700 text-base no-underline hover:no-underline font-extrabold text-xl" href="#"> Searchy</a>
                                <div id="search-toggle" className="search-icon cursor-pointer pl-6">
                                    <svg className="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="pr-4">
                                <button id="nav-toggle" className="block lg:hidden flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none">
                                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                                </button>
                            </div>

                            <div className="w-full flex-grow lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20" id="nav-content">

                                <ul className="list-reset lg:flex justify-end items-center">
                                    <li className="mr-3 py-2 lg:py-0">
                                        <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                                    </li>
                                    <li className="mr-3 py-2 lg:py-0">
                                        <a className="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4" href="#">link</a>
                                    </li>
                                    <li className="mr-3 py-2 lg:py-0">
                                        <a className="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4" href="#">link</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div className="relative w-full hidden bg-white shadow-xl" id="search-content">
                        <div className="container mx-auto py-4 text-black">
                            <input id="searchfield" type="search" placeholder="Search..." autofocus="autofocus" className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl" />
                        </div>

                    </div>

                </nav>



                <div className="pt-24 container mx-auto">
                    <div className="bg-white border p-6 rounded shadow h-64">
                        Click the
                        <svg className="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg> to show the search field.
                    </div>
                </div>

            </body>
        )
    }
}

export default Sample
