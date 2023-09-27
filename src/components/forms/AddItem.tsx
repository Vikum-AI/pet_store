import { Button, Label, Modal, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import IAddItem from './IAddItem';

const AddItem = ({edit, onClick}:IAddItem) => {
    const [openModal, setOpenModal] = useState<boolean>();
    return (
        <>
            <Button className='w-full' onClick={() => setOpenModal(true)}>{edit ? 'Edit' : 'Add'}</Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} dismissible >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{edit ? 'Edit Item' : 'Add Item'}</h3>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="itemName" value="Item name" />
                            </div>
                            <TextInput id="name" type='text' placeholder="Whiskars Cat Food" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="quantity" value="Quantity" />
                            </div>
                            <TextInput id="name" type='number' required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="price" value="Enter Price" />
                            </div>
                            <TextInput id="price" type="text" required />
                        </div>  
                        <div className="w-full gap-3 flex justify-around">
                            <Button className='w-full'onClick={() => {if (onClick) onClick()}} >Add</Button>
                            <Button className='w-full' onClick={() => setOpenModal(false)}>Cancel</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>  
        </>
    )
}

export default AddItem