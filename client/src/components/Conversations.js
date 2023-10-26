import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversations() {
    const {conversations,selectConversationIndex} = useConversations()
  return (
    <ListGroup variant="flush">
        {conversations.map((conversations,index) => (
            <ListGroup.Item 
            key={index}
            action
            onClick={()=>selectConversationIndex(index)}
            active={conversations.selected}
            
            >
                {conversations.recipients.map(r=>r.name).join(', ')}
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}
