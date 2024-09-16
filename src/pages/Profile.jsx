import { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  MailIcon,
  LocationIcon,
  AtIcon,
  EditIcon,
  UpdateIcon,
  CancelIcon,
  PhotoIcon,
  LikeButton,
  DislikeButton,
  BookmarkIcon,
  NewNoteIcon,
  BookIcon
} from '../components/Icons';

import MyNotes from '../components/MyNotes';
import NewNote from '../components/NewNote';
import ProfileTab from '../components/ProfileTab';

export default function Profile() {;
    const [edit, setEdit] = useState(false);
    const [tab, setTab] = useState('Notes');

    const bg1 = "flex bg-gray-900 items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-white";
    const bg2 = "flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-400 hover:text-white";

    const user = useSelector(state => state.user)

    function handleEdit () {
      setEdit(!edit)
    }
    
    return (
        <>
          <div className="bg-gray-800 text-gray-200 flex justify-center pb-5">
              {!edit ?
                <>
                  <img src="https://source.unsplash.com/100x100/?random" alt="" className="w-48 h-48 rounded-full bg-gray-500 bg-gray-700 p-2" />
                  <div className="px-5">
                    <p className="font-medium text-5xl py-2">{user?.data?.name}</p>
                    <p className="text-xl py-1">Adipisci fuga autem eum!</p>
                    <p className="flex items-center flex-shrink-0 space-x-2"><AtIcon /><span>{user.data.username.toLowerCase()}</span></p>
                    <p className="flex items-center flex-shrink-0 space-x-2"><MailIcon /><span>{user.data.email.toLowerCase()}</span></p>
                    <p className="flex items-center flex-shrink-0 space-x-2 "><LocationIcon /><span>Ananindeua, Pará</span></p>
                  </div>
                </>
                :
                <>
                  <div className="flex flex-col">
                    <img src="https://source.unsplash.com/100x100/?random" alt="" className="w-48 h-48 rounded-full bg-gray-500 bg-gray-700 p-2 m-2" />
                  </div>
                  <div className="bg-gray-800 text-gray-500 flex flex-col text-black">
                    <div className="col-span-full sm:col-span-3">
                      <label htmlFor="firstname" className="text-sm">First name</label>
                      <input id="firstname" type="text" placeholder="João da Silva" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label htmlFor="bio" className="text-sm">Bio</label>
                      <input id="bio" type="text" placeholder="Any text you like" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label htmlFor="idat" className="text-sm">Id, @</label>
                      <input id="idat" type="text" placeholder="josilva" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label htmlFor="email" className="text-sm">Email</label>
                      <input id="email" type="text" placeholder="example@mail.com" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label htmlFor="location" className="text-sm">Location</label>
                      <input id="location" type="text" placeholder="Brasilia, DF" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <button 
                      className="flex items-center self-center px-3 py-3 font-semibold border rounded text-gray-50 border-gray-700 hover:underline"
                    ><PhotoIcon />Mudar foto</button>
                  </div>
                </>
              }
              <div>
                {!edit ? 
                <button 
                  className="flex items-center self-center px-3 py-3 font-semibold border rounded text-gray-50 border-gray-700 hover:underline"
                  onClick={handleEdit}
                ><EditIcon />Edit</button> : 
                <div className="flex flex-col p-2">
                  <button
                    className="flex items-center w-full self-center px-3 py-3 font-semibold border rounded text-gray-50 border-gray-700 hover:underline"
                    onClick={handleEdit}
                  ><UpdateIcon />Save</button>
                  <button
                    className="flex items-center w-full mt-2 self-center px-3 py-3 font-semibold border rounded text-gray-50 border-gray-700 hover:underline "
                    onClick={handleEdit}
                  ><CancelIcon />Cancel</button>        
                </div>}
              </div>
          </div>
        
          <div className="flex items-center overflow-x-auto overflow-y-hidden justify-center flex-nowrap bg-gray-800 text-gray-100">
            <button onClick={() => setTab('New Note')} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 bg-purple-800 rounded-t-lg">
              <NewNoteIcon />
              <span>New Note</span>
            </button>

            <button
              onClick={() => setTab('Notes')} 
              className={tab === 'Notes' ? bg1 : bg2 }>
              <BookIcon />
              <span className="hidden md:block">Notes</span>
            </button>

            <button 
              onClick={() => setTab('Saved')}
              className={tab === 'Saved' ? bg1 : bg2 }
            >
              <BookmarkIcon />
              <span className="hidden md:block">Saved</span>
            </button>

            <button
              onClick={() => setTab('Liked')}
              className={tab === 'Liked' ? bg1 : bg2}
            >
              <LikeButton />
              <span className="hidden md:block">Liked</span>
            </button>

            <button onClick={() => setTab('Disliked')}
              className={tab === 'Disliked' ? bg1 : bg2 }
            >
              <DislikeButton />
              <span className="hidden md:block">Disliked</span>
            </button>
          </div>
          {tab === 'New Note' ?  <NewNote setTab={setTab}/> : <></> }
          {tab === 'Notes' ?  <MyNotes /> : <></> }
          {tab === 'Saved' ?     <ProfileTab name={tab} /> : <></> }
          {tab === 'Liked' ?     <ProfileTab name={tab} /> : <></> }
          {tab === 'Disliked' ?  <ProfileTab name={tab} /> : <></> }
        </>
    )
  }
  