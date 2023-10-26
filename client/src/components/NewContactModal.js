import React,{useRef} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({closeModal}) {
    const idRef = useRef()
    const nameRef = useRef()
    const {createContact} = useContacts()

    function handleSubmit (e){
        e.preventDefault()
        createContact(idRef.current.value,nameRef.current.value)
        closeModal()
    }

    return (
    <>
        <Modal.Header closeButton>新增联系人</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>用户ID</Form.Label>
                    <Form.Control type='text' ref={idRef} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>昵称</Form.Label>
                    <Form.Control type='text' ref={nameRef} required/>
                </Form.Group>
                <Button type='submit'>添加</Button>
            </Form>
        </Modal.Body>
    </>
  )
}
