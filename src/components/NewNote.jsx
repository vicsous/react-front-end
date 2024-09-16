import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import { newNote } from '../store/noteSlice';
import { useDispatch } from 'react-redux';

export default function NewNote({ setTab }) { 
    const [newNoteLength, setNewNoteLength] = useState(0);
    const [loading, setLoading] = useState(false);

    const initialValues = {
        newNote: '',
    };

    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        newNote: Yup
            .string()
            .min(1, 'Too short')
            .max(140, 'Too long')
            .required('Field required')
            .test('nos-blank', 'Can\'t be a blank text', (value) => {
                return value && value.trim() !== ''; // Verifica se a string após remoção de espaços é vazia
        })    
    });

    const handleSubmit = (values, { resetForm }) => {
        setLoading(true);
        const validString = values.newNote.replace(/\s+/g, ' ');
        dispatch(newNote(validString))
            .then(() => {
                setTab('Notes');
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setLoading(false);
                resetForm();
                setNewNoteLength(0);
            })
    };

    return (
        <div className="lg:px-36 xl:px-52 bg-gray-800 text-gray-500">
            <div className="container flex flex-col mx-auto ">
                <div className="flex flex-col rounded-md shadow-sm bg-purple-800 p-6 text-white">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange }) => (
                            <Form className="p-4">
                                <Field
                                    id="newNote"
                                    name="newNote"
                                    as="textarea"
                                    placeholder="Write anything you want..."
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 text-3xl h-48 bg-gray-300"
                                    onChange={(e) => {
                                        handleChange(e);
                                        setNewNoteLength(e.target.value.length); // Atualizar o comprimento da string
                                    }}
                                />
                                <div className={newNoteLength > 140 ? 'text-red-500': '' }>{newNoteLength}/140</div>
                                <ErrorMessage
                                    name="newNote"
                                    component="div"
                                    className="text-red-500"
                                />
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="self-center mt-3 px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 hover:underline"
                                >
                                    Post
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
