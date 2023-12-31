import React,{useRef} from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'

export default function Login({onIdSubmit}) {
    const idRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        // console.log(idRef.current.value)
        onIdSubmit(idRef.current.value)
    }
    function createNewId(){
        onIdSubmit(uuidV4())
    }
    return (
    <Container className='align-items-center d-flex' style={{height:'100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>输入你的用户ID</Form.Label>
                <Form.Control type="text" placeholder="请输入用户ID" ref={idRef}  required/>
            </Form.Group>
            <Button type='submit' className='mr-2'>登录</Button>
            <Button onClick={createNewId}variant='secondary'>创建新用户</Button>
        </Form>
    </Container>
    )
}
