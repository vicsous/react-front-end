import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axiosInstance from '../utils/axiosInstance';

const baseURL = import.meta.env.VITE_REACT_APP_API_URI;

const Notes = () => {
	const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axiosInstance.get(baseURL + '/notes', { withCredentials: true })
    .then(d => {
      setNotes(d.data.notes);
    })
    .catch(e => {
        console.error(e);
    })
    .finally(() => {
        setLoading(false);
    }) 
  }, [])

  if (loading) return <h1>Loading...</h1>
  return (
    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 flex flex-col items-center">
		<div class="w-full mb-6 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			<span class="bg-blue-900 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg">@meupaldilado</span>

			<h5 className="mb-2 text-2xl font-bold tracking-tight">ql foi a coisa mais aleatoria q vc ja viu?</h5>

			<p className="text-black font-bold drop-shadow-2xl">um dia vi um gurila albino cacçando lampreias na beira do lago baikal a meia noite na lua cheia de uma sexta feira 1</p>
			<hr class="h-px my-4 bg-gray-200 border-0"></hr>
			<div className='flex justify-between'>
			<button className='rounded-lg hover:bg-gray-800'>
				<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/>
				</svg>
			</button>

			<div className='flex'>
				<button className='flex rounded-lg hover:bg-gray-800'>
				<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
				</svg>

				10
				</button>
			</div>
			</div>
		</div>
    {/* Notes Content */}
    {notes.map((note, key) => {
      return (
        <>
			<a href='#' key={key} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">{note.content}</p>
			</a>
        </>
      )
    })}
    </div>
  )
}


function Tabs() {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div className="w-full bg-white border border-gray-200 mt-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Select tab</label>
        <select 
          id="tabs"
          onChange={(e) => setActiveTab(e.target.value)}
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="stats">Statistics</option>
          <option value="services">Services</option>
          <option value="faq">FAQ</option>
        </select>
      </div>
      
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" role="tablist">
        <li className="w-full">
          <button
            onClick={() => setActiveTab('stats')}
            className={`inline-block w-full p-4 rounded-ss-lg ${activeTab === 'stats' ? 'text-blue-500' : 'text-gray-500'} bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`}
          >
            Respondidas (20)
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setActiveTab('notes')}
            className={`inline-block w-full p-4 ${activeTab === 'notes' ? 'text-blue-500' : 'text-gray-500'} bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`}
          >
            Novas (3)
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setActiveTab('faq')}
            className={`inline-block w-full p-4 rounded-se-lg ${activeTab === 'faq' ? 'text-blue-500' : 'text-gray-500'} bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`}
          >
            FAQ
          </button>
        </li>
      </ul>

      <div className="border-t border-gray-200 dark:border-gray-600 dark:text-white">
        {activeTab === 'stats' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            {/* Statistics Content */}
            <h2 className="text-2xl font-bold">Statistics</h2>
            <p>This is the statistics content.</p>
          </div>
        )}
        {activeTab === 'notes' && (
			<Notes />
        )}
        {activeTab === 'faq' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            {/* FAQ Content */}
            <h2 className="text-2xl font-bold">FAQ</h2>
            <p>This is the FAQ content.</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default function Profile() {;
    const user = useSelector(state => state.user)

    return (
        <main className="h-screen py-5 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between flex-col items-center px-4 mx-auto max-w-screen-xl">
				
				{/* Profile Card */}
				<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<div className="flex justify-end px-4 pt-4">
						<button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
							<span className="sr-only">Open dropdown</span>
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
								<path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
							</svg>
						</button>

						<div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
							<ul className="py-2" aria-labelledby="dropdownButton">
							<li>
								<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
							</li>
							<li>
								<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
							</li>
							<li>
								<a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
							</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col items-center pb-10">
						<img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Bonnie image"/>
						<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.data?.username}</h5>
						<span className="text-sm text-gray-500 dark:text-gray-400">{user?.data?.email}</span>
						<div className="flex mt-4 md:mt-6">
							<a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Follow</a>
							<a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
						</div>
					</div>
				</div>

				{/* Tabs */}
				<Tabs />

			</div>
		</main>
    )
  }
  