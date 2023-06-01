import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Context from '../context/context';
function ModalContact() {
    const ctx = useContext(Context);
    return (
        <Modal
            open={ctx.contact}
            onClose={ctx.onHandleCancel}
            className='modal-contact'
            id='modal-contact'
            role='form'
            aria-labelledby='modal-title'
        >
            <Box className='modal-contact__content'>
                <div className='modal-contact__header'>
                    <h2
                        className='modal-contact__title heading-2'
                        id='modal-title'
                    >
                        Contact us
                    </h2>
                </div>
                <div className='modal-contact__body'>
                    <form action='' className='form'>
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Full name'
                                required={true}
                                id='name'
                                className='form__input'
                            />
                            <label htmlFor='name' className='form__label'>
                                Full name
                            </label>
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                placeholder='Email'
                                required={true}
                                id='email'
                                className='form__input'
                            />
                            <label htmlFor='email' className='form__label'>
                                Email
                            </label>
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Favorite Pokemon'
                                required={true}
                                id='pokemon'
                                className='form__input'
                            />
                            <label htmlFor='pokemon' className='form__label'>
                                Favorite Pokemon
                            </label>
                        </div>
                        <div className='form__group'>
                            <select
                                required={true}
                                name='department'
                                id='department'
                                className='form__select'
                            >
                                <option defaultValue>
                                    Select the department
                                </option>
                                <option value='Support'>Support</option>
                                <option value='Tecnical'>Tecnical</option>
                            </select>
                        </div>
                        <div className='form__group'>
                            <textarea
                                name='comment'
                                id='comment'
                                rows='5'
                                placeholder='Leave your comment...'
                                className='form__text-area'
                            ></textarea>
                            <label
                                htmlFor='comment'
                                className='form__label'
                            ></label>
                        </div>
                        <div className='form__group form__group--btn'>
                            <button
                                className='btn btn--primary modal-contact__btn'
                                name='send'
                                type='submit'
                            >
                                Send
                            </button>
                            <button
                                className='btn btn--outline modal-contact__btn'
                                id='close-modal-contact-us'
                                name='Cancel'
                                type='button'
                                onClick={ctx.onHandleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalContact;
