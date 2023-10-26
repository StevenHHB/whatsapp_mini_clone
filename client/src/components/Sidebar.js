/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Tab, Nav,Button,Modal} from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
/* eslint-disable no-unused-vars */

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({id}) {
    const [activeKey,setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen,setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    function closeModal(modal) {
        setModalOpen(false)
    }
  return (
    <div style={{width:'250px'}} className='d-flex flex-column'>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                   <Nav.Link eventKey={CONVERSATIONS_KEY}>对话</Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>联系人</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className="border-right border-bottom overflow-auto flex-grow-1">
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations/>
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
            <div className='border-top border-right p-2 small'>
                <span className='text-muted'>你的ID是：{id}</span>
            </div>
            <Button className='rounded-0' onClick={()=>setModalOpen(true)}>
                新增{conversationsOpen ? '对话' : '联系人'}
            </Button>
        </Tab.Container>
        <Modal show={modalOpen} onHide={closeModal}>
            {conversationsOpen ? <NewConversationModal closeModal={closeModal}/> : <NewContactModal closeModal={closeModal}/>
            }
        </Modal>
    </div>
  )
}
