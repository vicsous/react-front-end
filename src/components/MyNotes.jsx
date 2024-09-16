import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { 
    DeleteIcon,
    LikeButton,
    DislikeButton,
    BookmarkIcon,
    VizualizedIcon,
    ReportIcon
} from '../components/Icons';
import { NavLink } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import dayjs from 'dayjs';

const baseURL = import.meta.env.VITE_REACT_APP_API_URI;

export default function MyNotes () {
    const user = useSelector(state => state.user)
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const query = `#graphql
      query getNotes ($username: String!, $page: Int!) {
        notes(username: $username, page: $page) {
          author {
            username
            name
          }
          text
          createdAt
        }
      }
    `;
    const variables = {
      username: user.data.username,
      page: 0
    };
    axiosInstance.post(baseURL, { query, variables }, { withCredentials: true })
      .then((query) =>{
        setNotes(query.data.data.notes)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [])
    
    return(
        <div className="lg:px-36 xl:px-52 bg-gray-800 text-gray-50 text-left">
        <div className="container flex flex-col mx-auto">
            <div className="flex flex-col rounded-md shadow-sm bg-gray-900 pt-6 px-6">
            {loading ?
            <h1>loading...</h1> :
              notes.map((note, id) => {
                return (
                  <div key={id} className="bg-purple-800 p-6 w-full rounded-lg mb-6">
                    <NavLink to='/blog' className="text-3xl select-text">{note.text}</NavLink>
                    <p className="text-xs py-2">Postad at {note.createdAt} by @{note.author.username.toLowerCase()}</p>
                    <div className="flex justify-between ">
                      <div className="py-1 flex">
                        <button
                          className="py-1 pr-3 flex select-text"
                        ><LikeButton />0</button>
                        <button
                          className="py-1 pr-3 flex select-text" 
                        ><DislikeButton />0</button>
                        <button
                          className="py-1 pr-3 flex select-text" 
                        ><BookmarkIcon />0</button>
                        <button
                          className="py-1 pr-3 flex select-text"
                        ><VizualizedIcon />0</button>
                      </div>
                      <div className="py-1 flex">
                        <button className="py-1 pr-3 flex"><DeleteIcon />Delete</button> 
                        <button className="py-1 pr-3 flex"><ReportIcon />Report</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
      </div>
    )
}